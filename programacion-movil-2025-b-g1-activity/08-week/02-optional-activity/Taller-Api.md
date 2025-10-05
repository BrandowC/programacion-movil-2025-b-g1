# Proyecto: API de Productos

- **Actor:** Brandow Claros  
- **Materia:** Programación Móvil  
- **Tema:** Creación de una API REST para la gestión de productos  
- **Proyecto:** API Productos  
- **Fecha de realización:** 05 de octubre de 2025  

## Introducción
La presente API está diseñada para gestionar información relacionada con productos. Permite registrar, consultar, actualizar y eliminar productos de manera sencilla, sirviendo como base para aplicaciones de inventario, comercio electrónico o sistemas administrativos. Está construida bajo los principios REST y utiliza **FastAPI** en Python como framework backend.

---

## Alcance
- Implementar una API con endpoints básicos de productos.  
- Permitir operaciones de **crear, leer, actualizar y eliminar** (CRUD).  
- Garantizar que la información de los productos quede estructurada y pueda ser consultada fácilmente desde un cliente (ejemplo: Postman o una aplicación frontend).  
- La API estará enfocada en un entorno educativo/demostrativo y no contempla despliegue en producción.

---

## Escenario
Una empresa requiere llevar control sobre su inventario de productos. Cada producto tiene información como nombre, descripción, precio, stock y fecha de creación. Con la API, el administrador puede registrar nuevos productos, consultar los existentes, actualizar su información o eliminarlos si ya no se encuentran disponibles.

---

## Justificación
El desarrollo de una API para productos permite comprender de forma práctica cómo funcionan los servicios REST en la gestión de recursos. Además, fomenta la aplicación de buenas prácticas de backend y constituye un paso fundamental hacia la integración con aplicaciones móviles o web que necesiten consumir datos de inventario en tiempo real.

---

## Objetivo
Diseñar e implementar una API básica en Python (FastAPI) que permita la gestión de productos, incorporando las operaciones principales de un sistema CRUD, documentando el proceso y validando su funcionamiento mediante pruebas en Postman.

---

## Requerimientos Funcionales
1. La API debe permitir registrar un nuevo producto con los datos: nombre, descripción, precio y stock.  
2. La API debe permitir consultar todos los productos existentes.  
3. La API debe permitir consultar un producto específico por su identificador único.  
4. La API debe permitir actualizar los datos de un producto existente.  
5. La API debe permitir eliminar un producto del sistema.  
6. La API debe almacenar temporalmente los datos en memoria (lista de Python).  

---

## Implementación en Python (FastAPI)

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uuid
from datetime import datetime

app = FastAPI()

# Modelo del producto
class Producto(BaseModel):
    nombre: str
    descripcion: str
    precio: float
    stock: int

# Base de datos en memoria
productos = []

# Crear producto
@app.post("/api/productos")
def crear_producto(producto: Producto):
    nuevo = producto.dict()
    nuevo["id"] = str(uuid.uuid4())
    nuevo["fecha_creacion"] = str(datetime.now())
    productos.append(nuevo)
    return nuevo

# Listar productos
@app.get("/api/productos")
def listar_productos():
    return productos

# Obtener producto por ID
@app.get("/api/productos/{id}")
def obtener_producto(id: str):
    for producto in productos:
        if producto["id"] == id:
            return producto
    raise HTTPException(status_code=404, detail="Producto no encontrado")

# Actualizar producto
@app.put("/api/productos/{id}")
def actualizar_producto(id: str, datos: Producto):
    for producto in productos:
        if producto["id"] == id:
            producto.update(datos.dict())
            return producto
    raise HTTPException(status_code=404, detail="Producto no encontrado")

# Eliminar producto
@app.delete("/api/productos/{id}")
def eliminar_producto(id: str):
    for producto in productos:
        if producto["id"] == id:
            productos.remove(producto)
            return {"mensaje": "Producto eliminado"}
    raise HTTPException(status_code=404, detail="Producto no encontrado")

