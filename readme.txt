1. Generar DB en MongoDb con el nombre "how-to-guide".
2. Generar coleccion en MongoDb con el nombre "lines"
3. Insertar en dicha colección las rutas de las distintas líneas.
EJ:
db.buses.insert({ "name" : "Línea 12", "number" : "12", "url" : "http://localhost:8000/routes"})
3. Instalar dependencias con el comando "npm install".
4. Correr el proyecto con el comando "npm start".