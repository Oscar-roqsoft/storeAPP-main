<template>
   <div class="">
        <transition name="slide-fade">
            <side-menu v-if="show"  @click="showMenu" class="fixed z-50 " />
        </transition>

        <div v-for="image in homeImgs" :key="image" class=" bg-[#f7f7f9] font-sans pb-24">
           <div class="w-full mx-auto">
                <nav class="fixed w-full mx-auto left-0 bottom-0  z-[1] ">
                    <img :src="image.image" alt="" class="fixed left-0 bottom-0 z-[-1]">
                    <div class=" flex justify-between items-center max-w-[375px] py-2 
                    px-[20px] mx-auto h-[100px]  text-2xl">
                        <nuxt-link to="home">
                            <home-icon />
                        </nuxt-link>
                        <nuxt-link to="favourite">
                            <heart-icon />
                        </nuxt-link>
                        <!-- <bag-icon /> -->
                        <nuxt-link to="cart" class="bg-[#0D6EFD] relative bottom-7 w-[52px] text-white text-2xl font-bold
                            h-[52px] flex items-center justify-center rounded-full  shadow">
                            <bag-icon />
                        </nuxt-link>
                        <nuxt-link to="notification">
                            <bell-icon/>
                        </nuxt-link>
                        
                        <nuxt-link to="profile">
                            <person-icon />
                        </nuxt-link>
                    </div>
                </nav>
                <section class="flex-shrink-0
                     flex justify-between items-center px-[20px] pt-[16px]">
                    <hamburger @click="showMenu" class="text-xl font-bold" />
                    <div>
                        <img :src="image.image1" class="absolute  top-[10px] left-[30vw]">
                        <h1 class="text-xl">Explore</h1>
                    </div>
                    <div class="" >
                        <img :src="image.image2" class="absolute animate-ping top-[24px] right-[21px]">
                        <img :src="image.image3" >
                    </div>
                </section>

                <section class="my-4 flex justify-between px-4 "> 
                    <search-icon  class="absolute search"/>
                    <input type="text" placeholder="looking for shoe" class="input outline-[#0D6EFD] rounded-xl shadow-lg">
                    <div class="bg-[#0D6EFD] w-[52px] text-white text-2xl
                         h-[52px] flex items-center justify-center rounded-full">
                        <slide-icon />
                    </div>
                </section>

                <section class="mb-2 pl-4">
                    <p class="text-sm">Select Category</p>
                    <div class="py-3 overflow-x-scroll grid grid-flow-col gap-3 text-sm  capitalize line">
                        <div class="min-w-[108px] min-h-[30px] inline-flex shadow-sm
                        place-items-center justify-center bg-white text-black rounded-lg">all shoe</div>
                        <div class="min-w-[108px] min-h-[30px]  inline-flex shadow-sm
                        place-items-center justify-center bg-[#0D6EFD] text-white rounded-lg">outdoor</div>
                        <div class="min-w-[108px] min-h-[30px]  inline-flex shadow-sm
                        place-items-center justify-center bg-white text-black rounded-lg">tennis</div>
                       
                    </div>
                </section>

                <section class="px-4">
                    <div class="flex justify-between font-[Raleway]">
                        <span class="text-md capitalize">popular Shoes</span>
                        <nuxt-link to="" class="text-sm text-[#0D6EFD]">see all</nuxt-link>
                    </div>
                    <div   class="grid grid-cols-2 gap-3 my-4 " >
                       <div v-for="product in filteredPro" :key="product">
                            <nuxt-link :to="`/items/${product.id}`" 
                                 >
                                 <div class="card w-full bg-white rounded-xl">
                                    <div @click="showIcon" >
                                    <heart-icon   v-if="isIcon"/>
                                    <heart-icon-red  v-else  /> 
                                    </div>
                                
                                    <div>
                                        <img :src="product.img" alt="">
                                    </div>
                                    <p class=" text-[#0D6EFD] text-xs">Best Seller</p>
                                    <span class="text-sm">{{ product.desc }}</span>
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm">{{ product.price }}</span>
                                        <div class="bg-[#0D6EFD] w-[34px] text-white text-xl flex-shrink-0
                                            h-[35.5px] flex items-center justify-center rounded-tl-3xl rounded-br-3xl">
                                            <plus-icon />
                                        </div>
                                    </div>
                                 </div>
                                
                            </nuxt-link>
                       </div>
                       
                    </div>
                </section>

                <section class="mt-4  px-4">
                    <div class="flex justify-between mt-2 mb-4">
                        <span class="text-sm">New Arrivals</span>
                        <nuxt-link to="" class="text-sm text-[#0D6EFD]">see all</nuxt-link>
                    </div>
                    <div class="h-[107px] grid grid-cols-2 bg-white rounded-xl">
                        <div class="flex flex-col justify-center items-center">
                             <div class="m-2">
                                <p class="text-xs">summer sales</p>
                                <span class="text-[#674DC5] summer">15% OFF</span>
                             </div>
                        </div>

                        <div class="flex place-items-center justify-center">
                            <img :src="image.image4" class="relative top-[-17px] left-[45px]">
                            <img :src="image.image5"  class="relative top-[-24px] left-[29px]" >
                            <img :src="image.image6"  class="relative top-[28px] right-[77px]">
                        </div>
                    </div>
                </section>
           </div>
        </div>
      
   </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const route = useRoute()
const show = ref(false)
const isIcon = ref(true)
const showMenu = ()=>{
        show.value = !show.value
  }


 
const homeImgs=[{
    id:1,
   image: "/img/Vector1789.png",
   image1:"/img/Highlight_05.png" ,
   image2: "/home-img/Ellipse886.png",
   image3:"/home-img/Frame31.png",
   image4: "/home-img/Misc_06.png",
   image5: "/home-img/Nike-Zoom.png",
   image6: "/home-img/Ellipse3.png"
}]

const filteredPro = computed(() => {
  return userStore.products.filter((product) => product.id === 0  || product.id === 1   )
})

const showIcon =()=>{
    products.forEach((prod)=>{
        if (prod.id) {
            isIcon.value = !isIcon.value
        }
    })

}
</script>


<style scoped>
 .input{
    display: flex;
    width: 269px;
    padding: 10px 0px 10px 32px;
    align-items: center;
    gap: 12px;

 }
 .search{
    transform: translateY(70%);
    font-size: 22px;
    color: gray;
    margin: 0px 10px;
 }
 .card{
    padding: 10px 0px 0px 10px;
}

.summer{
    font-size: 20px;
    font-family: Futura;
    font-weight: 900;
    line-height: 36.717px;
    letter-spacing: -0.72px;
}
.shadow{
    box-shadow: 0px 2px 5px 2px #0D6EFD;
}

.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0.8;
}
</style>