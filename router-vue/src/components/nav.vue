<script setup>
    import {RouterLink} from "vue-router"
</script>




<template>
    <div>
        <a href="/">Home</a>
        <a href="/about">About</a>

        |

        <RouterLink  active-class="active" to="/">Home</RouterLink>
        <RouterLink  active-class="active"  to="/about">About</RouterLink>

    </div>
</template>

<style scoped>

div{
    display: flex;
    margin-left: 15px;
    gap: 10px;
}

.active{
    font-weight: 900px;
    color: white;
    background-color: red;
    padding: 5px 10px;
    border-radius: 10px;
    text-decoration: none;
}

</style>