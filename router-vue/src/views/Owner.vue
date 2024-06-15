<script setup>
import { useRoute } from 'vue-router';
import products from '../data/products.json';

const route = useRoute();
const { owner } = products.find((p)=> p.id === parseInt(route.params.id) )
</script>

<template>

    <div  v-if="owner"   >
        <h1>{{ owner.name }}</h1>
        <p>{{ owner.email }}</p>
    </div>

    <div v-else   >
        <h1>Halaman Tidak ditemukan</h1>
    </div>

</template>