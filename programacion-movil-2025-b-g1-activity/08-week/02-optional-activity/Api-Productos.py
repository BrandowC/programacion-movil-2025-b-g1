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