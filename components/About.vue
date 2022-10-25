<template>
  <v-card class="mx-auto my-16" width="900">
    <v-card-title class="justify-center mt-n14 ">
      <v-avatar size="200" color="white" class=" mt-n14 pb-1">
        <img src="~/static/blaqdevs.jpeg" alt="" style="object-fit: cover;">
      </v-avatar>
    </v-card-title>
    <v-card-title class="justify-center mx-auto">
      Adenomor Omoyokan Moses
    </v-card-title>
    <v-card-text class="my-auto">
      <v-container class="">
        <v-row justify="center" no-gutters>
          <v-chip class="ma-3" outlined>
            Frontend Developer
          </v-chip>
          <v-chip class="ma-3" outlined>
            Web Developer
          </v-chip>
          <v-chip class="ma-3" outlined>
            VueJs Developer
          </v-chip>
        </v-row>
      </v-container>
      <p
        class="text-body1 text-center ma-5 pt-10 px-md-16 px-sm-0"
        justify-center
      >
        Hi, I am a passionate developer with good experience designing Webapps,
        Blogs, etc utilizing varieties
        of Software Technologies which include Vuejs, Nuxt, Tailwind, Quasar, Nodejs,
        Bootstrap, Scss, Git
      </p>
      <p class="text-body1 text-center px-md-16 px-sm-0" justify-center>
        I have experience working remotely building meaningful and productive
        software with also the ability to work with minimal supervision as I
        have the zeal to tackle any problems I might encounter independently to
        achieve the desired result.
      </p>
    </v-card-text>
    <v-card-text>
      <v-row justify="center">
        <v-chip class="ma-3">
          <v-icon left>
            mdi-vuejs
          </v-icon>
          Vue
        </v-chip>
        <v-chip class="ma-3">
          <v-icon left>
            mdi-nuxt
          </v-icon>
          Nuxt
        </v-chip>
        <v-chip class="ma-3">
          <v-icon left>
            mdi-vuetify
          </v-icon>
          Vuetify
        </v-chip>
        <v-chip class="ma-3">
          Quasar
        </v-chip>
      </v-row>
      <v-row justify="center">
        <v-chip class="ma-3">
          <v-icon left>
            mdi-language-javascript
          </v-icon>
          Java Script
        </v-chip>
        <v-chip class="ma-3">
          <v-icon left>
            mdi-language-html5
          </v-icon>
          HTML
        </v-chip>
        <v-chip class="ma-3">
          <v-icon left>
            mdi-language-css3
          </v-icon>
          CSS
        </v-chip>
      </v-row>
    </v-card-text>

    <v-card-actions class="ma-5">
      <v-row justify="center">
        <v-btn
          rounded
          block
          text
          outlined
          to="/resume"
          data-aos="flip-up"
        >
          <v-icon left color="">
            mdi-account-hard-hat
          </v-icon>
          <span>Resume</span>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    show: false
  }),

  methods: {}
}
</script>

<style scoped>
p {
  font-size: 15px;
}
</style>
