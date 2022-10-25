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
          <v-col
            v-for="(project, index) in projects"
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
                      <a :href="link.lin" target="blank" style="color:white; text-decoration: none">
                        <v-icon color="" small left>
                          {{ link.icon }}
                        </v-icon>
                        <span>{{ link.name }}</span>
                      </a>
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
          title: 'Virtual Keyboard Plugin',
          content: 'A Virtual Keyboard Plugin',
          tech: [
            {
              name: 'Vue',
              icon: 'mdi-vuejs'
            },
            {
              name: 'Tailwind',
              icon: 'mdi-tailwind'
            },
            {
              name: 'CSS3',
              icon: 'mdi-css'
            }
          ],
          links: [
            {
              name: 'Github',
              icon: 'mdi-github',
              lin: 'github.com/BlaqDevs/Keyboard-Layoout'
            },
            {
              name: 'Live',
              icon: 'mdi-eye',
              link: 'b-keyboard.netlify.app'
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
              name: 'HTML5',
              icon: 'mdi-language-html5'
            },
            {
              name: 'CSS3',
              icon: 'mdi-language-css3'
            },
            {
              name: 'Bootstrap',
              icon: 'mdi-bootstrap'
            }
          ],
          links: [
            {
              name: 'Github',
              icon: 'mdi-github',
              lin: 'https://github.com/BlaqDevs/reservation-landing-page'
            },
            {
              name: 'Live',
              icon: 'mdi-eye',
              lin: 'https://reservation-landing.netlify.app'
            }
          ]
        },
        {
          title: 'Blaq-todo',
          content: 'Team todo list',
          tech: [
            {
              name: 'Vue',
              icon: 'mdi-vuejs'
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
              lin: 'https://github.com/BlaqDevs/app1'
            },
            {
              name: 'Live',
              icon: 'mdi-eye',
              lin: 'https://blaq-todo.netlify.app'
            }
          ]
        }
      ]
    }
  }
}
</script>
