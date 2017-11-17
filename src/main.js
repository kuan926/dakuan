// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  //输入vue
import App from './App'  //输入 App 文件
import router from './router'  //输入 router 文件  该文件里有index.js 文件
//import footer from './components/footer'


Vue.config.productionTip = false    //  productionTip  生产技巧

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App

  }
})



/*
var myHeader = {
  template:'<p>我就说  我就是头部</p>'
};
new Vue({
  el:'#app',
  data:{
    word:''
  },
  components:{
    'my-header': myHeader
  }
})
*/

