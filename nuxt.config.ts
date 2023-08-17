
// https://nuxt.com/docs/api/configuration/nuxt-config

// import { resolve }  from "path"

export default defineNuxtConfig ({
  ssr: true,
  pages: true,
  modules: [
    "@pinia/nuxt", 
],


experimental: {
  payloadExtraction: false
},


  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  

  app: {
    head: {
      title: 'Title',
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
              hid: 'description',
              name: 'description',
              content: 'my website description'
          }
      ],
    },
    pageTransition:{
      name: 'page', 
      mode: 'in-out'
    },
  }

})



