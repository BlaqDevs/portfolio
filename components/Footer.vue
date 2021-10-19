<template>
  <v-card class="my-15">
    <v-footer :absolute="!fixed" app color="primary">
      <v-container class="">
        <v-row justify="center">
          <v-chip class="" color="" outlined large link>
            <a href="mailto:adebomor@gmail.com" target="blank">
              <v-icon color="white" class="ma-3" large>
                mdi-gmail
              </v-icon>
            </a>
            <a
              href="linkedin.com/in/omoyokan-moses-adenomor-97445b156"
              target="blank"
            >
              <v-icon color="white" class="ma-3" large>
                mdi-linkedin
              </v-icon>
            </a>
            <a href="https://github.com/BlaqDevs" target="blank">
              <v-icon color="white" class="ma-3" large>
                mdi-github
              </v-icon>
            </a>
            <a href="https://wa.link/cpv1ot" target="blank">
              <v-icon color="white" class="ma-3" large>
                mdi-whatsapp
              </v-icon>
            </a>
          </v-chip>
        </v-row>
        <v-row justify="center">
          <span>&copy; Blaqdevs {{ new Date().getFullYear() }}</span>
        </v-row>
      </v-container>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      fixed: false
    }
  }
}
</script>
