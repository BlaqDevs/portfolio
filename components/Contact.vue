<template>
  <v-card elevation="" width="900">
    <v-card-title primary-title>
      <v-icon color="" left>
        mdi-card-account-mail-outline
      </v-icon>
      <span>Contact</span>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row class="ma-3 pa-0" justify="center">
        <v-col>
          <v-form
            ref="form"
            v-model="valid"
            width="600"
            lazy-validation
            @submit.prevent="sendEmail"
          >
            <v-text-field
              v-model="name"
              :counter="10"
              color="white"
              :rules="nameRules"
              label="Name"
              name="user_name"
              required
            />

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              color="white"
              required
              name="user_email"
            />

            <v-textarea
              v-model="message"
              color="white"
              :items="items"
              :rules="[v => !!v || 'Content is required']"
              label="Content"
              required
              name="message"
            />
            <v-card-actions>
              <v-chip
                :disabled="!valid"
                outlined
                class="mr-4"
                @click="validate"
              >
                Submit
              </v-chip>

              <v-chip color="error" outlined class="mr-4" @click="reset">
                Reset Form
              </v-chip>
            </v-card-actions>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import emailjs from 'emailjs-com'
// import { init } from 'emailjs-com'
// init('user_ObILYM3HNKuLcWS9TO47d')
export default {
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      message: ''
    }
  },
  methods: {
    validate (e) {
      try {
        this.$refs.form.validate()
        console.log(this.name, this.email, this.message)
        // eslint-disable-next-line no-undef
        emailjs.sendForm('service_48xjgkk', 'template_n0yn2bh', this.$refs.form,
          'user_ObILYM3HNKuLcWS9TO47d', {
            name: this.name,
            email: this.email,
            message: this.message
          })
      } catch (error) {
        console.log('the error', { error })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
