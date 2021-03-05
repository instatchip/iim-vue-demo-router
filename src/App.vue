<template>
  <div class="hero-head">
    <nav class="navbar" id="nav">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/">Accueil</router-link>
          <span class="mx-3">|</span> 
          <router-link :to="{ path: getWhoLink() }">Qui sommes-nous?</router-link>
          <span class="mx-3">|</span> 
          <router-link to="/a-propos">À propos</router-link>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>


<script>
  export default {
    name: 'app',
    methods: {
      getWhoLink: function() {
        return '/qui-sommes-nous'
      }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
