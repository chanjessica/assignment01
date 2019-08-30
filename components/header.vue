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
            <!-- share facebook -->
        <div class="fb-share-button" data-href="https://www.pandaexpress.com/" data-layout="button_count" data-size="large">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.pandaexpress.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
        </div>

   </header> 
    
</template>

<style scoped>
    *{
        font-size: 2rem;
    }
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