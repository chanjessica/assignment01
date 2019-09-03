        <!-- /components/Quote.vue -->
<template>
    <div>
        <!-- Using slot to passing in outside content with html tag --> 
        <slot name="title"></slot>
        <hr>
        <slot name="content"></slot>
        <!-- passing in Default slot -->
        <span style="color: #ccc">   <slot></slot> </span>
        <!-- set default content for slot "extra" when no data is passing from outside --> 
        <span style="color: #888"> <slot name="thanks"> ~~~~~ ***** ~~~~~ </slot></span>
    </div>
</template>

<script>
</script>

<style scoped>
h2 {color:red}
    div {
        border: 2px solid red;
        box-shadow: 1px 1px 2px blue;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black ;
  background: plum;
}

</style>