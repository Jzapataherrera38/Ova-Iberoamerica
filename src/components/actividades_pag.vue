<template>
    <v-container fluid class="background-contenido height">
      <v-row no-gutters>
        <v-col align="center">
          <v-btn color="blue" @click="toggleIframe(1)">
            Reto 
          </v-btn>
        </v-col>
   
      </v-row>
  
      <div v-if="showIframe1" style="width: 100%;">
      <iframe
        src="https://h5p.org/h5p/embed/1447783"
        width="1190"
        height="950"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
        title="SOPA DE LETRAS"
      ></iframe>
    </div>

  
      <v-row no-gutters>
        <v-col align="center">
          <v-main style="padding: 10px 0px 0px">
            <router-view></router-view>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "actividades_pag",
    data: () => ({
      showIframe1: false,
      showIframe2: false,
      showIframe3: false
    }),
  
    methods: {
      toggleIframe(index) {
        if (index === 1) {
          this.showIframe1 = !this.showIframe1;
          this.showIframe2 = false;
          this.showIframe3 = false;
        } else if (index === 2) {
          this.showIframe2 = !this.showIframe2;
          this.showIframe1 = false;
          this.showIframe3 = false;
        } else if (index === 3) {
          this.showIframe3 = !this.showIframe3;
          this.showIframe1 = false;
          this.showIframe2 = false;
        }
      }
    },
  
    beforeDestroy() {
      this.showIframe1 = false;
      this.showIframe2 = false;
      this.showIframe3 = false;
    }
  };
  </script>
  
  <style>
  .btn_background {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>