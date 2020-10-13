<template>
  <v-toolbar dark>
    <v-row align="center" justify="space-around" justify-sm="space-around">
      <v-toolbar-title style="overflow: visible">
        <span class="logo pa-2">AS</span>
      </v-toolbar-title>

      <div>
        <a
          v-for="(item, idx) in items"
          :key="idx"
          href="#"
          v-scroll-to="item.anchor"
          class="mx-2"
        >
          {{ item.name }}
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/abdelmawla-souat-3a4aa1165/"
          target="_blank"
        >
          <v-icon class="ml-5 mr-1">mdi-linkedin</v-icon>
        </a>
        <a
          href="https://github.com/abdelmawlaSouat"
          target="_blank"
        >
          <v-icon class="mx-1">mdi-github</v-icon>
        </a>
      </div>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      items: [
        { name: 'ABOUT ME', anchor: '#about-me' },
        { name: 'PROJECTS', anchor: '#projects' },
        { name: 'CONTACT', anchor: '#contact' }
      ]
    }
  }
}
</script>

<style>

.logo {
  border: 1px solid white;
  /* transform: rotate(0deg);
  transition: transform 0.4s ease-in-out; */
}
/* .logo:hover {
  transform: rotate(-90deg);
  transition: transform 0.4s ease-in-out;
} */
</style>
