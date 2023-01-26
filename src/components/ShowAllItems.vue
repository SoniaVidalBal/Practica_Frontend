<template>
    <div class="item">
        <div class="item-image"> 
            <img :src="product.images[0]" :alt="product.title">
        </div>
        <div class="item-info"> 
            <div class="product-name">{{ product.title }}</div>
            <div class="product-price"> {{ product.price }}€</div>
        </div>
    </div>

</template>

<script lang="ts">
import { Products } from '@/models/product';
import { defineComponent, PropType } from 'vue';


    export default defineComponent({
        props: {
            product: {
                type: Object as PropType<Products>, 
                required: true,
            },
        },
    })
</script>

<style scoped>
.item{
    width: 300px;
    display: flex;
    border: 1px solid black;

}

.item-image{
    width: 50%;
}

.item-image > img {
    width: 100%;
    height: auto;
}

</style>