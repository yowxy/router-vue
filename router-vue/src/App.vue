<script setup>
import { ref } from  "vue" 
import { RouterView } from "vue-router"
import Nav from "./components/nav.vue"

const count = ref(0);
</script>

<template>
  <Nav />
    <button @click="count++">count is {{ count }}</button>
  <main>
   <RouterView/>
  </main>
</template>