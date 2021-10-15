<template>
  <v-card class="mx-auto" width="800">
    <v-card-title>
      <v-icon left>
        account_tree
      </v-icon>
      <span>Experience</span>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-container class="">
        <v-row>
          <v-col transition="slide-x-transition">
            <v-card-title primary-title>
              University Of Benin ICTU
            </v-card-title>
            <v-card-text>
              <span>Intenship - 2019</span>
              <br>
              <br>
              <span>
                Intern at The University Of Benin ICTU for a period of 6 months
              </span>
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-title primary-title>
              University Of Benin ICTU
            </v-card-title>
            <v-card-text>
              <span>Intenship - 2019</span> <br>
              <br>
              <span>
                Intern at The University Of Benin ICTU for a period of 6 months
              </span>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30P</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>
