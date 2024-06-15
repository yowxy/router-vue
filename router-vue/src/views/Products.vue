<script setup>

import { useRoute,useRouter,RouterView } from 'vue-router';
import products from '../data/products.json'

const route = useRoute();
const router = useRouter();
console.log('route',route);
console.log('router',router);

const productid =parseInt(route.params.id)

const product = products.find((product) => product.id === productid );


function showOwner(){
    router.push({
        name:"owner",
        params:{id:productid} 
    });
}


</script>



<template>
    <div v-if="product">
        <h1> Products</h1>
         <div>
            <h2>{{ product.name }} - {{ product.price }}</h2>
            <p> Year {{ product.year }}</p>
         </div>
         <button @click="showOwner">Show Owner</button>
         <RouterView/>
    </div>
    <div v-else>
        <h1>Halaman Tidak ditemukan</h1>
    </div>
</template>