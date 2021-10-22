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
          <v-form ref="form" v-model="valid" lazy-validation width="600">
            <v-text-field
              v-model="name"
              :counter="10"
              color="white"
              :rules="nameRules"
              label="Name"
              required
            />

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              color="white"
              required
            />

            <v-textarea
              v-model="message"
              color="white"
              :items="items"
              :rules="[v => !!v || 'Content is required']"
              label="Content"
              required
            />
            <v-card-actions>
              <v-chip
                :disabled="!valid"
                outlined
                class="mr-4"
                @click="validate(); sendEmail();"
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
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    sendEmail (e) {
      try {
        emailjs.sendForm('service_48xjgkk', 'template_n0yn2bh', e.target,
          'user_ObILYM3HNKuLcWS9TO47d', {
            name: this.name,
            email: this.email,
            message: this.message
          })
      } catch (error) {
        console.log({ error })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
