<template>
  <div> 
     <Header/> 
    <nuxt />
      <footer class="footer">
            <!--  create 8 bubbles -->
            <div class="bubbles" id="b1"></div>
            <div class="bubbles" id="b2"></div>
            <div class="bubbles" id="b3"></div>
            <div class="bubbles" id="b4"></div>
            <div class="bubbles" id="b5"></div>
            <div class="bubbles" id="b6"></div>
            <div class="bubbles" id="b7"></div>
            <div class="bubbles" id="b8"></div> 
      </footer>
   </div>
</template>

<script>
import Header from '@/components/header'

export default {
  components: {
    Header: Header
  }
}
</script>

<style>
  body {
    width: 100%;
    margin: 0 auto;
    background-image: linear-gradient(-10deg, #C62828, #BA68C8);
    color: #fff;
    font-family: Ubuntu, Helvetica, 'Segoe UI', Tahoma;
    text-shadow: 1px 1px 0 #000; 
  }

 /* ---------  moving bubble from bottom to top ------------- */
  .bubbles {
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    animation: bbMove linear infinite normal both; }

  #b1 {
    background-color: #ffffff;
    width: 25px;
    height: 25px;
    left: 50px;
    animation-duration: 4s; }

  #b2 {
    background-color: #F1352B;
    width: 15px;
    height: 15px;
    left: 100px;
    animation-duration: 3s; }

  #b3 {
    background-color: #ff6600;
    width: 30px;
    height: 30px;
    left: 170px;
    animation-duration: 2s; }

  #b4 {
    background-color: #ffb617;
    width: 12px;
    height: 12px;
    left: 400px;
    animation-duration: 1.5s; }

  #b5 {
    background-color: #32CC32;
    width: 20px;
    height: 20px;
    left: 1300px;
    animation-duration: 2.5s; }

  #b6 {
    background-color: #C7E146;
    width: 13px;
    height: 13px;
    left: 1430px;
    animation-duration: 3s; }

  #b7 {
    background-color: #150f96;
    width: 25px;
    height: 25px;
    left: 1550px;
    animation-duration: 4s; }

  #b8 {
    background-color: #6e27c5;
    width: 20px;
    height: 20px;
    left: 1600px;
    animation-duration: 2s; }

  @keyframes bbMove {
    from {
      bottom: 0; }
    to {
      bottom: 650px; } 
  } 
</style>
