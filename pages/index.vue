<template>
  <div>
    <v-row id="about" class="mt-16 pt-16 ">
      <About />
    </v-row>
    <v-row id="experience" justify="center" align="center">
      <Experience />
    </v-row>
    <v-row id="projects" justify="center" align="center">
      <Projects />
    </v-row>
    <!-- <v-row justify="center" align="center">
      <Contact id="contact" />
    </v-row> -->
  </div>
</template>

<script>
import About from '~/components/About.vue'
// import Contact from '~/components/Contact.vue'
import Experience from '~/components/Experience.vue'
import Projects from '~/components/Projects.vue'
export default {
  components: {
    About,
    // Contact,
    Experience,
    Projects
  }
}
</script>
