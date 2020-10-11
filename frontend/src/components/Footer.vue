<template>
  <v-footer absolute dark>
    <v-row justify="center">
      <span class="py-7 text-center">
        © 2020 BY <span style="color:dodgerblue">ABDELMAWLA SOUAT</span>
      </span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
