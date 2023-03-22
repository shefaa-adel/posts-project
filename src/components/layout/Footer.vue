<template>
  <v-footer class="d-flex flex-column pa-0" color="transparent">
    <div class="footerContent w-100 px-4" style="background-color: #fcdb67">
      <v-container class="d-flex justify-space-between">
        <img
          class="footerImg"
          src="../../assets/images/socialy-logo-white.png"
          style="width: 12%"
        />
        <p class="footerTxt">Read The Latest And Greatest From Our Experts</p>
      </v-container>
    </div>
    <div class="px-4 py-2 bg-black text-center w-100 .footerTxt">
      {{ new Date().getFullYear() }} — <strong>BY: SHEFAA ADEL</strong>
    </div>
  </v-footer>
</template>

<style>
.footerContent {
  line-height: 40px;
}
@media only screen and (max-width: 600px) {
  .footerTxt {
    font-size: 0.5em;
  }
  .footerImg {
    width: 20% !important;
    height: 20% !important;
    margin-top: 10px;
  }
}
</style>
