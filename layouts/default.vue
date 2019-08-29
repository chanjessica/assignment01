<template>
  <div> 
     <Header/> 
    <nuxt />
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
</style>
