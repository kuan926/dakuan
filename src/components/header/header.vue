<template>
  <div class="header">
    <div>我的第一个vue 头部 下面的内容都是我共个模板 </div>
    <div>{{my}}</div>
    <h1>标题</h1>
    <a href="#">作者:{{author}}</a>
    <!-- <p>{{$route.params.color}}</p>-->
    <!--<img src="../../assets/kuan.jpg" alt="">-->
    <!-- <button @click="myClick">{{you}}</button>-->
  </div>

  <!--导航的头部-->
  <!--<div class="jd_header_nav">
    <div class="jd_header_nav_box" id="headerNavBox">
      <a href="#" class="jd_header_van_left"></a>
      <form action="">
        <span class="jd_search"></span>
        &lt;!&ndash;将type类型修改为serach,可以唤醒输入法的srach按钮显示&ndash;&gt;
        <input type="text" placeholder="请输入想要订购的内容">
        <a href="#" class="jd_header_nav_right">登录</a>
      </form>
    </div>
  </div>
-->
  <!--&lt;!&ndash;底部的tabBab选项卡&ndash;&gt;
  <div class="jd_tabBab">
    <ul class="clearfix">
      <li>
        &lt;!&ndash;注意  图片在HTML这页与在css那页的存储位置不一样&ndash;&gt;
        <a href="javascript:void(0);"><img src="../assets/n-home.png" alt=""></a>
      </li>
      <li>
        &lt;!&ndash;注意  图片在HTML这页与在css那页的存储位置不一样&ndash;&gt;
        <a href="javascript:void(0);"><img src="../assets/n-cart.png" alt=""></a>
      </li>
      <li>
        &lt;!&ndash;注意  图片在HTML这页与在css那页的存储位置不一样&ndash;&gt;
        <a href="javascript:void(0);"><img src="../assets/n-catergry.png" alt=""></a>
      </li>
      <li>
        &lt;!&ndash;注意  图片在HTML这页与在css那页的存储位置不一样&ndash;&gt;
        <a href="javascript:void(0);"><img src="../assets/n-find.png" alt=""></a>
      </li>
      <li>
        &lt;!&ndash;注意  图片在HTML这页与在css那页的存储位置不一样&ndash;&gt;
        <a href="javascript:void(0);"><img src="../assets/n-me.png" alt=""></a>
      </li>
    </ul>
  </div>-->

</template>
<script type="text/javascript">

  export default {
    name:'header',
    data(){
      return {
        author:"农大宽",
//        my:'对于孩子来说 我是一个很不好的父亲',
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
  /*@import url('../../build/style/base.css');*/
  @import "header.less";
  /*.son{*/
    /*!*width: 100%;*!*/
    /*!*height: 300px;*!*/
    /*text-align: center;*/
    /*background: lightblue;*/
  /*}*/
  /*img{*/
    /*width: 50%;*/
  /*}*/

 /* !*************************底部tabBabe***************************!
  .jd_tabBab{
    width:100%;
    height: 60px;
    !*不能设置相对定位与绝对定位只有定死了才可以不能往上面移动*!
    position: fixed;
    bottom:0;
    left:0;
    !*box-shadow: 2px 0 0 0;*!
    !*为了兼容谷歌浏览器*!
    !*导航条上面的阴影 不用设border也可以在这里的需求就是不用border*!
    -webkit-box-shadow:0 -2px 0 #ccc;
    box-shadow:0 -2px 0 #ccc;
  }
  .jd_tabBab ul{
    width:100%;
    !*不用设高度也可以*!
    !*height:60px;*!
    !**!
    !*text-align: center;*!
  }
  .jd_tabBab ul li{
    float: left;
    width:20%;
    height:100%;
    !*在这里设置img居中在a没有设置为块级元素的情况下*!
    text-align: center
  }
  .jd_tabBab ul li a{
    !*设置 a为块级元素  后,可以设置img居中*!
    display: block;
    width: 100%;
    height:100%;
    !*text-align: center;*!
  }
  .jd_tabBab ul li a img{
    width: 80px;
    height:60px;
  }*/



</style>

