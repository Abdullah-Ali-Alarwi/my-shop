<template>
  <main>
<div class="boxParent">
    <div class="box">
    <h3> <img src="/src/assets/icon/Logo.png" alt=""> E-Comm</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
    </div>
    <div class="box">
    <h3>Follow Us</h3>
    <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
    </div>
    <div class="box">
    <h3>Contact Us</h3>
    <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
    </div>


</div>

<div class="boxParent">
<div class="box">
    <h3>Infomation</h3>
    <p>About Us
Infomation 
Privacy Policy
Terms & Conditions</p>
</div>
<div class="box">
    <h3>Service</h3>
    <p>About Us
Infomation 
Privacy Policy
Terms & Conditions</p>
</div>
<div class="box">
    <h3>My Account</h3>
    <p>About Us
Infomation 
Privacy Policy
Terms & Conditions</p>
</div>
<div class="box">
    <h3>Our Offers</h3>
    <p>About Us
Infomation 
Privacy Policy
Terms & Conditions</p>
</div>
</div>

<img style="width: 100%;" src="/src/assets/icon/BOTTOM.png" alt="">
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main{
    background-color: #BCDDFE;
    padding: 30px;
}
.boxParent{
    display: flex;
    justify-content: space-around;
    padding: 30px;    gap: 10px;
}
.box{
    width: 221.1px;
}

@media (max-width :700px) {
    .boxParent{
        flex-direction: column;
  
    
    }
    
}

</style>