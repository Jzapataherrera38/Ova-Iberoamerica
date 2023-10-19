<template>
    <v-app>
        <v-row class="mt-10">
        <v-col>
        <v-card class="mx-auto py-2"  rounded max-width="500" elevation="5">
          <v-row justify="center">
            <div class="title_proyect">
              <h2>RESPONSABLES DEL PROYECTO</h2>
            </div>
          </v-row>
          <v-row class="box-card" justify="center">
            <div class="usuario1" />
            <div class="descripcion">
              <div class="title_name">
                <h3>Yeni Sofia Miranda Osten</h3>
              </div>
              <div class="parrafo_name">
                <p>Programadora/Diseñadora/Investigadora<br>
                  </p>
              </div>
            </div>
          </v-row>
    
          <v-row class="box-card" justify="center">
            <div class="usuario2" />
            <div class="descripcion">
              <div class="title_name">
                <h3>Angie Paola Argel Ortiz</h3>
              </div>
              <div class="parrafo_name">
                <p>Programadora/Diseñadora/Investigadora</p>
              </div>
            </div>
          </v-row>
          <br>
          <v-card class="py-1 mt-5 mx-auto" rounded max-width="480" elevation="5">
     
        </v-card>
        </v-card>
        </v-col>
    
        <v-col>
        <v-card class="py-1 mx-auto" rounded max-width="480" elevation="5">
          <v-row justify="center">
            <div class="title_proyect">
              <h2>UNIVERSIDAD DE CORDOBA</h2>
            </div>
          </v-row>
          <v-row class="box-card" justify="center">
            <div class="logo" />
          </v-row>
        </v-card>
    
      
    
        </v-col>
        </v-row>
        </v-app>
    </template>
        <script>
        export default {
          name: "creditos_pag",
          data: () => ({
            //
          }),
        
          beforeDestroy() {
            },
        };
        </script>
    
    <style>
    
    
    
    
    .box-card {
      margin: 20px 0px 10px 0px;
    }
    
    .descripcion {
      padding-left: 60px;
      margin-left: -50px;
      width: 400px;
      height: 50px;
    }
    
    .title_name {
      border-radius: 10px 10px 0px 0px;
      padding-left: 60px;
      margin-left: -50px;
      background-color: rgba(0, 0, 0, 0.3);
      color: rgb(5, 5, 5);
    }
    
    .parrafo_name {
      border-radius: 10px 0px 0px 0px;
      padding-left: 60px;
      margin-left: -50px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      color: rgb(0, 0, 0);
    }
    
    .usuario1 {
      border-radius: 100%;
 
      background-size: cover;
      width: 80px;
      height: 80px;
      position: relative;
      z-index: 2;
    
    }
    
    
    .usuario2 {
      border-radius: 100%;
  
      background-size: cover;
      width: 80px;
      height: 80px;
      position: relative;
      
      z-index: 2;
    }
    
    
 

 
    
    
 
    .logo {
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.1);
      background-image: url(../assets/Ilustraciones/logo.png);
      background-size: contain;
      width: 500px;
      height: 349px;
    }
    
    
    </style>