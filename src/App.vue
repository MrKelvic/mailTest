<template>
  <div>
    <home/>
  </div>
</template>

<script>
import home from '@/views/home.vue'

export default {
  name: 'App',
  components: {
    home
  },
  mounted(){
  }
}
</script>

<style>
:root{
  --brand:#f4691f;
  --brandSec:#0c1a3d;
  --primary:#fff;
  --secondary:green;
}
*{
  margin:0px;
  padding: 0px;
}
body{
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:16px;
  /* margin-top: 60px; */
}
p{
  margin:0px;
}
button{
  border:none;
}
button:hover{
  cursor: pointer;
}
</style>
