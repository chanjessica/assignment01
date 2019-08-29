<template>
  <div>
      <article>
          <div class="container">
        <div class="img-thumbnail"  :style="{ backgroundImage: ' url(' + post.imgSrc +  ')  '} ">
        </div>
        </div>
        <div class="img-content">
          <h5> {{ post.id }}: {{ post.food }}</h5>
          <h5> ${{ post.price }}</h5>
        </div>
      </article>
    </div>
</template>

<script>
export default {
    name: 'imgList',
    props: ['post']
}
</script>

<style  scoped>
.img-thumbnail {
  width: 50%;
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