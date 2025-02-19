<template>
  <main class="container">
<div class="fullbox">
  <div class="left">
      <h3>Get in
        touch</h3>

        <p>contact@e-comm.ng</p>
        <p>+234 4556 6665 34</p>
        <p>20 Prince Hakerem Lekki
          Phase 1, Lagos.</p>

    </div>

<div class="right">
    <form action="">
        <label for="fullName">Fullname</label>
        <input type="text" placeholder="Your full Name ">
        <label for="Email">Email</label>
        <input type="email" placeholder="youremail@gmail.com">
        <label for="Message">Message</label>
        <textarea name="Message" id="Message" placeholder="Type your message"></textarea>

        <button class="btn btn-praimary"> send</button>
    </form>
</div>
</div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>

.fullbox{
  border: 1px solid #ddd2d2;
 display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 50% 10px;
  


}
.left{
    background-image: url("/src/assets/icon/Union.png");
    background-size: cover;
    width:  50%;
    height: 500px;
    text-align: center;
    margin: auto
    ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 15px;
    padding-left:10px;

}
.right{
  width: 50%;
}
label{
  margin: 10px;

}
form{
  display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin-left: 10px

}
input , textarea{
width: 90%;
padding: 10px;
border-radius: 5px;
outline: none;
border-color: #e4dcdc97 ;
}
textarea{
  min-height: 200px;

}
button{
  width: fit-content;
  background-color: var(--mainColor);
  color: white;
  margin: 5px;

}

@media (max-width :800px) {
  .fullbox{
    flex-direction: column;
  }
  .left{
    width:  100%;
    height: 300px;
    flex-direction: column;

}
.right{
  width:100%;
}
  
}
</style>