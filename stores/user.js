// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
    products : [
        {
            id: 1,
            img: "/home-img/nike1.png",
            desc: 'Nike Jordan',
            price: 320,
            article: `Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Molestias, molestiae. Temporibus quas quisquam culpa nemo ab quos aperiam.\n
             Molestiae, obcaecati?`
        },
        {
            id: 2,
            img: "/home-img/nike2.png",
            desc: 'Nike Air Jordan ',
            price: 220,
            article: `Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Molestias, molestiae. Temporibus quas quisquam culpa nemo ab quos aperiam.\n
             Molestiae, obcaecati?`
        },
        {
          id: 1,
          img: "/home-img/nike1.png",
          desc: 'Nike Jordan',
          price: 390,
          article: `Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Molestias, molestiae. Temporibus quas quisquam culpa nemo ab quos aperiam.\n
           Molestiae, obcaecati?`
      },
      {
          id: 2,
          img: "/home-img/nike2.png",
          desc: 'Nike Air Jordan ',
          price: 420,
          article: `Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Molestias, molestiae. Temporibus quas quisquam culpa nemo ab quos aperiam.\n
           Molestiae, obcaecati?`
      }
    ]
  }),
  persist: true
})