<template>
  <v-app>
    <nav>
      <v-app-bar class="primary" dark dense app>
        <v-action class="primary">
          <v-btn icon small to="/" color="">
            <v-icon color="">
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </v-action>
        <v-card-title primary-title>
          Resume
        </v-card-title>
        <v-spacer />
        <div>
          <v-card-actions>
            <v-btn icon>
              <span class="hidden-xs-only">Download</span>
              <v-icon color="" right>
                mdi-download
              </v-icon>
            </v-btn>
            <v-btn icon>
              <span class="hidden-xs-only">Print</span>
              <v-icon color="" right>
                mdi-printer
              </v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-app-bar>
    </nav>
    <Resume />
  </v-app>
</template>
<script>
import Resume from '~/pages/Resume.vue'
export default {
  components: { Resume }
}
</script>
