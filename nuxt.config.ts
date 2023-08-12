
// https://nuxt.com/docs/api/configuration/nuxt-config

// import { resolve }  from "path"

export default defineNuxtConfig ({
  ssr: true,
  components: true,
  
  modules: [
     "@pinia/nuxt",

],

 pages: true,

 nitro: {
  prerender: {
    crawlLinks: true,
  },
},


  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  

  app: {
    baseURL: '/storeAPP/',
    head: {
      script: [{
        src:'https://kit.fontawesome.com/0289b0344f.js',
        async: true,
        crossorigin:'anonymous'
      }],

      link:[{
        rel:"stylesheet",
        href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      }]

    },

    pageTransition:{
      name: 'page', 
      mode: 'in-out'
    },
  }

})



