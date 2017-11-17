<template>
    <div class="kuan">
            <div>我的第一个vue </div>
        <div>{{my}}</div>
       <!-- <p>{{$route.params.color}}</p>-->
        <img src="../assets/kuan.jpg" alt="">
       <!-- <button @click="myClick">{{you}}</button>-->
    </div>
</template>
<script>
    export default {
        name:'kuan',
        data(){
           return {
               my:'对于孩子来说 我是一个很不好的父亲',
               // you:"点我获取参数"
           }

        }
       /* methods:{
            myClick(){
                console.log(this.$route.params);
            }
        }*/
    };
</script>
<style>
  .kuan{
    /*width: 100%;*/
    /*height: 300px;*/
    text-align: center;
    background: lightblue;
  }
  img{
    width: 50%;
  }
</style>
