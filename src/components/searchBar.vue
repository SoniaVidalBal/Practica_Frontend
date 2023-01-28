<template>

<div class="search-bar">     
    <input class="search" type="text" name="search-bar" placeholder="Busca el objecto que deseas encontrar">
    <button class="btn btn-sm">Buscar</button>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
    name: 'SearchBar',
    });

</script>

<style scoped>
.search-bar{
    width: 100%;
    margin: 15px;
    
}
.search{
    width: 80vw;
    border-radius: 15px;
}
</style>