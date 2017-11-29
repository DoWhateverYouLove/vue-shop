/**
* Created by handsome boy Mr.caiwe on 2017/11/29.
*/
<template>
    <div class="content">
      <nav-header></nav-header>
      <nav-bread></nav-bread>
      <div class="accessory-result-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">排序:</span>
            <a href="javascript:void(0)" class="default cur">默认</a>
            <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby">筛选</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter" id="filter">
              <dl class="filter-price">
                <dt>价格区间:</dt>
                <dd><a href="javascript:void(0)">选择价格</a></dd>
                <dd>
                  <a href="javascript:void(0)">￥ 0 - 100 元</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodslist">
                    <div class="pic">
                      <a href="#"><img v-bind:src="'/static/'+item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
    import './../assets/css/base.css'
    import './../assets/css/nav-header.css'
    import './../assets/css/nav-bread.css'
    import './../assets/css/nav-footer.css'
    import './../assets/css/goods-list.css'
    import NavHeader from './../components/NavHeader.vue'
    import NavFooter from './../components/NavFooter.vue'
    import NavBread from './../components/NavBread.vue'
    export default {
        data() {
            return {
              goodslist:[{
                "productId":"10001",
                "productName":"小米空气净化器 2",
                "salePrice":"699",
                "productImage":"小米空气净化器 2.jpg"
              },
                {
                  "productId":"10002",
                  "productName":"米家空气净化器Pro",
                  "salePrice":"1499",
                  "productImage":"米家空气净化器Pro.jpg"
                },
                {
                  "productId":"10003",
                  "productName":"米家PM2.5检测仪",
                  "salePrice":"399",
                  "productImage":"米家PM2.5检测仪.jpg"
                },
                {
                  "productId":"10004",
                  "productName":"九号平衡车",
                  "salePrice":"1999",
                  "productImage":"九号平衡车.jpg"
                }]
            }
        },
        components: {
          'nav-header': NavHeader,
          'nav-footer': NavFooter,
          'nav-bread': NavBread
        },
        methods: {}
    }
</script>

<style scoped>
</style>
