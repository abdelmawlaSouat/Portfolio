<template>
  <div id="home">
    <Navbar />

    <div class="home-container">
      <div class="home-content">
        <h1 class="text-h6 text-lg-h4 mx-4">
          Hi ! &#128075; <br>
          My name is Abdelmawla Souat. <br/>
          I'm a <span class="green-text">Front-End Developer</span>.
        </h1>

        <div class="my-5">
          <v-btn v-bind="attrsBtns" @click="downloadCV()">
            Download My CV
          </v-btn>
        </div>
      </div>

      <div class="circle-div" style="margin-bottom: 12vh">
        <a href="#" v-scroll-to="'#about-me'">
          <v-icon dark x-large>mdi-chevron-down</v-icon>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    return {
      attrsBtns: {
        class: 'mx-4',
        color: 'white',
        outlined: true,
        large: true
      }
    }
  },

  methods: {
    downloadCV () {
      window.location.href = 'https://github.com//abdelmawlaSouat/Portfolio/raw/master/public/CV%20-%20Souat%20Abdelmawla.pdf'
    }
  }
}
</script>

<style>

#home {
  height: 100vh;
  background-color: #252934;
}

.home-container {
  background-color: #252934;
  height: 93%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  text-align: center;
}

.home-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 70vh;
  height: 100%;
}

</style>
