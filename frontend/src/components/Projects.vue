<template>
  <div id="projects" class="py-15">
    <h2>PROJECTS</h2>
    <div class="title-line my-5"></div>

    <!-- Projects -->
    <div class="projects-container d-flex">
      <v-card
      class="ma-5"
      max-width="900"
      v-for="(project, idx) in projects"
      :key="idx"
      >
        <!-- Carousel -->
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(screen, idx) in project.screens"
            :key="idx"
          >
            <v-img
              class="white--text align-end"
              :src="require(`@/assets/projects/${project.folder}/${screen}`)"
            ></v-img>
          </v-carousel-item>
        </v-carousel>

      <v-card-title>Mindset</v-card-title>
      <v-card-subtitle class="pb-0">
        A Blog inspired By Medium
      </v-card-subtitle>
      <v-card-subtitle>
        <v-chip
          v-for="(item, idx) in project.technos" :key="idx"
          class="mr-1 mb-1"
          color="primary"
          dark
        >
          {{ item }}
        </v-chip>
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>
         {{ project.text }}
        </div>
      </v-card-text>

      <v-card-actions class="d-flex justify-end">
        <a href="https://github.com/abdelmawlaSouat/Mindset" target="_blank">
          <v-btn
            color="primary"
            text
          >
            View Code
          </v-btn>
        </a>

        <a href="#" target="_blank">
          <v-btn
            color="primary"
            text
          >
            View Site
          </v-btn>
        </a>

      </v-card-actions>
    </v-card>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: {
        mindset: {
          folder: 'mindset',
          screens: [
            '1.png', '2.png',
            '3.png', '4.png'
          ],
          technos: [
            'javacript', 'vue.js', 'vue router', 'vueX', 'axios',
            'vuetify', 'css3', 'html5', 'node.js', 'mongoDB', 'express',
            'passport', 'nodemailer'
          ],
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
      }
    }
  }
}
</script>

<style>

#projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  border-top: 1px solid rgb(236, 236, 236);
}

#projects .title-line {
  height: 1px;
  border: 1px solid black;
  width: 10vh;
}

</style>
