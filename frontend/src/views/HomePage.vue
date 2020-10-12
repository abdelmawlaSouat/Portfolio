<template>
  <div class="home-page">
    <Navbar />
    <Home />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from '@/components/Home.vue'
import AboutMe from '@/components/AboutMe.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Home,
    AboutMe,
    Footer
  }
}
</script>
