<template>
  <v-app>   
   <v-main>
    <br>
    
    <h1 class="title"><span style="font-size: 58px;">Iberoamérica</span> </h1>
    <br>
      
    

   
   
  
<div class="icon">
      <router-link to="/entrada">
        <v-btn
        x-large
        color="primary"
        :fab="true"
        elevation="15"
        class="boton-futurista"
      >
        <v-icon color="white">start</v-icon>
      </v-btn>
            </router-link>
            </div>
         
  
            
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'InicioPage', 
  components: {
    
  },

  data: () => {
  
    return {
          
    
    };
  }
};
</script>

<style>

#app {
  background: url('../assets/Background/Back.jpg') ;
  background-size: cover;
  
}

.title {
color:  rgb(255, 255, 255);
text-align: right;
position: relative;
  bottom: -250px;
   right: 800px;


}

.subtitle {
  color:  white;
text-align: right;
position: relative;
  bottom: -220px;
   right: 170px;
   font-size: 35px;
  

}

body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon {
  position: relative;
  width:-600px;
  height: -400px;
  top: 300px;
  right: -280px;
  

}

.boton-futurista {
  font-family: "Arial", sans-serif;
  background-color: #007bff;
  color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.boton-futurista:hover {
  background-color: #0056b3;
}

.boton-futurista:active {
  background-color: #002c66;
  box-shadow: none;
  transform: translateY(2px);
}
</style>