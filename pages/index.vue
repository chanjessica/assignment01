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

</style>
