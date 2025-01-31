ProductFilters.vue
vue. vue
CopyEdit
<template>
  <div class="product-filters">
    <input v-model="searchQuery" placeholder="Search products..." @input="applyFilters" />
    <select v-model="selectedCategory" @change="applyFilters">
      <option value="All">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
    <select v-model="sortOption" @change="applyFilters">
      <option value="price">Sort by Price</option>
      <option value="popularity">Sort by Popularity</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    ...Vuex.mapState(['categories', 'selectedCategory', 'searchQuery', 'sortOption']),
  },
  methods: {
    ...Vuex.mapActions(['applyFilters']),
  },
};
</script>
