<template>
  <v-card elevation="" width="900">
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
              v-model="select"
              color="white"
              :items="items"
              :rules="[v => !!v || 'Content is required']"
              label="Content"
              required
            />
            <v-card-actions>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Submit
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
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
      textarea: null
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
    }
  }
}
</script>
