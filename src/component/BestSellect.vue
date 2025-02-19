<template>
  <main>
    <div class="container mainSection">
      <h1>BEST SELLER</h1>

      <!-- Category filter buttons -->
      <ul class="Cateogry">
        <!-- Loop through unique categories and create buttons with filtering -->
        <button
          v-for="cat in uniqueCategories"
          :key="cat"
          :class="{ active: filterCategory === cat }"
          @click="filterCategory = cat"
        >
          {{ cat }}
        </button>
      </ul>

      <!-- Display filtered products -->
      <div class="itemContaner">
        <CartTow
          v-for="product in displayedProducts"
          :id="product.id"
          :key="product.id"
          :title="product.title"
          :imag="product.thumbnail"
          :price="product.price"
          :category="product.category"
        />
      </div>
    </div>
  </main>
</template>


<script setup>
import CartTow from "@/component/itemsComponent/CartTow.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();


const products = computed(() => store.state.searchResults.length > 0 
  ? store.state.searchResults 
  : store.state.localProduct
);


const filterCategory = ref("all");


const uniqueCategories = computed(() => [
  "all",
  ...new Set(products.value.map((product) => product.category)),
]);


const displayedProducts = computed(() => {
  if (filterCategory.value === "all") {
    return products.value;
  }
  return products.value.filter(
    (product) => product.category === filterCategory.value
  );
});
</script>

<style>
.mainSection {
  margin-top: 30px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
}

.mainSection ul {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  margin: auto;
 
  flex-wrap: wrap;
}

.mainSection ul button {
  border: none;
  background-color: transparent;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
}

.mainSection ul button.active {
  background-color: #007BFF; 
  color: white;
  border-radius: 5px;
  border: 1px solid #007BFF;
  font-weight: bold;
}

.itemContaner {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}
</style>
