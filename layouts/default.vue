<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Header, Footer },
  data () {
    return {
      clipped: false,
      fixed: false,
      miniVariant: false
    }
  }
}
</script>
