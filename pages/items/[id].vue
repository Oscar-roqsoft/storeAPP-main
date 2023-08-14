<template>
    <div>
        <div class="mx-auto fixed">
            <section class="px-[20px] relative min-h-[44px] pt-6  flex-shrink-0 
            flex justify-between items-center z-50">
                <button @click="navigateTo('/home')">
                    <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                </button>
                <div>
                    <h1 class="text-lg">Sneaker Shop</h1>
                </div>
                <div class="text-xl" >
                    <img src="/home-img/Frame31.png" >
                </div>
            </section>

            <section class="mt-7 px-[20px] text-sm">
                <p class="text-xl font-[600] leading-snug">Nike Air Max 270 <br> Essential</p>
                <span class="text-gray-400">Men’s Shoes</span>
                <p clamnss="text-xl font-[600]">$179.39</p>
            </section>
                 
               


            <section class=" px-[20px] mt-14 ">
                <div class="absolute -top-2 z-10">
                    <img :src="currentImage" alt="">
                </div>
                <img src="/favourite-img/Ellipse5.png" alt="">
                <div class=" flex justify-center items-center ">
                   <div class=" relative bottom-3 flex justify-between bg-gray-500 
                   text-white rounded-lg p-1 w-12">
                        <arrow />
                        <arrow-right />
                   </div>
                </div>
                <div v-if="images[0] !== ''"
                class="grid grid-cols-5 my-8 overflow-x-scroll">
                    <div v-for="image in images">
                        <div class="h-[56px] w-[56px] bg-white flex items-center justify-center 
                        flex-shrink-0 rounded-xl">
                        <img @click="currentImage = image"
                         :src="image" >
                        </div>
                    </div>
                    
                </div>
            </section>

            <section class=" px-[20px] text-sm">
                <p class="text-gray-500">The Max Air 270 unit delivers unrivaled, 
                    all-day comfort. The sleek, running-inspired design roots you to everything Nike........
                </p>
                <div class="flex justify-end text-[#0D6EFD] text-lg">
                    <a class="text-sm">Read More</a>
                </div>
            </section>


            <section class=" flex justify-center flex-col px-[20px]">
                    <div class="grid grid-cols-3 mt-[20px]">
                        <div class="flex justify-center">
                            <div class="bg-gray-200 w-[42px]  text-xl
                                h-[42px] flex items-center justify-center rounded-full">
                            <heart-icon />
                            </div>
                        </div>
                        <button class="flex col-span-2 justify-center items-center
                         text-white bg-[#0D6EFD] text-lg rounded-lg">
                            <bag-icon class="text-2xl" />
                            <span class=" pl-4 text-[14px] ">Add to Cart</span>
                        </button>
                    </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const currentImage = ref(null)
const navigate = ()=>{
 return navigateTo('/home')
}

onMounted(() => {
    watchEffect(()=>{
        currentImage.value = "/favourite-img/HeroImage.png";
        images.value[0] =  "/favourite-img/HeroImage.png";
    })
        
})


const images = ref([
    " ",
   "/favourite-img/HeroImage.png",
   "/favourite-img/HeroImage.png",
   "/favourite-img/HeroImage.png",
   "/favourite-img/HeroImage.png",
])
</script>