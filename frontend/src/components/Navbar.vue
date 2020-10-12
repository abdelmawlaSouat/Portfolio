<template>
  <v-app-bar dark>
    <v-row align="center" justify="space-around" justify-sm="space-around">
      <v-toolbar-title style="overflow: visible">
        <router-link
          to="#"
          class="logo pa-2"
          style="color: white"
        >
          AS
        </router-link>
      </v-toolbar-title>
      <div>
        <router-link
          v-for="(item, idx) in items"
          :key="idx"
          :to="item.anchor"
          class="mx-2"
          style="color: white"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="">
        <a href="https://www.linkedin.com/in/abdelmawla-souat-3a4aa1165/">
          <v-icon class="ml-5 mr-1">
          mdi-linkedin
        </v-icon>
        </a>
        <a href="https://github.com/abdelmawlaSouat">
          <v-icon class="mx-1">
          mdi-github
        </v-icon>
        </a>
      </div>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      items: [
        { name: 'HOME', anchor: '#' },
        { name: 'ABOUT ME', anchor: '#about-me' },
        { name: 'PROJECTS', anchor: '#projects' },
        { name: 'CONTACT', anchor: '#contact' }
      ]
    }
  }
}
</script>

<style>

a {
  text-decoration: none;
}

.logo {
  border: 1px solid white;
}
</style>
