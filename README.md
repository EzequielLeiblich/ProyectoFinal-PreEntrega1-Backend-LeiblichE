# ProyectoFinal-PreEntrega1-Backend-LeiblichE

Servidor basado en Node.JS y express desarrollado en el puerto 8080

Actualmente cuenta con 10 productos y 3 carritos creados

Al llamar al servidor desde la url: http://localhost:8080/products se puede observar la totalidad de productos cargados con un query limit defaul de 100 productos.

Al llamar al servidor desde la url: http://localhost:8080/products?limit=5 se puede observar que la cantidad de productos está limitada en solo 5 productos.

Al llamar al servidor desde la url: http://localhost:8080/products/752a3082-639b-4c0b-8070-50e73e1a2668 se observará solo el 2do producto que se lo llamó con su respectiba ID

Al llamar al servidor desde la url: http://localhost:8080/products/34123123 se observa que nos advierte que ese ID de producto no fue encontrado.

Al llamar al servidor desde la url: http://localhost:8080/carts se puede observar la totalidad de carritos cargados con su respectiva ID asi como tambien la ID y Cantidad de cada producto contenido

Al llamar al servidor desde la url: http://localhost:8080/carts/ccf72788-7d54-478f-b02a-22f3b0750806 se puede observar el contenido del 2do carrito con su respectivo ID

Al llamar al servidor desde la url: http://localhost:8080/carts/34123123 se observa que nos advierte que ese ID de carrito no fue encontrado

------------------------------------------------------------------------------------------------------------

Se adjunto al repositorio el archivo "PreEntrega1-BACKEND-LeiblichE.postman_collection.json" el cual contiene el flujo realizado en Postman.

![image](https://github.com/EzequielLeiblich/ProyectoFinal-PreEntrega1-Backend-LeiblichE/assets/113488651/99c3d45e-7791-41eb-90d2-8d78d82d4cd2)

Desde el flujo realizado en Postman podemos:

Productos

* Ver todos los productos

* Ver productos por ID

* Agregar un producto nuevo

* Actualizar un producto por ID

* Eliminar un producto por ID

* Ver productos con limite maximo a 5 productos

Carritos:

* Ver carritos generados

* Ver contenido del ID del carrito

* Crear carrito nuevo

* Agregar un producto al ID del carrito

* Eliminar carrito por ID


--------------------------------------------------------------------------


# ID generados mediante uuidV4

PRODUCTOS:


* ID PRODUCTO 1: "d0eb9086-54ca-49cc-8850-cc4ea16c61be"

* ID PRODUCTO 2: "752a3082-639b-4c0b-8070-50e73e1a2668"

* ID PRODUCTO 3: "79dc2551-fed5-4482-b40c-a92200673ac3"

* ID PRODUCTO 4: "1c2f5170-5777-46e3-9a35-4fdefa3d8027"

* ID PRODUCTO 5: "920db2ef-621e-41d6-80f1-420b8ae08233"

* ID PRODUCTO 6: "9b6205dc-a9d3-49bb-a64c-b89410805a96"

* ID PRODUCTO 7: "03d717b2-1894-472f-9529-c9c7e1c7bcc1"

* ID PRODUCTO 8: "5cb368e9-3a4f-4116-869a-e25eed732d44"

* ID PRODUCTO 9: "a2fbfdd7-dcc3-433d-8182-efda12bec24e"

* ID PRODUCTO 10: "b9a5c2cf-10eb-4915-b126-afba81ad10de"



CARRITOS:



* ID CARRITO 1: "a8a9ec86-c6be-4251-a734-499b1d947550"

* ID CARRITO 2: "ccf72788-7d54-478f-b02a-22f3b0750806"

* ID CARRITO 3: "cb50c4e0-d851-4474-b000-4cc3ad91b434"
# BACKEND-PreEntrega4-LeiblichE
