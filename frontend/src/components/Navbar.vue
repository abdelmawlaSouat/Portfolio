<template>
  <v-toolbar color="#252934" dark>
    <v-row align="center">
      <v-spacer></v-spacer>
      <div>
        <a
          v-for="(item, idx) in items"
          :key="idx"
          href="#"
          v-scroll-to="item.anchor"
          class="mx-5"
        >
          {{ item.name }}
        </a>
      </div>
      <v-spacer></v-spacer>

      <div>
        <a href="https://github.com/abdelmawlaSouat"
           target="_blank"
        >
          <v-icon large class="mr-5">mdi-github</v-icon>
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
        { name: 'CONTACT ME', anchor: '#contact' }
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
