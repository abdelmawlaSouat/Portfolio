<template>
  <div class="home">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Footer
  }
}
</script>
