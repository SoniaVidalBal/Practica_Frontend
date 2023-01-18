<template>
    <div class="about">
      <h1>This is a detail page</h1>
      <h3>Role: {{ userRole }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String
  },
  setup() {
    return {}
  }
})
</script>