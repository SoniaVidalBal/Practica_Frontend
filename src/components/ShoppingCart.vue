<template>
    <div class="cart">
        <div class="cart-header">
            <h3>Mi carrito {{ cartElements.lenght }}</h3>
        </div>
        <div class="cart-items">
            <ul>
                <li v-for="element in cartElements" :key="element.id" >
                {{ element.name }}
            </li>
            </ul>
        </div>
        <div class="cart-footer">
            <h2>Total:</h2>
            <button class="btn btn-primary">Tramitar compra</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCart } from '../composables/UseCart';


export default defineComponent({
    setup(){
        const {cartElements} = useCart();
        return {
            cartElements
        }
    }
})

</script>

<style scoped>
.cart{
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    border: 1px solid black;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    background-color: lightgrey;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}

.cart-header, .cart-footer {
    background-color: grey;
    height: 50px;
    width: 100%;
}

.cart-footer {
    background-color: grey;
    height: 100px;
    width: 100%;
}
</style>