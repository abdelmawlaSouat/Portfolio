<template>
  <v-app>
    <v-main>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/components/Home.vue'
import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Home,
    AboutMe,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style lang="css">

#app a {
  color: white;
  transition: 0.2s;
  text-decoration: none;
}

#app a:hover {
  color: #1ABC9C;
}

#app .green-text {
  color: #1ABC9C;
}

.circle-div {
  border: 1px solid white;
  border-radius: 50%;
  margin-bottom: 2.5rem;
}

</style>
