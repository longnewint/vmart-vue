import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import { Button, ButtonGroup, DataView, Dialog } from 'primevue'
import { Card } from 'primevue'
import { OverlayBadge } from 'primevue'
import { MegaMenu } from 'primevue'
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primevue'
import { Carousel } from 'primevue'

import ModeSwitcherButton from './components/header/ModeSwitcherButton.vue'
import ShoppingCartButton from './components/header/ShoppingCartButton.vue'
import Banner from './components/header/Banner.vue'

import Hero from './components/main/Hero.vue'
import Faqs from './components/main/Faqs.vue'
import Deals from './components/main/Deals.vue'

import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

import './assets/index.css'
import 'primeicons/primeicons.css'

import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
      cssLayer: false
    }
  }
})

app.component('Button', Button)
app.component('ButtonGroop', ButtonGroup)
app.component('Card', Card)
app.component('OverlayBadge', OverlayBadge)
app.component('MegaMenu', MegaMenu)
app.component('Accordion', Accordion)
app.component('AccordionPanel', AccordionPanel)
app.component('AccordionHeader', AccordionHeader)
app.component('AccordionContent', AccordionContent)
app.component('Carousel', Carousel)
app.component('Dialog', Dialog)
app.component('DataView', DataView)

app.component('ModeSwitcherButton', ModeSwitcherButton)
app.component('ShoppingCartButton', ShoppingCartButton)
app.component('Banner', Banner)
app.component('Header', Header)
app.component('Hero', Hero)
app.component('Faqs', Faqs)
app.component('Deals', Deals)

app.component('Footer', Footer)

// Router config
app.use(router)

// State management config
const pinia = createPinia()
app.use(pinia)


app.mount("#root")
