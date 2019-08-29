<template>
    <div class="single-img-page">
        <section class="img">
            <h1 class="img-title">title of the img</h1>
            <div class="img-detail">
                <div class="img-detail">last update on xx</div>
                <div class="img-detail">kkk</div>
            </div>
        <section clss="img-feedback">
            <p>contact me at
                <a href="mailto:feedback@yahoo.com">feedback@yahoo.com</a>
            </P>
        </section>
        </section>
    </div>
</template>

<style  scoped>
.single-img-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
}
.img{
    width: 100%;
}
@media (min-width: 768px){
    .img {
        width: 600px;
        margin:auto;
    }
}
.img-title{
    margin: 0;
}
.img-detail {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
@media (min-width: 768px){
    .img-detail {
           flex-direction: row;  }
}
</style>