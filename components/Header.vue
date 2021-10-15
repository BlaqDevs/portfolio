<template>
  <nav class="primary">
    <v-app-bar color="primary" dense app>
      <v-app-bar-title class="primary">
        BlaqDevs
      </v-app-bar-title>
      <v-spacer />
      <div class="primary hidden-xs-ony">
        <v-tabs elevation="" background-color="primary" color="white">
          <v-tab to="#about">
            <v-icon class="d-flex d-sm-none">
              face
            </v-icon>
            <span class="hidden-xs-only">About</span>
          </v-tab>
          <v-tab to="#experience">
            <v-icon class="d-flex d-sm-none">
              account_tree
            </v-icon>
            <span class="hidden-xs-only">Experience</span>
          </v-tab>
          <v-tab to="#projects">
            <v-icon class="d-flex d-sm-none">
              apps
            </v-icon>
            <span class="hidden-xs-only">Projects</span>
          </v-tab>
          <v-tab to="#contact">
            <v-icon class="d-flex d-sm-none">
              contact_mail
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
