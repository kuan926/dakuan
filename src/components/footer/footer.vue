

<template>
  <div class="footer" >
    <!--<p>我就是康 脚下的路</p>-->
    <!--<router-view clas="view"></router-view>-->
    <div class="nav">
      <ul>
        <li>
          <router-link class="nav-item" to="/langren">
            <!--狼人杀-->
            <img src="../../assets/n-home.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/sanguo">
            <!--三国杀-->
            <img src="../../assets/n-cart.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/yingxiong">
            <!--英雄杀-->
            <img src="../../assets/n-catergry.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/find">
            <!--钱包-->
            <img src="../../assets/n-find.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/me">
            <!--我的-->
            <img src="../../assets/n-me.png" alt="">

          </router-link>
        </li>

      </ul>




    </div>
  </div>
</template>

<script>
  export default { //输出
    name: 'footer',
    data(){
      return{
//        kuan:'我就是农大宽  是这个家的男主人  我是这里footer 的固定 ',
//        header:'我是固定的头部'

      }

    },
  }
</script>

<style scoped>
 @import "footer.less";
</style>
