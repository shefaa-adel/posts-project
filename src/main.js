import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'







const app = createApp(App)
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  components,
  directives,
})

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')
