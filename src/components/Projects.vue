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

                <v-card-title class="d-flex justify-space-between">
                  {{ project.title }}
                  <v-icon @click="project.showSkills = !project.showSkills">mdi-chevron-down</v-icon>
                </v-card-title>

              <v-card-subtitle>
                {{ project.subtitle }}
              </v-card-subtitle>

              <transition name="fade">
                <v-card-text class="mt-1" v-show="project.showSkills">
                  <v-chip
                    v-for="(techno, idx) in project.technos" :key="idx"
                    class="mr-1 mb-1"
                    color="primary"
                    dark outlined
                  >
                    {{ techno }}
                  </v-chip>
                </v-card-text>
              </transition>

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
            src: 'to-do-app.jpg',
            alt: 'To Do App'
          },
          title: 'To Do App',
          subtitle: 'Intermediate Challenge From frontendmentor.io',
          showSkills: false,
          technos: [
            'javacript', 'react.js', 'material ui', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/To-Do-App',
          siteLink: 'https://to-do-app-xi.vercel.app/'
        },
        {
          overviewImg: {
            src: 'huffle-landing-page.jpg',
            alt: 'Huffle Landing Page Overview'
          },
          title: 'Huffle Landing Page',
          subtitle: 'Junior Challenge From frontendmentor.io',
          showSkills: false,
          technos: [
            'javacript', 'react.js', 'material ui', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/Huddle-landing-page',
          siteLink: 'https://huddle-landing-page-wheat.vercel.app/'
        },
        {
          overviewImg: {
            src: 'pricing-component.jpg',
            alt: 'Pricing Component Overview'
          },
          title: 'Pricing Component',
          subtitle: 'Junior Challenge From frontendmentor.io',
          showSkills: false,
          technos: [
            'javacript', 'react.js', 'material ui', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/Pricing-Component',
          siteLink: 'https://pricing-component-rho.vercel.app/'
        },
        {
          overviewImg: {
            src: 'insure-landing-page.jpg',
            alt: 'Insure landing page Overview'
          },
          title: 'Insure landing page',
          subtitle: 'Junior Challenge From frontendmentor.io',
          showSkills: false,
          technos: [
            'javacript', 'vue.js', 'vuetify', 'css3', 'html5'
          ],
          githubLink: 'https://github.com/abdelmawlaSouat/Insure-landing-page',
          siteLink: 'https://insure-landing-page-flax.vercel.app/'
        },
        {
          overviewImg: {
            src: 'testimonials-grid.jpg',
            alt: 'Testimonials grid Overview'
          },
          title: 'Testimonials grid',
          subtitle: 'Junior Challenge From frontendmentor.io',
          showSkills: false,
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
          showSkills: false,
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
          showSkills: false,
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
          showSkills: false,
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
