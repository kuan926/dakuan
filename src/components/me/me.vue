<template>
  <div class="box">

    <section class="langren_header">
      <div style="font-size: 30px">{{fir}}</div>
      <img src="../../assets/17.9.17.jpg" alt="">
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
        fir:'我是=======   就是  =======我的',
        kuan:'我就是农大宽  是这个家的男主人  我是这里footer 的固定 ',
        header:'毛线 我就是 下面的 左边 算起 第一个 ',
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
  @import "me.less";
</style>
