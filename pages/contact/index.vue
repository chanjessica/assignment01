<template>
    <div>
        <small> /pages/contact/index.vue</small>
        <!-- SLOT -->
        <div id="slot">
          <app-quote>
            <h2 slot="title"> {{ quoteTitle | toUpper}}  </h2>   
            <P slot="content"> {{ quoteContent | toLower}}</P>
            <p>Call us at (206)123-4567</p>
        </app-quote>
        <router-view></router-view>
        <div class="menu">
            Type in what you are looking for.<br> e.g. Chicken <input v-model="filterFood"> 
        <ul><li v-for="(food, index) in filterMenu" v-bind:key="index"> {{ food }} </li></ul>
        </div>
        <div  v-if="imgList"> 
              <!-- whatever bind to the v-bind is the info passing to the child component -->
        <app-home v-for="img in imgList"  v-bind:title="pageTitle" v-bind:imgData="img" v-bind:key="img.id">
        </app-home>
      </div>
    </div>

        <b-container fluid>
            <!-- ###### V-IF ######## -->
            <div v-if="login"><h1>You are Login</h1></div>
            <div v-else><h1>Please login</h1> </div>
             <!-- #######  modals  ####### -->
            <h2 class="mt-4 text-center" >modals </h2>
            <b-button v-b-modal.modal-1>FeedBack</b-button>
             <!-- Modal body -->
            <b-modal id="modal-1" title="Thank You!">
                <form>
                    <div class="form-group">
                        <label class="mt-3">Name</label>
                        <input type="text" class="form-control form-control-lg" placeholder="user name">
                        <label class="mt-3">Email</label>
                        <input type="email" class="form-control form-control-lg" placeholder="xyz@yahoo.com">
                        <label class="mt-3">Password</label>
                        <input type="password" class="form-control form-control-lg" placeholder="*******">
                        <input type="submit" value="Submit" class="mt-3 btn btn-success">
                    </div>
                </form>
            </b-modal>

            <!-- #######  popover  ####### -->
            <h2 class="mt-4 text-center" >popover </h2>
            <b-row class="text-center ">
                 <b-col md="4" class="py-3">
                    <b-button v-b-popover.hover.top="'Exit'" variant="primary">Log Out</b-button>
                </b-col>
                <b-col md="8" class="px-5">
                    <b-button v-b-popover.hover.bottom="'Sign IN'" variant="primary"> Log In</b-button>
                </b-col>
             </b-row>
            
            <!-- #######  Tooltip  ####### -->
            <h2 class="mt-4 text-center" >tooltip </h2>
            <b-row>
                <b-col md="4" class="py-4">
                <b-button id="button-1" variant="outline-success">Live chat</b-button>
                </b-col>
                <b-col md="4" class="py-4">
                <b-button id="button-2" variant="outline-success">Html chat</b-button>
                </b-col>
                <b-col md="4" class="py-4">
                <b-button ref="button-3" variant="outline-success">Alternative chat</b-button>
                </b-col>
            </b-row>

            <!-- Tooltip title specified via prop title -->
            <b-tooltip target="button-1" title="Online!"></b-tooltip>

            <!-- HTML title specified via default slot -->
            <b-tooltip target="button-2" placement="bottom">
                Hello <strong>World!</strong>
            </b-tooltip>

            <!-- Tooltip for an element identified by ref -->
            <b-tooltip :target="() => $refs['button-3']" title="Alternative!"></b-tooltip>
        
        </b-container>
    </div>  
</template>

<script>
import Quote from '@/components/Quote.vue';
  export default {
      name: "contact",
      data(){
          return {
              login: false
          };
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    min-height: 100vh;
    background: rgb(224, 207, 210);
}
 #slot {
   margin-top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black ;
  background: plum;
  margin-top: 60px;
}
.menu {
  text-align: left;
}
</style>
