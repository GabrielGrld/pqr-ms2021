# pqr-ms2021
Este repositorio corresponde a un microservicio desarrollado para el Ciclo 4 de MisitonTic 2022.

El link para acceder a esta API - Rest es el siguiente:

https://pqr-ms2021.herokuapp.com/pqr

Para realizar una petición de tipo get a esta URL la API respondera mostrando todos las PQR's almacenadas

Se puede utilizar Postman para verificar el funcionamiento de la API, en este caso para el metódo GET
bastar con digitar la URL https://pqr-ms2021.herokuapp.com/pqr y la API respondera con la lista
de todas las PQR. Las PQR's son almacenadas en una base de datos NoSQL, en este caso particular en MongoDB en una base de datos desplegada en MongoDB Atlas

La estructura de esta colección es la siguiente:

pqrSchema = {
  type : String,   // Type.  P: Petición, Q: Queja, R: Reclamo
  user: Number,   // Usuario que realizá la PQR
  product_id: Number,  //Producto relacionado con la PQR
  content: String,   // Contenido de la PQR
  date: {type: Date, default: Date.now }   //Fecha en la que se realiza la PQR
};

Por lo tanto al realizar cualquier petición tipo GET se obtendra esta estructura.

 Para realizar una PUT request de una PQR se debera realizar al mismo URL
 https://pqr-ms2021.herokuapp.com/pqr. Para evaluar esta funcionalidad en POSTMAN, se debera seleccionar
 en el BODY, la opción raw y luego la que dice JSON. En el siguiente ejemplo será posible observar
 como se debe utilizar este formato:


 {
    "type":"Q",
    "user": 2,
    "product_id": 4,
    "content" : "El producto me ha presentado una falla recurrente luego de realizar dos reemplazos "
}

El campo date no es necesario escribirlo debido a que se llena automaticamente cuando se crea el registro.
