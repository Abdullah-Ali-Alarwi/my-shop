<template>
    <main>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="i in 3"
            :key="i"
            class="carousel-item"
            :class="{ active: i === 1 }"
            data-bs-interval="10000"
          >

          <img src="/src/assets/image/image Product (1).png" alt="">
          <img src="/src/assets/image/image Product (2).png" alt="">
          <img src="/src/assets/image/image Product (3).png" alt="">
        </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  </template>
  
  <script>
  export default {};
  </script>

  <style scoped>
 main ,.carousel-inner,.carousel{
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;

}
  img{
    width: 33%;
    height: 100%;
  }
  </style> 
  