<script setup>

import products from '../data/products.json'
import { RouterLink } from 'vue-router';  
</script>


<template>
  <h1>This is an Home page</h1>
  <div class="products">
      <RouterLink
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        >{{ product.name }}</RouterLink
      >
    </div>
</template>


<style scoped>

  .products{
    display: flex;
    gap: 1rem;
    padding: 1rem;
    flex-wrap: wrap;
  }

</style>