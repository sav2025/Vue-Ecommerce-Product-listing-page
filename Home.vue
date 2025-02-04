
<template>
  <div>
    <ProductFilters />
    <ProductList />
  </div>
</template>

<script>
import ProductFilters from '@/components/ProductFilters.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductFilters,
    ProductList,
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>
