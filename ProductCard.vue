
<template>
  <div class="product-card">
    <img :src="product.image" alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>\${{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>
