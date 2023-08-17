<template>
    <div  class="bg-[#1483C2] h-screen w-screen main  font-sans ">
        <loading v-if="isloading" />
         <slot v-else/>
    </div>
</template>




<script setup lang="ts">

const isloading = ref(true)

watchEffect(()=>{
    setTimeout(() => isloading.value = false, 3000)  //for page loader
    })


</script>