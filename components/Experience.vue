<template>
  <v-card class="mx-auto" width="900">
    <v-card-title>
      <v-icon left>
        mdi-file-tree
      </v-icon>
      <span>Experience</span>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-container class="">
        <v-row>
          <v-col
            :data-aos=" index % 3 ? 'fade-left' : 'fade-right'"
            v-for="(i, index) in experience"
            :key="index"
            lg="6"
            md="6"
            sm="6"
            xs="12"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
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
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      experience: [
        {
          place: 'University Of Benin ICTU',
          title: 'Intenship - 2019',
          content:
            'Intern at The University Of Benin ICTU for a period of 6months'
        },
        {
          place: 'University Of Benin ICTU',
          title: 'Intenship - 2019',
          content:
            'Intern at The University Of Benin ICTU for a period of 6months'
        },
        {
          place: 'University Of Benin ICTU',
          title: 'Intenship - 2019',
          content:
            'Intern at The University Of Benin ICTU for a period of 6months'
        }
      ]
    }
  }
}
</script>
