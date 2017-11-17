<template>
    <div class="xuan">
        <p :style="linkCss">{{my}}</p>
        <p>{{son}}</p>
      <!--条件渲染-->
      <a v-if="isPartA">isPartA</a>
      <a v-show="!isPartB">isPartB</a>
      <button @click="toggle">按钮</button>
        <!--<img :src="image" alt="">-->
        <img src="../assets/17.9.17.jpg" alt="">
    </div>



</template>
<script>
    export default {
          props: [],
        name:'xuan',
        data(){
              return {
                  my:'我的儿子 农远轩 第一个域名 ',
                  son:'我有个聪明的儿子',
                 // image: '../assets/17.9.jpg'
                linkCss:{ //定义 样式
                  'color':'red',
                  'font-size':'20px'
                },
                isPartA:'true',
              }
        },
      methods:{
        toggle(){
          //当没有 这个 方法的时候 ; isPartA
//          当按钮被点击的 时候 ; 这个 isPartA 不是这个isPartA
          this.isPartA = !this.isPartA;
        }
      }
    }
</script>
<style type="text/css">
  .xuan{
   text-align: center;
    background: blueviolet;
  }
  img{
    width: 50%;
    /*height: 200px;*/
  }
</style>
