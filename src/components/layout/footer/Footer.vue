<template>
   
    <v-footer class="d-flex flex-column pa-0" color="transparent" >
    <v-container>
      <div class="bg-transparent d-flex w-100 justify-space-between px-4">
        <img class="footerImg" src="../../../assets/socialy-logo.png" style="width: 12%">
  
        
  
        
        <p class="footerTxt" >Read The Latest And Greatest From Our Experts</p>
       
      </div>
  
      
    </v-container>
    <div class="px-4 py-2 bg-black text-center w-100 .footerTxt">
        {{ new Date().getFullYear() }} — <strong>BY: SHEFAA ADEL</strong>
      </div>
    </v-footer>
  
</template>

<style>
@media only screen and (max-width: 600px) {
   .footerTxt{
    font-size: .5em;
   }
.footerimg{
width: 5%;
}}


/* @media only screen and (max-width: 600px) {p{
    font-size: 1em;   
    width: 90%;
}
} */
</style>