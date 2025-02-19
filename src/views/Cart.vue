<template>
    <main  class="container">
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>UNIT PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>
              <div class="prodcut">
                <button @click="removeItem(item.id)">x</button>
                <img :src="item.thumbnail" alt="Product Image" />
                {{ item.title }}
              </div>
            </td>
            <td> ${{ item.price }}</td>
            <td>
              <div class="incress">
                <button @click="incrementQuantity(item.id)">+</button>
                {{ item.quantity }}
                <button @click="decrementQuantity(item.id)">-</button>
              </div>
            </td>
            <td> ${{ (item.price * item.quantity).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
  
      <div class="total">
        <div>
          <h5>Subtotal</h5>
          <h5>${{ subtotal.toFixed(2) }}</h5>
        </div>
        <div>
          <h5>Shipping fee</h5>
          <h5>${{ shippingFee.toFixed(2) }}</h5>
        </div>
        <div>
          <h5>Coupon</h5>
          <h5>{{ coupon ? `-${coupon.toFixed(2)}` : "No" }}</h5>
        </div>
        <div class="totalPrice">
          <h5>TOTAL</h5>
          <h5>${{ total.toFixed(2) }}</h5>
        </div>
        <button class="btn btn-primary check">Check out</button>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { useStore } from "vuex";
  
 const store = useStore();
  const products = ref(store.state.cart);
  
  const shippingFee = ref(20); 
  const coupon = ref(0); 
  
  const subtotal = computed(() =>
    products.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  
  const total = computed(() => subtotal.value + shippingFee.value - coupon.value);
  
  const incrementQuantity = (id) => {
    const product = products.value.find((item) => item.id === id);
    if (product) {
      product.quantity++;
      store.commit("updateCart", products.value); // تحديث الحالة في Vuex
    }
  };
  
  const decrementQuantity = (id) => {
    const product = products.value.find((item) => item.id === id);
    if (product && product.quantity > 1) {
      product.quantity--;
      store.commit("updateCart", products.value); 
    }
  };
  
  const removeItem = (id) => {
    products.value = products.value.filter((item) => item.id !== id);
    store.commit("updateCart", products.value); 
  };
  </script>
  
  <style scoped>
  main{
    margin-top: 20px;
  }

  table {
    background-color: green;
    text-align: center;
  border-collapse: collapse; 
  width: 100%;
}
   table tr th{
    background-color: rgb(235, 233, 233);
  }
  td{
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(20, 142, 218, 0.195);
  }
  .prodcut {
    display: flex;
    justify-content: space-between;
    align-items: center;
   
  }
  .prodcut img {
    width: 5rem ;
    }
  table button {
    background-color: transparent;
    border: none;
    color: var(--redColor);
  }
  table tbody tr {
    border-bottom: 1px solid #CCCCCC;
  }
  .incress button {
 font-size: 1rem;
    width: 100%;
    color: var(--mainColor);
  }
  .total {
    width: 30%;
    margin-left: auto;
  }
  .total div {
    display: flex;
    justify-content: space-between;
  }
  .total div h5 {
    font-size: 18px;
    color: rgba(40, 37, 37, 0.82);
  }
  .total .totalPrice {
    font-size: 30px;
    font-weight: 600;
    border-top: 2px solid #CCCCCC;
    padding: 15px;
  }
  .total .totalPrice h5 {
    font-size: 30px;
  }
  .check {
    width: 100%;
    margin: auto;
  }

  @media (max-width:700px) {
    .total {
    width: 80%;
   margin: auto;
   margin-top: 20px;
  }
  *{
    font-size: 13px;
  }

  @media (max-width: 768px) {
    .table {
      width: 100%;
      table-layout: fixed; /* تحديد عرض ثابت للأعمدة */
    }
  }
  
    
  }
  </style>
  