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
        },
        {
            id: 2,
            img: "/home-img/nike2.png",
            desc: 'Nike Air Jordan ',
            price: 220,
        },
        {
          id: 1,
          img: "/home-img/nike1.png",
          desc: 'Nike Jordan',
          price: 390,
      },
      {
          id: 2,
          img: "/home-img/nike2.png",
          desc: 'Nike Air Jordan ',
          price: 420,
      }
    ]
  }),
  persist: true
})