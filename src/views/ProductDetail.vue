<template>
  <main>
    <div class="parent container">
      <div class="top">
        <div class="right">
          <div class="productImage">
            <img class="mainImage" :src="item.thumbnail" />
          </div>
          <div class="listofImage">
            <div class="smallimage" v-for="(img, index) in images" :key="index">
              <img :src="img" alt="Small Image" @click="updateMainImage(img)" />
            </div>
          </div>
        </div>
        <div class="left">
          <h1>{{ item.title }}</h1>
          <div class="rating">
            <div class="Stars">
              <p>&#9733;</p>
              <p>&#9733;</p>
              <p>&#9733;</p>
              <p>&#9733;</p>
            </div>
            <span style="color: #C1C8CE;">0 reviews</span>
          </div>
          <div class="category">
            <h6>Description</h6>
            <p>{{ item.description }}</p>
          </div>
          <div class="price">
            <h3 style="color: var(--mainColor); font-weight: bold;">{{ formattedPrice }}</h3>
            <p style="color: var(--grayColor); text-decoration: line-through; font-weight: 500;">
              ${{ (item.price / 2).toFixed(2) }}
            </p>
            <p style="color: var(--redColor);">24% Off</p>
          </div>
          <div class="Add">
            <div class="incress">
              <button @click="incrementQuantity">+</button>
              {{ item.quantity }}
              <button @click="decrementQuantity">-</button>
            </div>
            <div class="totlaprice" style="font-size: 22px; font-weight: bold; column-rule-color: black;"><p> Total : {{ item.totalPrice ||item.price}}</p></div>
            <button @click="AddToCart">
              <img src="/src/assets/icon/cart_2.png" alt="" />
              Add To Cart
            </button>
          </div>
          <div v-if="showConfirmation" class="confirmation-message">
            <div class="alert" role="alert">
              Success added!
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const route = useRoute();

const item = ref({
  title: "Loading...",
  description: "",
  thumbnail: "",
  price: 0,
  quantity: 1, 
  totalPrice: 0, 


});
const totalPrice = computed(() => item.value.price * item.value.quantity);
watch(
  () => item.value.quantity,
  () => {
    item.value.totalPrice = item.value.price * item.value.quantity;
  }
);

const images = ref([]);


const showConfirmation = ref(false);

const incrementQuantity = () => {
  item.value.quantity++; }

const decrementQuantity = () => {
  if (item.value.quantity > 1) {
    item.value.quantity--; 
  }
};

const fetchProduct = async () => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${route.params.id}`
    );
    const data = await response.json();
    item.value = { ...data, quantity: 1 }; 
    images.value = data.images || [];
  } catch (err) {
    console.error("Error fetching product:", err);
  }
};

onMounted(fetchProduct);

watch(() => route.params.id, fetchProduct);

const AddToCart = () => {
  store.commit("addToCart", item.value);
  showConfirmation.value = true;

  setTimeout(() => {
    showConfirmation.value = false;
  }, 2000);
};

const updateMainImage = (img) => {
  item.value.thumbnail = img;
};

const formattedPrice = computed(() => `$${item.value.price.toFixed(2)}`);
</script>

<style scoped>

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  width: 50%;
}
.mainImage {
  width: 100%;
  height: 100%;
}
.top {
  display: flex;

}
.rating,
.price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid grey;
  width: 70%;

}
.Add {
  padding: 7px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
}
.Add .incress {
  background-color: #f6f7f8;
  padding: 5px;
  border-radius: 5px;
}
.Add button {
  background-color: #f6f7f8;
  color: var(--mainColor);
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  border: none;
}
.listofImage {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
}
.smallimage {
  width: 85.74px;
  height: 85.66px;
}
.smallimage img {
  width: 95%;
}
.alert{
  position: absolute;
  
  color: rgb(255, 255, 255);
  background-color: rgba(23, 226, 145, 0.638);
  font-size: 22px;
  top:80%;
  right: 10%;


}

@media (max-width :700px) {
  .top {
 flex-direction: column;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  width: 90%;
 
}
.Add{
  flex-direction: column;
  align-items: center;;
}
.rating,
.price {

  width: 100%;
}
.rating{
  flex-direction: column;
}
  
}
</style>