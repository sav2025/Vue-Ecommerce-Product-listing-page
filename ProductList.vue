
<template>
  <div class="product-list">
    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...Vuex.mapGetters(['filteredProducts']),
  },
};
</script>
