<template>
    <div>
      <nuxt-child/>
      <input type="text" v-model="userId">
      <button @click="onLoadUser">Load User </button>      
    </div> 
</template>

<script>
export default{
  data(){
    return{
      userId: ' '
    }
  },
  methods: {
    onLoadUser(){
      this.$router.push('/home/'+this.userId)
    }
  },
  layout: 'home'  //---  layout/home.vue will be use instead of layout/default.vue
}
</script>