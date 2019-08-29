<template>
  <div class="container">
      <h1 class="heading"> Customer Information</h1>
      <hr>
        <section  v-if="info">
          <customerCard v-for="user in info"  :key="user.id"    :user="user"/>
        </section>
  </div>
</template>

<script>
import axios from 'axios';
import customerCard from '~/components/card.vue'

export default{
    components:{
        customerCard
    },
    data() {
        return{
            info: null,
            loading: true,
            errored: false
        }
    },
    mounted(){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(Response => (this.info = Response.data))
        .catch(error =>{ console.log(error)
                         this.errored=true
                       })
        .finally(() => (this.loading = false))
    },
    filters: {
        twoDecimal(v){
            return v.toFixed(2)
        }
    }
}
</script>
