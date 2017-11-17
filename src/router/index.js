import Vue from 'vue'  // 输入 vue
import Router from 'vue-router'  //输入 vue-router 文件
import Hello from '@/components/Hello'   //输入 Hello 文件
import kuan from '@/components/kuan'   //输入 kuan 文件
import xuan from '@/components/xuan'   //输入 xuan文件
//import footer from '@/components/footer'   //输入 Hello 文件
import langren from '@/components/langren/langren'   //引入 langren.vue  文件  的页面
import header from '@/components/header/header'   //引入 header.vue  文件  的页面
import sanguo from '@/components/sanguo/sanguo'   //引入 sanguo.vue  文件  的页面
import yingxiong from '@/components/yingxiong/yingxiong'   //引入 sanguo.vue  文件  的页面
import find from '@/components/find/find'   //引入 find.vue  文件  的页面
import me from '@/components/me/me'   //引入 find.vue  文件  的页面

//  这里 可以实现  点击 对应的 route-link 标签 了以后 ; 跳转到对应的页面
Vue.use(Router)  // 使用 路由 实现 跳转


export default new Router({ //输出
    mode: 'history',
  routes: [//路由  路径   判断根目录下  / 就是根目录
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sanguo',
      name: 'sanguo',
      component: sanguo
    },
    {
      path: '/kuan',  //说明
      //name: 'Hello',
      component: kuan
    },
      {
          path: '/xuan',  //说明
          //name: 'Hello',
          component: xuan
      },
    {
      path: '/langren',  //说明
      name: 'footer',
      component: langren
    },
    {
      path: '/header',  //说明
      name: 'header',
      component: header
    },
    {
      path: '/yingxiong',  //说明
      name: 'yingxiong',
      component: yingxiong
    },
    {
      path: '/find',  //说明
      name: 'find',
      component: find
    },
    {
      path: '/me',  //说明
      name: '我的',
      component: me
    }

  ]
})
