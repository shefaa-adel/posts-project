<template>
  <v-container>
    <v-row class="px-15 py-15">
      <v-col cols="12" md="6" class="text-center" justify="center">
        <img
          src="../assets/images/error-illustration-ARAMH3U.png"
          style="height: 600px"
        />
      </v-col>
      <v-col cols="12" md="6" class="text-center pt-16 ps-16">
        <p class="heading mt-16">404</p>
        <p class="text">Oops, are you lost?</p>
        <v-btn
          class="mt-6"
          variant="tonal"
          color="#1F1F1F"
          style="background-color: #fcdb67"
          to="/"
          >GO HOME</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text {
  font-size: 3rem;
}
.heading {
  font-size: 7em;
  font-weight: 900;
}

@media only screen and (max-width: 768px) {
  img {
    display: none;
  }
  .text {
    font-size: 1rem;
  }
  .heading {
    font-size: 3em;
  }
}
</style>
