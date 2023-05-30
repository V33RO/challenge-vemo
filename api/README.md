
## Description

Web service para consumir una api externa de countries "https://restcountries.com/ ."

Endpoits:

        a. Obtener la lista de países desde la base de datos, incluyendo todos los campos.
           http://localhost:3000/countries?limit=250&offset=0
           .limit y offset variables
        b. Realizar búsquedas en la base de datos por nombre
           http://localhost:3000/countries?name=Grenada
        c. Ordenar la lista de países alfabéticamente por cualquiera de los campos mencionados anteriormente.
           http://localhost:3000/countries?order=ASC
        d. Obtener la información detallada de un país específico a través de su ID o algún identificador único.
           http://localhost:3000/countries/1
otros:
        1. Ordenandos segun la poblacion de mayor a menor
           http://localhost:3000/countries/populate
        2.Carga de la base
           http://localhost:3000/countries/load-data

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
#port

-3000
