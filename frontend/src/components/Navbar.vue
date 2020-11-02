<template>
  <v-toolbar color="#252934" dark>
    <v-row align="center">
      <v-spacer></v-spacer>
      <div v-show="$vuetify.breakpoint.smAndUp">
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
