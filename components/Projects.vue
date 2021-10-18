<template>
  <v-card width="900" class="my-15">
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
          <v-col v-for="project in projects" :key="project.title" lg="6" md="6" xs="12">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  transition="slide-x-transition"
                  :class="`elevation-${hover ? 24 : 6}`"
                  class="mx-auto pa-6 transition-swing"
                >
                  <v-card-title primary-title>
                    {{ project.title }}
                  </v-card-title>
                  <v-card-text>
                    <span>{{ project.content }}</span>
                    <br>
                    <br>
                    <v-chip
                      v-for="tec in project.tech"
                      :key="tec.name"
                      class="ma-1"
                      small
                    >
                      <v-icon color="" left small>
                        {{ tec.icon }}
                      </v-icon>
                      <span>{{ tec.name }}</span>
                    </v-chip>
                    <v-divider class="my-3" />
                    <v-chip
                      v-for="link in project.links"
                      :key="link.name"
                      class="ma-2"
                      small
                    >
                      <v-icon color="" small left>
                        {{ link.icon }}
                      </v-icon>
                      <span>{{ link.name }}</span>
                    </v-chip>
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
      projects: [
        {
          title: 'Portfolio',
          content: 'this portfolio',
          tech: [
            {
              name: 'Vue',
              icon: 'mdi-vuejs'
            },
            {
              name: 'Nuxt',
              icon: 'mdi-nuxt'
            },
            {
              name: 'vuetify',
              icon: 'mdi-vuetify'
            }
          ],
          links: [
            {
              name: 'Github',
              icon: 'mdi-github'
            },
            {
              name: 'Live',
              icon: 'mdi-eye'
            }
          ]
        },
        {
          title: 'Reservation Landing Page',
          content: 'A resturant reservation landing page',
          tech: [
            {
              name: 'Vue',
              icon: 'mdi-vuejs'
            },
            {
              name: 'Nuxt',
              icon: 'mdi-nuxt'
            },
            {
              name: 'vuetify',
              icon: 'mdi-vuetify'
            }
          ],
          links: [
            {
              name: 'Github',
              icon: 'mdi-github'
            },
            {
              name: 'Live',
              icon: 'mdi-eye',
              link: ''
            }
          ]
        },
        {
          title: 'Portfolio',
          content: 'this portfolio',
          tech: [
            {
              name: 'Vue',
              icon: 'mdi-vuejs'
            },
            {
              name: 'Nuxt',
              icon: 'mdi-nuxt'
            },
            {
              name: 'vuetify',
              icon: 'mdi-vuetify'
            }
          ],
          links: [
            {
              name: 'Github',
              icon: 'mdi-github',
              link: ''
            },
            {
              name: 'Live',
              icon: 'mdi-eye',
              link: ''
            }
          ]
        }
      ]
    }
  }
}
</script>
