<template>
  <main>
    <div class="mainSection">
      <div class="card" style="width: 18rem;">
        <router-link :to="{ name: 'ProductDetail', params: { id: id } }">
          <img :src="imag" class="card-img-top" alt="..." />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <div class="Stars">
            <p>&#9733;</p>
            <p>&#9733;</p>
            <p>&#9733;</p>
            <p>&#9733;</p>
          </div>
          <div class="info">
            <p class="price">${{ price }}</p>
            <p class="cancel">${{ price / 2 }}</p>
            <p class="ofPrice">24% Off</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imag: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
</script>

<style>
.info {
  display: flex;
  justify-content: space-around;
}
.price {
  color: var(--mainColor);
  font-size: 18px;
  font-weight: bold;
}
.cancel {
  color: var(--grayColor);
}
.Stars {
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 22px;
  color: orange;
}
.ofPrice {
  color: var(--redColor);
  font-weight: bold;
  font-size: 14px;
}
</style>
