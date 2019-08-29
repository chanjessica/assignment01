<template>
  <div class="home-page">
    <section class="into">
    <h1> Welcome! </h1>
    </section>
  <section>
    <div class="card">
    <div  v-show="isShowing">
        <ImgPreview id="1"  url="http://lorempixel.com/output/food-q-c-640-480-1.jpg" 
        title="Food itme 1"  price="7.98" />
    </div>
    <b-button @click="toggleShow" href="#" variant="primary"> Toggle</b-button>
    </div>
     <div class="card">
      <ImgPreview id="2"  url="http://lorempixel.com/output/food-q-c-640-480-2.jpg" title="Food itme 2"  price="9.99" />
    </div> 
    <div class="card">
     <ImgPreview id="3"  url="http://lorempixel.com/output/food-q-c-640-480-3.jpg" title="Food itme 3"  price="8.99" />
    </div>
  </section>
    <small>/pages/home/index.vue</small>
  </div>

</template>

<script>
  import ImgPreview from '@/components/img/img.vue'

  export default{
    data(){
      return{
        isShowing: true
      }
    },
    methods: {
      toggleShow(){
        this.isShowing = !this.isShowing;
      }
    },
    components:{
      ImgPreview
    }
  }
</script>

<style scoped>
  .card {
    margin: 0 auto;
    border: 2px solid red ;
  }
</style>