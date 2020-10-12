<template>
  <div class="home">
    <div class="home-content">
      <h1>
        Hello, my name is Abdelmawla Souat. <br/>
        I'm a <span class="green-text">Front-End Developer</span>.
      </h1>
      <p class="my-5">
        After a cursus at 19 (42 network) and a rewarding internship in
        software development at Niboo, I am aiming at a company that
        could not only trust me but also allow me to grow as a
        developer. With an overflowing curiosity and a pronounced taste
        for learning, I wish to work mainly with React.js or Vue.js for the
        front-end.
      </p>
      <div >
        <v-btn outlined x-large color="white" class="mx-4">Download My CV</v-btn>
        <v-btn outlined x-large color="white" class="mx-4">Contact Me</v-btn>
      </div>
    </div>
    <div class="circle" >
      <v-icon dark x-large>mdi-chevron-down</v-icon>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    //
    }
  }
}
</script>

<style>

.home {
  min-height: 94vh;
  background-color: #252934;
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
  min-height: 75vh;
}

.circle {
  border: 1px solid white;
  border-radius: 50%;
  margin-bottom: 2.5rem;
}

.green-text {
  color: #1ABC9C;
}
</style>
