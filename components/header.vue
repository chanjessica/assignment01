<template>
    <header class="header">
        <ul class="nav-items">
           <li>
                <nuxt-link to="/home">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/menu">Menu</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/blog">Blog</nuxt-link>
            </li>
             <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
             <li>
                <nuxt-link to="/API">API</nuxt-link>
            </li>
        </ul>
    </header> 
</template>

<style scoped>
    .header{
        background: gray;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    .nav-items {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
    }
    .nav-items a {
        text-decoration: none;
        color: gold;
    }
    .nav-items a:hover,
    .nav-items a:active {
     color: green;
     }
</style>