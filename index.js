
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    filteredProducts: [],
    categories: ['Electronics', 'Clothing', 'Furniture'],
    selectedCategory: 'All',
    searchQuery: '',
    sortOption: 'price',
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.filteredProducts = products;
    },
    setCategory(state, category) {
      state.selectedCategory = category;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setSortOption(state, sortOption) {
      state.sortOption = sortOption;
    },
    filterProducts(state) {
      let filtered = state.products.filter(product => {
        return (
          (state.selectedCategory === 'All' || product.category === state.selectedCategory) &&
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      });
      if (state.sortOption === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (state.sortOption === 'popularity') {
        filtered.sort((a, b) => b.popularity - a.popularity);
      }
      state.filteredProducts = filtered;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        // Mock API request using JSON data or you can replace this with actual API call
        const response = await axios.get('/api/products');
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    applyFilters({ commit }) {
      commit('filterProducts');
    },
  },
  getters: {
    filteredProducts(state) {
      return state.filteredProducts;
    },
    categories(state) {
      return state.categories;
    },
    selectedCategory(state) {
      return state.selectedCategory;
    },
  }
});
