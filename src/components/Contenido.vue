<template>
  <div class="app">
    <h1 class="title">Iberoamérica</h1>
    <div class="menu">
      <button @click="changeSection('introduccion')">Introducción</button>
      <button @click="changeSection('historia')">Historia</button>
      <button @click="changeSection('cultura')">Cultura</button>
      <!-- Agrega botones para otras secciones -->
    </div>
    <div class="content">
      <!-- Contenido de la sección actual -->
      <div v-if="currentSection === 'introduccion'" class="section">
        <p>¡Bienvenido a la introducción a Iberoamérica!</p>
      </div>
      <div v-else-if="currentSection === 'historia'" class="section">
        <p>Esta es la sección de historia de Iberoamérica.</p>
        <!-- Agrega contenido histórico -->
      </div>
      <div v-else-if="currentSection === 'cultura'" class="section">
        <p>Explora la rica cultura de Iberoamérica.</p>
        <!-- Agrega contenido cultural -->
      </div>
      <!-- Agrega secciones adicionales -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSection: 'introduccion',
    };
  },
  methods: {
    changeSection(section) {
      this.currentSection = section;
    },
  },
};
</script>

<style scoped>
.app {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.menu {
  margin-bottom: 20px;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1f6db9;
}

.content {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.section {
  margin-top: 20px;
}
</style>
