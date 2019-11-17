'''

Creado por: <Juan Esteban Arias Henao>
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

# Clase para administrar los cálculos del indicador de eficiencia
class IndicadorEficiencia:

    df1 = None
    df2 = None
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
        self.df1,self.df2= self.__procesar()

    # Lee los archivos y los procesa
    def __procesar(self):
        import pandas as pd
        DF_consolidado=pd.ExcelFile(self.consolidado_diario)
        DF_usuarios = pd.read_csv(self.usuarios, sep=',', header=0)
        #dataframes por hojas separadas
        hoja_consolidado=DF_consolidado.parse("Reporte Consolidado")
        return hoja_consolidado,DF_usuarios


    # Método que calcula el indicador de eficiencia por DM
    def calcular_indicador_dm(self):
        
        #union de las tablas por la columna Usuario
        indicador_dm=pd.merge(self.df1, self.df2, left_on='Usuario', right_on='Usuario')
        self.no_otros=indicador_dm


        #CASO A
        indicador_A=indicador_dm[(indicador_dm['EsProyecto'] == 'SI') &(indicador_dm['EsCargable'] == 'SI')]
        self.cargables=indicador_A

        #CASO B
        indicador_B=indicador_dm[(indicador_dm['EsProyecto'] == 'SI') &(indicador_dm['EsCargable'] == 'NO')]
        self.no_cargables=indicador_B

        #CASO C
        indicador_c=pd.merge(self.df2,indicador_B, left_on='DMOrigen', right_on='DMOrigen')
        self.no_otros=indicador_c



        


    # Método que calcula el indicador de eficiencia por Compañía
    def calcular_indicador_compania(self):
        # Tu código
        pass


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

        # Tu codigo de comparación
        pass


    # Valida el indicador por Compañía
    def test_ie_compania(self):
        # Datos de referencia
        datos = {
            "Indicador": [85]
        }
        df = pd.DataFrame(data=datos)

        # Tu código de comparación
        pass


# Crea el set de pruebas untarias y lo corre
#suite = unittest.TestLoader().loadTestsFromTestCase(TestIndicadorEficiencia)
#unittest.TextTestRunner(verbosity=2).run(suite)


indicadorEficiencia=IndicadorEficiencia("Reporte_Consolidado-julio-2019.xlsx","Usuarios.csv")

#muestro el dataFrame de reporte_consolidado
indicadorEficiencia.df1
#muestro el dataFrame de usuarios
indicadorEficiencia.df2

indicadorEficiencia.calcular_indicador_dm()
