<template>

<div class="search-bar">     
    <input v-model="filter" class="search" type="search" name="search-bar" placeholder="Busca el objecto que deseas encontrar">
    <button @click="$emit('filter', filter)" class="btn btn-sm">Buscar</button>
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'SearchBar',
    setup() {
        const filter = ref<string>('')
        return{
            filter,
        }
    }
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