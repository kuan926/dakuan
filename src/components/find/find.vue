<template>
  <div class="box">
    <section class="langren_header">
      <div style="font-size: 30px">{{fir}}</div>
      <img src="../../assets/n-home.png" alt="">
      <img src="../../assets/n-home.png" alt="">
      <img src="../../assets/n-home.png" alt="">
      <p>{{sx}}</p>
    </section>
    <section class="langren_content"></section>
    <section class="langren_footer"></section>
    <p>{{kuan}}</p>
    <p>{{header}}</p>
    <ul>
      <li v-for="item in items">
        name:{{item.name}},
        age:{{item.age}},
        sex:{{item.sex}},
        height:{{item.height}}
      </li>
    </ul>
  </div>

</template>
<script>
  export default { //输出
//    name: 'footer',
    data(){
      return{
        fir:'我是 发现  善良  真诚  信念  职责 执着 热爱 ',
          sx:'我叫农大宽  我来了',

       kuan:'发现页面',
        header:'其实还是很简单的',
        /*items:[ {
         name: 'Dale',
         age: 3,
         sex: 'male',
         height: 170
         }, {
         name: 'Dale',
         age: 4,
         sex: 'male',
         height: 170
         }, {
         name: 'Dale',
         age: 5,
         sex: 'male',
         height: 170
         }, {
         name: '康',
         age: 6,
         sex: 'male',
         height: 170
         }, {
         name: '宽',
         age: 7,
         sex: 'male',
         height: 170
         }]*/
      }

    },
  }
</script>
<style scoped>
  @import "find.less";
</style>
