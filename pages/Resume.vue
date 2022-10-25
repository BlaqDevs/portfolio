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
            <a id="downloader" :href="resume">
              <v-btn>
                <span class="hidden-xs-only">Download</span>
                <v-icon color="" right>
                  mdi-download
                </v-icon>
              </v-btn>
            </a>
            <v-btn @click="$refs.pdf_viewer.print()">
              <span class="hidden-xs-only">Print</span>
              <v-icon color="" right>
                mdi-printer
              </v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-app-bar>
    </nav>
    <div id="resume-wrapper">
      <pdf ref="pdf_viewer" :page="1" :src="resume" />
      <v-divider />
      <pdf ref="pdf_viewer" :page="2" :src="resume" />
    </div>
  </v-app>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  },
  layout: 'resume',
  data () {
    return {
      resume: require('~/static/Omoyokan-Moses-Adenomor.pdf')
    }
  },
  mounted () {
    const dwnloader = document.getElementById('downloader')
    dwnloader.download = 'Adenomor Omoyokan Moses'
  }
}
</script>

<style scoped>
#resume-wrapper {
  width: 100%;
  height: calc(100vh - 47.8px);
  background-color: #000;
  color: #000;
  overflow: auto;
}
</style>
