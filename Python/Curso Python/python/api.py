import requests
import json

urlApiProductos = "http://localhost:8085/colaboradores"

# Petición get
response = requests.get(urlApiProductos)

print(response)
print(response.status_code)
print(response.encoding)
print(response.headers)
print(response.text)

producto = json.loads(response.text)
print(producto)

print(json.dumps(producto, indent=4, sort_keys=True))


#______________________________________________________

url = "http://localhost:8085/colaboradores/insertar"

# Payload
datos = {
    "apellido": "galaxia",
    "cargo": "aprendiz",
    "estado": "activo",
    "fecharegistro": "2018-12-31",
    "id_colaboradores": 13,
    "nombre": "andromeda",
    "usuariored": "na"
}

# Envía la solicitud a la API
response = requests.post(url, json=datos)

# Imprime la respuesta
if response.ok:
  print(response.json()["resultado"])