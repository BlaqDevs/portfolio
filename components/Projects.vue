<template>
  <v-card width="800" class="my-15">
    <v-card-title primary-title>
      <v-icon left>
        mdi-apps
      </v-icon>
      <span>Projects</span>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-container class="">
        <v-row>
          <v-col v-for="i in experience" :key="i.place">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  transition="slide-x-transition"
                  :class="`elevation-${hover ? 24 : 6}`"
                  class="mx-auto pa-6 transition-swing"
                >
                  <v-card-title primary-title>
                    {{ i.place }}
                  </v-card-title>
                  <v-card-text>
                    <span>{{ i.title }}</span>
                    <br>
                    <br>
                    <span>
                      {{ i.content }}
                    </span>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          title: '',
          content: '',
          tech: [
            {
              name: 'Vue',
              icon: 'mdi-vuejs'
            },
            {
              name: 'vuetify',
              icon: 'mdi-vuetify'
            }
          ]
        }
      ]
    }
  }
}
</script>
