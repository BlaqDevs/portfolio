<template>
  <nav class="primary">
    <v-app-bar color="primary" dense app>
      <v-app-bar-title class="primary hidden-xs-only">
        BlaqDevs
      </v-app-bar-title>
      <v-spacer />
      <div class="primary hidden-xs-ony">
        <v-tabs elevation="" background-color="primary" color="white">
          <v-tab to="#about">
            <v-icon class="d-flex d-sm-none">
              mdi-face-man-profile
            </v-icon>
            <span class="hidden-xs-only">About</span>
          </v-tab>
          <v-tab to="#experience">
            <v-icon class="d-flex d-sm-none">
              mdi-file-tree
            </v-icon>
            <span class="hidden-xs-only">Experience</span>
          </v-tab>
          <v-tab to="#projects">
            <v-icon class="d-flex d-sm-none">
              mdi-apps
            </v-icon>
            <span class="hidden-xs-only">Projects</span>
          </v-tab>
          <v-tab to="#contact">
            <v-icon class="d-flex d-sm-none">
              mdi-card-account-mail-outline
            </v-icon>
            <span class="hidden-xs-only">Contact</span>
          </v-tab>
        </v-tabs>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  //
}
</script>
