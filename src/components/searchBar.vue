<template>

<div class="search-bar">     
    <input v-model="filter" class="search" type="search" name="search-bar" placeholder="Busca el objecto que deseas encontrar">
    <customButton @click="$emit('filter', filter)" class="btn btn-sm"/>
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import customButton from './customButton.vue';

export default defineComponent({
    name: 'SearchBar',
    components: {
        customButton,
    },
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