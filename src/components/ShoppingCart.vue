<template>
    <div class="cart">
        <div class="cart-header">
            <h3>Mi carrito</h3>
            Número de productos: {{ cartElements.length }}
        </div>
        <div class="cart-items">
            <ul>
                <li v-for="element in cartElements" :key="element.id" >
                    <div class="cart-details">
                        {{ element.title }} {{ element.price }}
                    </div>
                    <div class="actions">
                        <button @click="removeProduct(element)" class="btn btn-danger">x</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cart-footer">
            <button class="btn btn sm btn-primary">Tramitar compra</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCart } from '../composables/UseCart';


export default defineComponent({
    setup(){
        const {cartElements, removeProduct, toggleCart} = useCart();
        return {
            cartElements,
            removeProduct, 
            toggleCart,
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
    height: 75px;
    width: 100%;
}

.cart-items ul {
  list-style: none;
}

li {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>