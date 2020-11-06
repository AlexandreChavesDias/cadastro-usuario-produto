<template>
  <div id="app">
<Cadastro/>
<Usuario/>

  </div>
</template>

<script>
import Cadastro from "./components/cadastro.vue"

export default {
  name: 'App',
  components: { Cadastro,
  Usuario
  }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
