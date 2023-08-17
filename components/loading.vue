<template>
    <div class="animate-pulse">
       <div class="flex flex-col justify-center place-items-center h-screen">
          <img :src="img" alt="" class="">
       </div> 
    </div>
</template>
<script setup>
const img = ref("/img/nike.png")
</script>
