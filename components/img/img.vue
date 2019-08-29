<template>
  <div>
    <!--  passing data  through tag:  /page/home/index  <ImgPreview id= url= title= price=>  -->
    <nuxt-link :to="'/img/'+ id" class="img-preview">
      <article>
        <div class="container">
            <div class="img-thumbnail"  :style="{ backgroundImage: ' url(' + url +  ')  '} ">
        </div>
        </div>
        <div class="img-content">
          <h5>  {{ title }}</h5>
          <h5> {{ price }}</h5>
        </div>
      </article>
    </nuxt-link>

    </div>
</template>

<script>
export default {
    name: 'ImgPreview',
    props:{
        id: {
            type: String,
            reguired: true
        },
        title: {
            type: String,
            reguired: true
        },
        price:{
            type: String,
            reguired: true
        },
        url:{
            type: String,
            reguired: true
        }
    }
}
</script>

<style  scoped>
.img-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.img-content{
  padding: 10px;
  text-align:center;
}
.img-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: lavender;
    width: 90%;
}
a{
    text-decoration: none;
    color: black;
}
@media (min-width: 768px){
    .img-preview {
        width: 400px;
        margin: 10px;
    }
}
</style>