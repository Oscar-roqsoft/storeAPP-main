<template>
    <div  class="bg-[#1483C2] h-screen w-screen main  font-sans ">
        <loading v-if="isloading" />
         <slot v-else/>
    </div>
</template>




<script setup>

const isloading = ref(true)

onMounted(() => {
     setTimeout(() => isloading.value = false, 3000)  //for page loader
    })

</script>