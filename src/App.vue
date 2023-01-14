<template>
  <nav class="sticky-top">
    <router-link to="/">Posts</router-link> |
    <router-link to="/map">Map</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(187, 255, 218);
}

nav {
  padding: 12px;
  background-color: rgb(228, 227, 227);
  text-align: center;
}

nav a {
  font-weight: bold;
  color: rgb(90, 90, 90);
}

nav a.router-link-exact-active {
  color: #33ad76;
}
</style>
