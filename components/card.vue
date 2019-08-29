<template>
    <article class="card">
        <div class="card__name">
           {{ user.name }} 
        </div>  
        <div class="card__detail">
         Phone#:  {{ user.phone }} <br/>
         Email: {{ user.email}}   <br/>
         Address: {{ user.address.street}} ,
         {{ user.address.city}}      {{user.address.zipcode}} <br/>
        </div>
    </article>
</template>

<script>
export default {
    name: 'customerCard',
    props: {
        user: Object
 }
}
</script>
<style lang="scss">
.card {
    margin: 1rem;
    border: 1px solid #000;
    padding: 1.5 rem;
    max-width: 500px;
    min-height: 200px;
    // height: 200px;
    &__name{ 
        background-color: gray;
        font-weight: bold;
        display: block;
        margin-bottom: 1rem;
    }
    &__detail{
        font-size: 1rem;
        margin-bottom: .25rem;
    }
}
</style>