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
            v-for="(i, index) in experience"
            :key="index"
            :data-aos=" index % 3 ? 'fade-left' : 'fade-right'"
            lg="6"
            md="6"
            sm="6"
            xs="12"
          >
            <v-hover>
              <template #default="{ hover }">
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
          place: 'Pear SDC',
          title: 'Frontend Developer - 2022 - Till Date',
          content:
            'Worked on the frontend of a University Portal web-app feature utilizing tools like NuxtJs, vue-router and bootstrap. Implement user interface using tools like Vue, Nuxt and Bootstrap while working with other departments to ensure adequate user experience on every site built while making sure the application is optimized for maximum speed and scalability.Worked on the frontend design and development of a dashboard application utilizing tools like vue, Nuxtjs and Bootstrap. '
        },
        {
          place: 'Future Moves Recruitment Agency',
          title: 'Fullstack Developer - 2019',
          content:
            'Worked on the frontend development of an e-learning web-app (https://faslearn.com) feature utilizing tools like Vuejs, Vue-router and Bootstrap. This feature gives users the ability to purchase  courses.Implement user interface using tools like Vue, Nuxt and Bootstrap while working with other departments to ensure adequate user experience on every site built while making sure the application is optimized for maximum speed and scalability. Worked on the frontend design and development of a dashboard application, utilizing tools like Vue, Nuxtjs and Bootstrap.'
        },
        {
          place: 'University Of Benin ICTU',
          title: 'Intenship - 2019',
          content:
            'Reviewed projects for compliance with specifications and quality standards.Assisted with design and development of academic projects for the University of Benin (UNIBEN), Benin City.Managed contents fed to the chatbot, by parsing the data through several data cleaning processes and further went into the data labeling process.'
        },
        {
          place: 'Remote',
          title: 'Freelancer',
          content:
            'Currently a freelancer'
        }
      ]
    }
  }
}
</script>
