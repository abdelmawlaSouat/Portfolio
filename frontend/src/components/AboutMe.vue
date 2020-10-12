<template>
  <div class="about-me pt-10">
    <h2>ABOUT ME</h2>
    <div class="title-line my-5" ></div>
    <v-card class="skills px-4 pb-10 mt-8"  width="900" rounded>
      <v-card-title>SKILLS</v-card-title>
      <v-card-text class="d-flex py-2">
        <v-img
          v-for="(skill, idx) in skills"
          :key="idx"
          width="40"
          class="mx-4"
          :src="require('@/assets/' + skill.src)"
          :title="skill.title"
        ></v-img>
      </v-card-text>
    </v-card>

    <div class="d-flex justify-center mt-10 pt-4">
      <v-card class="education px-4" width="430">
        <v-card-title>EDUCATION</v-card-title>
        <v-card-text>
          <div
            v-for="(school, idx) in schools"
            :key="idx"
            class="school-item py-2"
          >
            <v-img
              :src="require('@/assets/' + school.src)"
              width="60"
              class="mr-4"
            ></v-img>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ `${school.date} | ${school.name}` }}</v-list-item-title>
                <v-list-item-subtitle>{{ school.course }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-card-text>
      </v-card>
      <v-card class="work-xp px-4 ml-10" width="430">
        <v-card-title>WORK EXPERIENCE</v-card-title>
        <v-card-text>
          <div class="d-flex">
            <v-img
              :src="require('@/assets/niboo.png')"
              width="100"
              class="mr-4"
            ></v-img>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Intern Software Developer</v-list-item-title>
                <v-list-item-subtitle>April 2020 - August 2020 | Niboo</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
          <v-list-item-content class="pt-0">
            It was a very rewarding first professional experience. The
            languages used were python and javascript, we also used other
            tools such as Odoo ERP for project management (tasks, clients...)
            or github for decentralized version management. The goal was to
            develop customized solutions for the customer.
          </v-list-item-content>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      skills: [
        { src: 'javascript.png', title: 'Javascript' },
        { src: 'vue.png', title: 'Vue.js' },
        { src: 'html.png', title: 'HTML 5' },
        { src: 'css.png', title: 'CSS 3' },
        { src: 'materialize.png', title: 'Materialize' },
        { src: 'vuetify.png', title: 'Vuetify' },
        { src: 'bootstrap.png', title: 'Bootstrap' },
        { src: 'git.png', title: 'Git' },
        { src: 'node.png', title: 'Node.js' },
        { src: 'mongo.png', title: 'MongoDB' }
      ],
      schools: [
        {
          src: 'epfc.jpg',
          name: 'EPFC',
          date: '2020',
          course: 'English Course (A2)'
        },
        {
          src: '19.png',
          name: '19 Coding School',
          date: '2018 - 2020',
          course: 'Computer Programming'
        },
        {
          src: 'esi.jpg',
          name: 'ESI',
          date: '2017 - 2018',
          course: 'Business Computing'
        }
      ]
    }
  }
}
</script>

<style>

.about-me {
  min-height: 100vh;
  /* max-width: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
}

.school-item {
  display: flex;
  align-items: center;
}

.title-line {
  height: 1px;
  border: 1px solid black;
  width: 10vh;

}

</style>
