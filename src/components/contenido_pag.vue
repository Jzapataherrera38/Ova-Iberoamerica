<template>
    <v-row no-gutters>
      <v-col align="center">
        <div>
          <iframe
            width="860"
            height="615"
            src="https://www.youtube.com/embed/yVsYPh1dl_A?si=VpRZVM8wkTaplK5_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: "ContenidoPage",
    data: () => ({
      //
    }),
  
    beforeDestroy() {
      // Lógica de destrucción si es necesaria
    },
  };
  </script>
  