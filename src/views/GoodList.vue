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
                <dd><a href="javascript:void(0)" @click="setPriceFilter('all')" :class="{'cur':priceCheked=='all'}">选择价格</a></dd>
                <dd v-for="(item,index) in priceFilter">
                  <a href="javascript:void(0)" @click="setPriceFilter(index)" :class="{'cur':priceCheked==index}">￥ {{item.startPrice}} - {{item.endPrice}} 元</a>
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
    import axios from 'axios'
    export default {
        data() {
            return {
              goodslist:[],
              priceFilter:[{
                startPrice:'0.00',
                endPrice:'1000.00'
              },
                {
                  startPrice:'1000.00',
                  endPrice:'2000.00'
                },
                {
                  startPrice:'2000.00',
                  endPrice:'3000.00'
                },
                {
                  startPrice:'3000.00',
                  endPrice:'4000.00'
                },
                {
                  startPrice:'4000.00',
                  endPrice:'5000.00'
                },
                {
                  startPrice:'5000.00',
                  endPrice:'6000.00'
                }],
              priceCheked:'all'
            }
        },
        mounted(){
            this.getGoodList();
        },
        components: {
            'nav-header': NavHeader,
            'nav-footer': NavFooter,
            'nav-bread': NavBread
        },
        methods: {
            getGoodList(){
                axios.get('/goods').then((result)=>{
                  const res = result.data;
    //              console.log(res);
                  this.goodslist = res.result;
              })
          },
          setPriceFilter(index){
              this.priceCheked = index;
          }
        }
    }
</script>

<style scoped>
</style>
