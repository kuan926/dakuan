<template>
  <div class="box">
    <section class="langren_header">
      <div style="font-size: 30px">{{fir}}</div>
      <img src="../../assets/17.9.jpg" alt="">
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
  <!--<div class="jd_viewport">
    &lt;!&ndash;导航搜索头部&ndash;&gt;
    <div class="jd_header">
      <div class="jd_topbar" id="jd_topbar">
        <form action="">
          <span class="icon_logo"></span>
          <span class="icon_search"></span>
          &lt;!&ndash;type设置成search来修改弹出的键盘右下角的btn显示的内容&ndash;&gt;
          <input type="text" placeholder="我是占位文字">
        </form>
        <a href="">登录</a>
      </div>
    </div>
    &lt;!&ndash;banner图&ndash;&gt;
    <div class="jd_banner" id="jd_banner">
      <ul class="clearfix">
        <li><a href="javascript:void (0);"><img src="images/l8.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l1.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l2.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l3.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l4.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l5.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l6.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l7.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l8.jpg" alt=""></a></li>
        <li><a href="javascript:void (0);"><img src="images/l1.jpg" alt=""></a></li>
      </ul>
      <ol class="clearfix">
        <li class="current"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
    &lt;!&ndash;分类索引&ndash;&gt;
    <div class="jd_categories">
      <ul class="clearfix">
        <li>
          <a href="">
            <img src="images/nav1.png" alt="">
            <p>京东超市</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav2.png" alt="">
            <p>全球购</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav3.png" alt="">
            <p>服装城</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav4.png" alt="">
            <p>京东生鲜</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav5.png" alt="">
            <p>京东到家</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav6.png" alt="">
            <p>充值缴费</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav7.png" alt="">
            <p>领豆豆</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav8.png" alt="">
            <p>领券</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav9.png" alt="">
            <p>物流查询</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="images/nav10.png" alt="">
            <p>惠赚钱</p>
          </a>
        </li>
      </ul>
    </div>
    &lt;!&ndash;产品中心&ndash;&gt;
    <div class="jd_main">
      &lt;!&ndash;产品三部曲之一秒杀部分&ndash;&gt;
      <div class="jd_seckill">
        &lt;!&ndash;秒杀头部&ndash;&gt;
        <div class="seckill_header">
          <a href="" class="seckill_header_left" id="seckill_header_left">
            <img src="images/seckill-icon.png" alt="">
            <strong><em>12</em>点场</strong>
            <div class="seckill_timer">
              <div class="seckill_time light_border">
                <span class="time">0</span>
                <span class="time">0</span>
              </div>
              <span class="colon">:</span>
              <div class="seckill_time light_border">
                <span class="time">0</span>
                <span class="time">0</span>
              </div>
              <span class="colon">:</span>
              <div class="seckill_time light_border">
                <span class="time">0</span>
                <span class="time">0</span>
              </div>
            </div>
          </a>
          <a href="" class="seckill_header_right">贱货好货论文</a>
        </div>
        <div class="seckill_con">
          <ul class="clearfix">
            <li>
              <a href=""><img src="images/detail01.jpg" alt=""></a>
              <strong>¥1999</strong>
              <span>¥12099</span>
            </li>
            <li>
              <a href=""><img src="images/detail02.jpg" alt=""></a>
              <strong>¥999</strong>
              <span>¥1099</span>
            </li>
            <li>
              <a href=""><img src="images/detail03.jpg" alt=""></a>
              <strong>¥999</strong>
              <span>¥1099</span>
            </li>
          </ul>
        </div>
      </div>
      &lt;!&ndash;产品三部曲之2主题部分&ndash;&gt;
      <div class="jd_topics">
        <div class="jd_topic_products">
          <h3>京东乐购</h3>
          <div class="topic_con">
            <ul class="clearfix">
              <li class="fl half_w bdr"><a href="javascript:;"><img src="images/cp1.jpg" alt=""></a></li>
              <li class="fr half_w bdb"><a href="javascript:;"><img src="images/cp2.jpg" alt=""></a></li>
              <li class="fr half_w"><a href="javascript:;"><img src="images/cp3.jpg" alt=""></a></li>
            </ul>
          </div>
        </div>
        <div class="jd_topic_products">
          <h3>京东超市</h3>
          <div class="topic_con">
            <ul class="clearfix">
              <li class="fr half_w bdl"><a href="javascript:;"><img src="images/cp4.jpg" alt=""></a></li>
              <li class="fl half_w bdb"><a href="javascript:;"><img src="images/cp5.jpg" alt=""></a></li>
              <li class="fl half_w"><a href="javascript:;"><img src="images/cp6.jpg" alt=""></a></li>
            </ul>
          </div>
        </div>
        <div class="jd_topic_products">
          <h3>爱生活</h3>
          <div class="topic_con">
            <ul class="clearfix">
              <li class="fl half_w bdr"><a href="javascript:;"><img src="images/cp1.jpg" alt=""></a></li>
              <li class="fr half_w bdb"><a href="javascript:;"><img src="images/cp2.jpg" alt=""></a></li>
              <li class="fr half_w"><a href="javascript:;"><img src="images/cp3.jpg" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
      &lt;!&ndash;产品三部曲之三推荐部分推荐的单词是recommend &ndash;&gt;
      <div class="jd_recommond">
        &lt;!&ndash;推荐头部&ndash;&gt;
        <div class="recommond_header">
          <div class="recommond_header_con">
            <span>为您推荐</span>
          </div>
        </div>
        &lt;!&ndash;推荐内容&ndash;&gt;
        <div class="recommond_con">
          <ul class="clearfix">
            <li>
              <a href="">
                <img src="images/intro1.jpg" alt="">
                <span>这里是写产这里是写产品的描述内容这里是写产品的描述内容这里是写产品的描述内容这里是写产品的描述内容品的描述内容</span>
              </a>
              <div class="recommend_con_bottom">
                <strong class="pro_price">¥999</strong>
                <a href="" class="find_like light_border" role="button">找相似</a>
              </div>
            </li>
            <li>
              <a href="">
                <img src="images/intro2.jpg" alt="">
                <span>这里是写产这里是写产品的描述内容这里是写产品的描述品的描述内容</span>
              </a>
              <div class="recommend_con_bottom">
                <strong class="pro_price">¥999</strong>
                <a href="" class="find_like light_border" role="button">找相似</a>
              </div>
            </li>
            <li>
              <a href="">
                <img src="images/intro3.jpg" alt="">
                <span>这里是写产品的描述内容</span>
              </a>
              <div class="recommend_con_bottom">
                <strong class="pro_price">¥999</strong>
                <a href="" class="find_like light_border" role="button">找相似</a>
              </div>
            </li>
            <li>
              <a href="">
                <img src="images/intro4.jpg" alt="">
                <span>这里是写产品的描述内容</span>
              </a>
              <div class="recommend_con_bottom">
                <strong class="pro_price">¥999</strong>
                <a href="" class="find_like light_border" role="button">找相似</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    &lt;!&ndash;tabBar底部&ndash;&gt;
    <div class="jd_footer">
      <ul class="clearfix">
        <li><a href=""><img src="images/a-home.png" alt=""></a></li>
        <li><a href=""><img src="images/n-catergry.png" alt=""></a></li>
        <li><a href=""><img src="images/n-find.png" alt=""></a></li>
        <li><a href=""><img src="images/n-cart.png" alt=""></a></li>
        <li><a href=""><img src="images/n-me.png" alt=""></a></li>
      </ul>
    </div>
  </div>
-->
</template>
<script>
  export default { //输出
//    name: 'footer',
    data(){
      return{
        fir:'我是分类页面哦  ------',
        kuan:'我就是农大宽  是这个家的男主人  我是这里footer 的固定 ',
        header:'毛线 我就是 下面的 左边 算起 第一个 ',
        items:[ {
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
        }]
      }

    },
  }
</script>
<style scoped>
  @import "yingxiong.less";
  @import "css/base.css";
  @import "css/index.css";
 /* @import url("css/base.css");
  @import url("css/index.css");*/
</style>
