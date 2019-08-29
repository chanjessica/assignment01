<template>
    <!-- pass data using array object and usgin v-for to loop through data -->
    <!-- <section v-if="posts">
        <imgList v-for="post in posts"  v-bind:key="post.id"  v-bind:post="post">
        </imgList>
    </section> -->
  <div>
      <div class="myCustomClass">
          <h2 slot="title"> {{ quoteTitle | toUpper }} </h2>
          <h3 slot="content"> {{ quoteContent | toLower }} </h3>
        <div class="picture">
          <b-carousel id="carousel-1" background="#ababab"  img-width="500" img-height="350" controls >
              <b-carousel-slide v-for="slide in posts" 
                  :bind="slide" :key="slide.id" :caption= "slide.price" :img-src= "slide.imgSrc"  alt="slide.food" >
              </b-carousel-slide>
          </b-carousel>
        </div>
      </div> 
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
  import imgList from '@/components/img/imgList.vue';
  import slotMsg from '@/components/Quote.vue'
  // import { toLower, toUpper, toCap } from '@/components/filters';


  export default{
    components:{
      imgList,
      'app-quote': slotMsg
    },
    data(){
      return{
        quoteTitle : 'WE ARE located at university village',
        quoteContent: '1234 Wonderful Land, Seattle WA 98123',
        posts : [ {id:1, food: "General Tso Chicken", price: "$12.9", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-1.jpg"},
                  {id:2, food: "BBQ Pork", price: "$10.7", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-2.jpg"},
                  {id:3, food: "Pork Fried Rice", price: "$9.7", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-3.jpg"}
        ]
      }
    },
    // filters:{    toCap,     toLower,      toUpper    }
      filters: { 
        toCap(v){
          if(!v) return '';
             v=v.toString();
            return v.charAt(0).toUpperCase() + v.slice(1);
        },
        toLower(v){
          return v.toLowerCase();
        },
        toUpper(v){
          return v.toUpperCase();
        }
     }
  }
</script>

<style>
h2,h3{text-align: center;}
.myCustomClass{
  width: 50%;
  height: 100px;
  min-height: 100vh;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin: auto;;
}
.picture {
  width: 100%;
  object-fit: cover;
  height: auto;
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
