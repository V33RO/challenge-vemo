# MyStoreApi

Debes desarrollar una aplicación web que permita mostrar información sobre los países del mundo
A partir de una API de Countries "https://restcountries.com/ ."

    1. Configura un proyecto Angular para desarrollar el frontend de la aplicación.
    2. Crea componentes en Angular para mostrar la lista de países, el formulario de búsqueda y la información detallada de un país.
    3. Consume la API del backend utilizando servicios en Angular para obtener y mostrar los datos de los países.
    4. Implementa la funcionalidad de búsqueda para filtrar la lista de países en base al nombre, capital o continente.
    5. Agrega opciones de ordenamiento en la lista de países para ordenarla alfabéticamente por cualquiera de los campos.
    6. Diseña y muestra gráficos utilizando bibliotecas como Chart.js o D3.js para representar la información estadística de los países, como el gráfico de barras de los 5 países con mayor población y los gráficos.
    
En este proyecto se utilizo la libreria Chart.js para el diseño y visualizacion de Graficos Estadisticos

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## PROYECTO INCLUYE DOCKER

##PRE REQUISITOS
 -instalar docker
 -instalar docker compose

#step 1
  -posicionarse en la raiz
  -###bash### 
    -docker-compose build 

   generamos las imagenes necesarias: base, back, front incluye un gestor de postgres #pg admin

  -###bash### 
   -docker-compose up -d 
   
   para correr las imagenes
