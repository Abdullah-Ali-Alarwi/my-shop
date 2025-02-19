<template>
<main style="background-image: url('./src/assets/image/image Product.png');">
    <h3>FS - QUILTED MAXI CROSS BAG</h3>
  <div class="off-div">
    <span>$534,33</span>
    <p>24% Off</p>
  </div>
  <h5>$299,43</h5>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>
main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
   padding: 30px;
}

.off-div{
    display: flex;
    justify-content: space-around;
    margin-right: auto;
    margin-bottom: -70%;
}
.off-div span{
    display: flex;
  text-decoration: line-through;
    color: #9098B1;
}
.off-div p{
    color:  var(--redColo)
;
font-weight: bold;
}
h5{
    color: var(--mainColor);
    font-weight: bold;
    margin-left: auto; 

}
</style>