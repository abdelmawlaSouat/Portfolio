<template>
  <div id="contact" class="pt-10">
    <div class="d-flex flex-column align-center">
      <h2>CONTACT</h2>
      <div class="title-line my-5" ></div>

      <!-- Email And Phone Number DIV -->
      <div class="mt-4">
        <a href="mailto:abdelmawla.souat@gmail.com">
          <span class="mr-4">
            <v-icon color="#1ABC9C">mdi-email</v-icon>
            abdelmawla.souat@gmail.com
          </span>
        </a>
        <a href="tel:+32484697707">
          <span>
            <v-icon color="#1ABC9C">mdi-phone</v-icon>
            +32 48 46 97 07
          </span>
        </a>
      </div>

      <!-- Contact Form -->
      <v-card class="pa-10 mt-5" color="#252934">
        <v-form>
            <div class="d-flex">
              <v-text-field
                label="Name"
                v-model="fields.name"
                v-bind="attrsFields"
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="fields.email"
                v-bind="attrsFields"
              ></v-text-field>
            </div>
            <v-text-field
              label="Subject"
              v-model="fields.subject"
              v-bind="attrsFields"
            ></v-text-field>
            <v-textarea
              label="Message"
              v-model="fields.message"
              v-bind="attrsFields"
            ></v-textarea>
            <v-btn v-bind="attrsFields" large>
              Send Email
            </v-btn>
        </v-form>
      </v-card>
    </div>

    <div class="circle-div" >
      <a href="#" v-scroll-to="'#home'">
        <v-icon dark x-large>mdi-chevron-up</v-icon>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      fields: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      attrsFields: {
        class: 'mx-2',
        color: '#1ABC9C',
        outlined: true,
        dark: true
      }
    }
  }
}
</script>

<style>

#contact {
  min-height: 90vh;
  background-color: #252934;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  text-align: center;
}

#contact .title-line {
  height: 1px;
  border: 1px solid white;
  width: 10vh;
}
</style>
