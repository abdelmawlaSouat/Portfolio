<template>
  <div id="projects" class="py-15">
    <h2>PROJECTS</h2>
    <div class="title-line my-5"></div>

    <!-- Projects -->
    <v-container>
      <v-row>
        <v-col class="offset-md-2 col-sm-12 col-md-10">
          <v-row>
            <v-col
              v-for="(project, idx) in projects"
              :key="idx"
              class="col-sm-6 col-md-5"
            >
              <v-card>
                <a :href="project.siteLink" target="_blank">
                  <v-img
                    class="img-to-scale"
                    :src="require(`@/assets/projects/${project.overviewImg.src}`)"
                    :alt="project.overviewImg.alt"
                  ></v-img>
                </a>

                <v-card-title>{{ project.title }}</v-card-title>

              <v-card-subtitle>
                {{ project.subtitle }}
              </v-card-subtitle>

              <v-card-text class="mt-1">
                <v-chip
                  v-for="(techno, idx) in project.technos" :key="idx"
                  class="mr-1 mb-1"
                  color="primary"
                  dark outlined
                >
                  {{ techno }}
                </v-chip>
              </v-card-text>

              <v-card-actions class="d-flex justify-end">
                <a :href="project.githubLink" target="_blank">
                  <v-btn
                    color="primary"
                    text
                  >
                    View Code
                  </v-btn>
                </a>
                <a :href="project.siteLink" target="_blank">
                  <v-btn
                    color="primary"
                    text
                  >
                    View Site
                  </v-btn>
                </a>
              </v-card-actions>

            </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          overviewImg: {
            src: 'testimonials-grid.jpg',
            alt: 'Testimonials grid Overview'
          },
          title: 'Testimonials grid',
          subtitle: 'Junior Challenge From frontendmentor.io',
          technos: [
            'javacript', 'vue.js', 'vuetify', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/testimonials-grid',
          siteLink: 'https://testimonials-grid.asouat.vercel.app/'
        },
        {
          overviewImg: {
            src: 'ping-coming-soon-page.jpg',
            alt: 'Ping page coming soon Overview'
          },
          title: 'Ping page coming soon',
          subtitle: 'Newbie Challenge From frontendmentor.io',
          technos: [
            'javacript', 'vue.js', 'vuetify', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/Ping-page-coming-soon',
          siteLink: 'https://ping-page-coming-soon.vercel.app/'
        },
        {
          overviewImg: {
            src: 'base-apparel-coming-soon-page.jpg',
            alt: 'Base Apparel coming soon page Overview'
          },
          title: 'Base Apparel coming soon page',
          subtitle: 'Newbie Challenge From frontendmentor.io',
          technos: [
            'javacript', 'vue.js', 'vuetify', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/Base-Apparel-coming-soon-page',
          siteLink: 'https://base-apparel-coming-soon-page-nine.vercel.app/'
        },
        {
          overviewImg: {
            src: 'faq-accordion-card.jpg',
            alt: 'FAQ accordion card Overview'
          },
          title: 'FAQ accordion card',
          subtitle: 'Newbie Challenge From frontendmentor.io',
          technos: [
            'javacript', 'vue.js', 'vuetify', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/FAQ-accordion-card',
          siteLink: 'https://faq-accordion-card.asouat.vercel.app/'
        }
      ]
    }
  }
}
</script>

<style scoped>

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

.img-to-scale {
  transform: scale(1);
  transition-property: transform;
  transition-duration: 300ms;
}

.img-to-scale:hover {
  transform: scale(1.05);
}

</style>
