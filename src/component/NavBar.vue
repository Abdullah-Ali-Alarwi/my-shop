<template>

  <main>
    <div class="topnav">
      <div class="container toptop">
        <div class="secrchcontainer">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search products..."
            @input="performSearch"
          />
          <img src="/src/assets/icon/search-icon.png" alt="Search Icon" />
        </div>

        <!-- Cart Icon -->
        <div class="icosnlink">
          <div class="mylink">
            <router-link to="/Cart">
              <img src="/src/assets/icon/Cart.png" alt="Cart Icon" />
            </router-link>
            <div class="itemCard">{{ productCount }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="botnav">
      <div class="container botnav">
          <img src="/src/assets/icon/Logo.png" alt="Logo" />
        <div class="right">
          <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

// Vuex Store Instance
const store = useStore();

// Reactive Variables
const searchQuery = ref(""); // User's search query

// Computed Properties
const productCount = computed(() => store.state.cart.length); // Total products in cart

// Search Function
const performSearch = () => {
  store.dispatch("performSearch", searchQuery.value); // Dispatch Vuex action to update search results
};
</script>


<style scoped>
main {
    background-color: #efeff1;
    padding-top: 10px;
    padding-bottom: 5px;
}

.botnav, .topnav {

    border-bottom: 1px solid #efeff1;
}

.toptop {
    display: flex;
    justify-content: space-between;
}

.topnav, .drop {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    align-items: center;
}

.icosnlink {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top, .mylink, .drop {
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.mylink img {
    margin: 0px 10px;
}

.botnav {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.itemCard {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: var(--redColor);
    position: relative;
    right: 18px;
    bottom: 7px;
    display: flex;
    align-content: center;
    justify-content: center;
    color: white;
}

.botnav .right {
    width: 80%;

}

.botnav .right ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    align-items: center;
  
  
}

.botnav .right ul a {
    text-decoration: none;
    font-size: 24px;
    color: #262626;  
}

.secrchcontainer {
    width: 100% !important; 
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    width: 50%;
}

.secrchcontainer input {
    width: 100%;
    border: none;
    outline: none;
    padding: 5px;
}
.languageDive{
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(max-width: 900px) {
    .secrchcontainer  {
        width: 50%;
        height: 40px;
        margin-top: 10px;
        padding: 5px;
    }
  

    .topnav, .drop, .botnav {
    
        margin: 10px 0;
    }

    .botnav .right ul a {
        font-size: 18px;
    
    }
    .right    {
    
    height: 20px;

    }

    .secrchcontainer {
    width: 50%;
    border: none;
    outline: none;
    padding: 5px;
}

  
}
</style>
