import { createStore } from "vuex";

export default createStore({
  state: {
    localProduct: [], 
    cart: [],
    searchResults: [],
  },
  mutations: {
    contextData(state, products) {
      state.localProduct = products;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (!existingProduct) {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      } else {
        existingProduct.quantity++;
      }
    },
    updateSearchResults(state, results) {
      state.searchResults = results;
    },
  },
  actions: {
    async getProduct(context) {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        context.commit("contextData", data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    performSearch({ commit, state }, query) {
      const lowerCaseQuery = query.toLowerCase();
      const results = state.localProduct.filter((product) =>
        product.title.toLowerCase().includes(lowerCaseQuery)
      );
      commit("updateSearchResults", results);
    },
  },
  getters: {
    searchResults: (state) => state.searchResults,
    searchProducts: (state) => (query) => {
      const lowerCaseQuery = query.toLowerCase();
      return state.localProduct.filter((product) =>
        product.title.toLowerCase().includes(lowerCaseQuery)
      );
    },
  },
});
