<template>
  <v-container fluid class="background-contenido height">
    <div v-if="showIframe1" style="width: 100%;">
      <iframe
        src="https://h5p.org/h5p/embed/1447807"
        width="1090"
        height="335"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
        title="Evaluación sobre Iberoamérica"
      ></iframe>
    </div>

    <v-main style="padding: 10px 0px 0px">
      <router-view></router-view>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: "evaluacion_pag",
  data: () => ({
    showIframe1: true, // Configura para que el iframe se muestre automáticamente al cargar la página
  }),

  methods: {
    beforeDestroy() {
      this.showIframe1 = false;
    },
  },
};
</script>

<style>
.btn_background {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
