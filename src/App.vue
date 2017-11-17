<template>
  <div class="fist">
    <!--我是app 首页-->
    <div>{{header}}</div>
   <!-- <img src="./assets/logo.png"> --> <!--这里是 整个网站上都不变的 固定了的-->
    <router-view></router-view>  <!--这里是中间的 随机变动的 -->

<!--
    <router-link to="/kuan">去到我的图片页</router-link>
    &lt;!&ndash;这里有两种写法&ndash;&gt;
    <router-link :to="{path:'xuan'}">去到农远轩的图片页</router-link>
    <div>{{kuan}}</div>
    &lt;!&ndash;<img src="./assets/kuan.jpg" alt="">&ndash;&gt;

    -->
      <!--<Header></Header>-->
      <kang class="bar" ></kang>


    <!--<router-view clas="view"></router-view>-->
    <!--<div class="nav">
          <router-link class="nav-item" to="/langren">狼人杀</router-link>
          <router-link class="nav-item" to="/sanguo">三国杀</router-link>
          <router-link class="nav-item" to="/yingxiong">英雄杀</router-link>
    </div>-->

  </div>
</template>

<script>

  //注意 这里 的 引入进来 的  跟js 没有什么关系  from 后面的路径 对了 就可以 , import 后面的名字都是可以  自己 定义 然后 在template中 用自己定义的名字为标签的名字

// 引入底部
  import kang from './components/footer/footer'
  // 引入 头部
  import Header from './components/header/header.vue'
export default { //输出
  //name: 'app',
    data(){
      return{
           /* kuan:'我就是农大宽  是这个家的男主人  我是这里footer 的固定 ',
            header:'我是固定的头部'*/
        }
    },
  components:{
    kang,
    Header
  }
}
</script>

<style scoped>
  @import "build/style/base.css";
/*样式*/
/*.fist {
  !*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*!
  height: 100%;
  display: flex;
  flex-direction:column;
  flex:1;
  position: relative;
}*/
 /* .bar{
    position: absolute;
    bottom:0;
  }*/
 /* .nav{
    height: 80px;
    line-height: 80px;
    display: flex;
    text-align: center;
  }
.nav-item{
  flex: 1;
  text-decoration: none;
    }
.nav-item:link,.nav-item:visited{
    background-color: white;
    color: black;
         }
.nav-item:hover,.nav-item:active{
           color: white;
           background-color: #C8C6C6;
        }*/

</style>
