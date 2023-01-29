<template>
    <button>
        <slot name="right-icon">Buscar</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: 'CustomButton',
});
</script>