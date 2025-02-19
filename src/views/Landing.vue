<template>
<div>
    <imagetop/>

    <div class="box-item">
   <Slide style="width: 100%; height: 100%;"></Slide>
    </div>


    <BestSellect/>
    <imageShoes/>
   


</div>
</template>

<script setup>

import imagetop from '@/component/imagetop.vue';
import BestSellect from '@/component/BestSellect.vue';
import imageShoes from '@/component/saideCompoent/imageShoes.vue';
import Slide from '@/component/Slide.vue';



</script>

<style scoped>
.box-item{
    box-shadow: rgba(0, 0, 0, 0.222) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    width: 80%;
    height: 388.48px;
    position: relative;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f6f6;
}

.itemsSection{
    display: flex;
    background-color: floralwhite;
    width: 1000px;
}

</style>