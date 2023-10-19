<template>
    <div>
      <div id="principal">
        <v-tabs
          v-model="tab"
          color="purple-darken-1"
          align-tabs="center"
        >
          <v-tab :to="{ name: 'contenido_pag' }">
            contenido
            <v-icon x-large class="mb-5"></v-icon>
          </v-tab>
  
          <v-tab :to="{ name: 'actividades_pag' }" class="text-decoration-none mx-auto px-1 tabs_box">
            Actividad
            <v-icon x-large class="mb-5">fas fa-list-ol</v-icon>
          </v-tab>
         
            <v-tab :to="{ name: 'evaluacion_pag' }" class="text-decoration-none mx-auto px-1 tabs_box">
            Evaluacion
            <v-icon x-large class="mb-5">fas fa-clipboard-check</v-icon>
          </v-tab>
  
          <v-tab :to="{ name: 'creditos_pag' }" class="text-decoration-none mx-auto px-1 tabs_box">
            Créditos
            <v-icon x-large class="mb-5">fas fa-clipboard-check</v-icon>
          </v-tab>
        </v-tabs>
  
       
  
        <v-main>
          <transition name="bounce">
            <router-view></router-view>
          </transition>
        </v-main>
      </div>
   
    </div>
  </template>
  
  <script>
  export default {
    name: 'entrada_pag',
    data: () => {
      return {
        tab: null
      };
    }
  };
  </script>
  
  <style>
  #principal {
    background-size: 25px 50px;
  }
  
  .title {
    color: white;
    text-align: right;
    position: relative;
    bottom: -200px;
    right: 200px;
  }
  
  .subtitle {
    color: white;
    text-align: right;
    position: relative;
    bottom: -220px;
    right: 170px;
    font-size: 35px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon {
    align-content: right;
    align-items: right;
    padding-left: 50%;
    position: relative;
    bottom: 450px;
    right: -60px;
    font-size: 50px;
  }
  
  .futuristic-text {
    font-family: "Electrolize", sans-serif;
    /* Fuente similar a la utilizada por Daft Punk */
    font-size: 28px;
    color: #ffda00;
    /* Color amarillo característico de Daft Punk */
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.5;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* Sombra del texto */    /* <p class="futuristic-text">
          Les damos la bienvenid@ a este blog educativo, que tiene como objetivo principal la implementación 
          de estrategias didácticas utilizando recursos multimedia para el mejoramiento del nivel de comprensión 
          lectora de los estudiantes de básica primaria. Esperamos que este blog sea de gran ayuda tanto para los estudiantes como docentes.
        </p>*/
  }
  </style>