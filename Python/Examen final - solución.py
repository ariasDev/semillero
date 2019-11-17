'''

Creado por: Ricardo José Ramírez Blauvelt
Fecha: 2019-09-16

Debemos calcular el indicador de eficiencia para el mes de julio de 2019 en Sophos Solutions.
El indicador se calcula como el total de las horas cargables sobre el total de las horas.

Para tal fin, vamos a tomar como base, los registros del timetracker de los empleados 
de la compañía. Allí figuran todos los tiempos registrados durante el mes, en los 
diferentes proyectos disponibles, del archivo "Reporte_Consolidado-julio-2019.xlsx".
Las horas totales por usuario y proyecto quedan en la columna "Horas".

Los siguientes proyectos son ignorados en el cálculo:
- SBPR0001
- SBSB2004
- SBSB3003
- SBSB3028
- SBSB3031
- SBSB3034
- SBSB3035
- SBSB3037
- SBSB3040
- SBSB3054
- SBSB3023
- SBSB3025
- SBSB3033
- SBSB3053
- SBSB4003

A - Se consideran horas de proyectos cargables, los registros que cumplen con estas condiciones:
    1. EsProyecto -> SI (1)
    2. EsCargable -> SI (1)
    3. El código de la DM empieza por "DM"

B - Se consideran horas de proyectos NO cargables, los registros que cumplen con estas condiciones:
    1. EsProyecto -> SI (1)
    2. EsCargable -> NO (0)
    3. El código de la DM empieza por "DM"

C- Se incluyen en horas no cargables, los registros que cumplen con estas condiciones:
    1. EsProyecto -> SI (1)
    2. EsCargable -> NO (0)
    3. El código de la DM NO empieza por "DM"

Las horas cargables son el ítem A, y las horas no cargables son la suma de B y C.

El indicador de eficiencia se calcula, según la agrupación (Compañía, DM o PMO), como:
IE = (A * 100) / (A + B + C)

Las horas no cargables que no son de proyectos (ítem C), se miden por la DM a la que pertenece el 
usuario que las registra, información que se encuentra en el archivo "Usuarios.csv", y así, se 
consolidan con las de proyectos (es decir, se deben unir por el campo DMOrigen y no por DMCode)

INSTRUCCIONES
1. Debe crear una clase llamada "IndicadorEficiencia" cuyo constructor recibe los dos archivos a 
    procesar: el registro de tiempos y la pertenencia de los usuarios
2. La clase debe tener como mínimo 2 métodos públicos:
    a. "calcular_indicador_dm": devuelve un DataFrame con dos columnas -> "DM" e "Indicador", con 
        filas por cada DM
    b. "calcular_indicador_compania": devuelve un DataFrame con una columna -> "Indicador" y una fila
    En ambos casos, el indicador se debe retornar redondeado a cero cifras
3. Debe crear las pruebas unitarias de la clase "IndicadorEficiencia", en una clase llamada 
"TestIndicadorEficiencia"
4. Las pruebas unitarias deben tener 2 métodos:
    a. "test_ie_dm"
    b. "test_ie_compania"
    Estos métodos deben asegurar los resultados que se brindan a continuación

        - Resultados por DM:
            DM01         75
            DM02         84
            DM03          0
            DM05         69
            DM06         83
            DM07         97
            DM08         84
            DM09         77
            DM10          0
            DM11         68
            DM12         89
            DM14         88
            DM16         96
            DM17         84
            DM18         86
            DM19          0
        
        - Resultado por Compañía
            Compañía    85


'''

import pandas as pd
import unittest
import os

# Cambia la ruta de trabajo
os.chdir(os.path.dirname(os.path.realpath(__file__)))

# Clase para administrar los cálculos del indicador de eficiencia
class IndicadorEficiencia:

    df = None
    cargables = None
    no_cargables = None
    no_otros = None

    # Proyectos a ignorar
    ignorar = {
        "SBPR0001",
        "SBSB2004",
        "SBSB3003",
        "SBSB3028",
        "SBSB3031",
        "SBSB3034",
        "SBSB3035",
        "SBSB3037",
        "SBSB3040",
        "SBSB3054",
        "SBSB3023",
        "SBSB3025",
        "SBSB3033",
        "SBSB3053",
        "SBSB4003"
    }

    # Constructor de la clase
    def __init__(self, consolidado_diario, usuarios):
        self.consolidado_diario = consolidado_diario
        self.usuarios = usuarios
        self.__procesar()

    # Lee el consolidado diario
    def __procesar(self):
        # Lee el archivo de Excel
        excel_file = pd.ExcelFile(self.consolidado_diario)
        sheets = pd.read_excel(excel_file, sheet_name=None)
        self.df = sheets["Reporte Consolidado"]
        self.df = self.df[["DMCode", "PMOCode", "Proyecto", "Usuario", "EsProyecto", "EsCargable", "Horas"]]
        self.df = self.df.rename(columns = {"DMCode": "DM", "PMOCode": "PMO"}).reset_index(drop = True)

        # Lee los usuarios
        usuarios = pd.read_csv(self.usuarios)

        # Integra los usuarios
        self.df = pd.merge(self.df, usuarios, on="Usuario", how="inner")

        # Elimina los proyectos no necesarios
        self.df = self.df.query('Proyecto not in @self.ignorar').reset_index()

        # Horas cargables de proyectos
        self.cargables = self.df.query('EsProyecto == "SI" and EsCargable == "SI" and DM.str.startswith("DM")').reset_index()

        # Horas NO cargables de proyectos
        self.no_cargables = self.df.query("EsProyecto == 'SI' and EsCargable == 'NO' and DM.str.startswith('DM')").reset_index()

        # Horas NO cargables de otros conceptos
        self.no_otros = self.df.query("EsProyecto == 'SI' and EsCargable == 'NO' and ~DM.str.startswith('DM')").reset_index()
        self.no_otros = self.no_otros[["DMOrigen", "PMOOrigen", "Proyecto", "Usuario", "EsProyecto", "EsCargable", "Horas"]]
        self.no_otros = self.no_otros.rename(columns = {"DMOrigen": "DM", "PMOOrigen": "PMO"}).reset_index()


    # Método que calcula el indicador de eficiencia por DM
    def calcular_indicador_dm(self):
        # Consolida por DM los resultados
        horas_cargables = self.cargables.groupby(["DM"])["Horas"].sum().reset_index()
        horas_no_proyectos = self.no_cargables.groupby(["DM"])["Horas"].sum().reset_index()
        horas_no_otros = self.no_otros.groupby(["DM"])["Horas"].sum().reset_index()
        horas_no_cargables = pd.merge(horas_no_proyectos, horas_no_otros, on="DM", how="outer")

        # Consolida todas las horas
        dm = pd.merge(horas_cargables, horas_no_cargables, on="DM", how="outer", sort=True).fillna(0)

        # Calcula el indicador
        dm["Indicador"] = dm.apply(lambda row: round(row["Horas"] * 100 / (row["Horas"] + row["Horas_x"] + row["Horas_y"])), axis = 1)
        
        # Entrega el DataFrame
        return dm[["DM", "Indicador"]]


    # Método que calcula el indicador de eficiencia por Compañía
    def calcular_indicador_compania(self):
        # Consolida los resultados
        horas_cargables = self.cargables["Horas"].sum()
        horas_no_proyectos = self.no_cargables["Horas"].sum()
        horas_no_otros = self.no_otros["Horas"].sum()
        indicador = round(horas_cargables * 100 / (horas_cargables + horas_no_proyectos + horas_no_otros))

        # Crea el DataFrame
        datos = {
            "Indicador": [int(indicador)]
        }

        # Entrega el DataFrame
        return pd.DataFrame(data = datos)


# Pruebas unitarias
class TestIndicadorEficiencia(unittest.TestCase):

    consolidado = "Reporte_Consolidado-julio-2019.xlsx"
    usuarios = "Usuarios.csv"
    ie = None

    @classmethod
    def setUpClass(self):
        self.ie = IndicadorEficiencia(self.consolidado, self.usuarios)
    
    # Valida el indicador por DM
    def test_ie_dm(self):
        # Datos de referencia
        datos = [
            ["DM01", 75],
            ["DM02", 84],
            ["DM03",  0],
            ["DM05", 69],
            ["DM06", 83],
            ["DM07", 97],
            ["DM08", 84],
            ["DM09", 77],
            ["DM10",  0],
            ["DM11", 68],
            ["DM12", 89],
            ["DM14", 88],
            ["DM16", 96],
            ["DM17", 84],
            ["DM18", 86],
            ["DM19",  0]
        ]
        df = pd.DataFrame(datos, columns = ["DM", "Indicador"])

        # Calcula el indicador
        dm = self.ie.calcular_indicador_dm()

        # Valida
        self.assertTrue(df.equals(dm))


    # Valida el indicador por Compañía
    def test_ie_compania(self):
        # Datos de referencia
        datos = {
            "Indicador": [85]
        }
        df = pd.DataFrame(data=datos)

        # Calcula el indicador
        compania = self.ie.calcular_indicador_compania()

        # Valida
        self.assertTrue(df.equals(compania))


# Archivo a procesar
#consolidado = "Reporte_Consolidado-julio-2019.xlsx"
#usuarios = "Usuarios.csv"

# Crea la clase
#ie = IndicadorEficiencia(consolidado, usuarios)
#print(ie.calcular_indicador_dm())
#print(ie.calcular_indicador_compania())

# Crea el set de pruebas untarias y lo corre
suite = unittest.TestLoader().loadTestsFromTestCase(TestIndicadorEficiencia)
unittest.TextTestRunner(verbosity=2).run(suite)
