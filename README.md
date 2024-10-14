<div align="left">
  <blockquote>
   Christian Carmelo Calderon Castro
  </blockquote>
</div>
<br/>

<div align="center">
    <img alt="nestjs-logo" width="250" height="auto" src=".readme-static/logo-nestjs.svg" />
    <h1>Reto Técnico<br/>BackEnd Developer NodeJs AWS</h1>
</div>



Esta API rest esta desarrollada para cumplir con lo solicitado en el reto técnico de la empresa SoftTech para el puesto de NodeJs Backend Developer .

## Glosario


- [📝 Contenido](#content)
- [🛠️ Instalarción](#install)
- [⚙️ Desplegado](#deployment)


---

<a name="content"></a>

## 📝 Contenido

- Esta API contiene integración con BD DynamoBD, para ello se ha subido un archivo docker-compuse para poder hacer su despligue en forma local
- Esta API se encuentra integrada con la API de StarWars  - [⛓️‍💥 API URL](https://swapi.py4e.com/documentation)
- Esta API expone los siguientes endpoint
  GET /starwars-people -- Obtiene todos los personas desde la API de StarWars
  GET /starwars-people/{id} --Obtiene un personaje específico según el id enviado
  GET /personas -- Obtiene todas las personas regitradas en la BD de Dynamo
  GET /personas/{id} --Obtiene una persona en específico según el id enviado
  POST /personas --Genera el registro de una persona 


<a name="install"></a>

## 🛠️ Instalación

Para poder ejecutar en local la aplicación primero debera realizar el clonado de la misma e instalar las dependencias con cualquiera de los siguientes comandos <br/>
1. Instalar dependencias

```
npm install 
```

```
yarn install
```

2. Ejecutar el docker-compose para generar la imagen de DynamoDB

```
docker compose up -d
```

3. Realizar la copia de las variables de entorno el archivo .env.test y renombrarlo como .env.dev

4. Inicializa el programa en modo desarrollo

```
npm run start:dev 
```

```
yarn start:dev
```
5. Al inicializarlo en la consola le saldrá la ruta que lo llevara a la documentación del proyecto con Swagger

```
[Nest] 30524  - 13/09/2024, 05:17:09     LOG [reto-backend] 📚 Swagger is running on: http://localhost:8080/v1/docs
```

<a name="deployment"></a>

## 📄 Desplegado

Se tiene los siguientes endpoints listos para poder ser usados desde postman, estos se encuentran desplegados en AWS

 - GET - https://5421vj0mw0.execute-api.us-east-1.amazonaws.com/dev/personas
 - GET - https://5421vj0mw0.execute-api.us-east-1.amazonaws.com/dev/personas/{id}
 - POST - https://5421vj0mw0.execute-api.us-east-1.amazonaws.com/dev/personas
 - GET - https://5421vj0mw0.execute-api.us-east-1.amazonaws.com/dev/starwars-people
 - GET - https://5421vj0mw0.execute-api.us-east-1.amazonaws.com/dev/starwars-person/{id}

---


