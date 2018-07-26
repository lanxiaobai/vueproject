<template>
    <div class="index">
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(itemSon, index) in item.subcates" :key="itemSon.id">
                                                {{itemSon.title}}&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html" v-for="(itemSon, index) in item.subcates" :key="itemSon.id">{{itemSon.title}}</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>                               
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                       <el-carousel height="341px" indicator-position="outside">
                            <el-carousel-item v-for="(item, index) in sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="item.title">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div> 
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time|cutTime}}</span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in message" :key="item.level1cateid">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a href="/goods/43.html" v-for="(itemSon, index) in item.level2catelist" :key="index">{{itemSon.subcatetitle}}</a>   
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(itemSon, i) in item.datas" :key="itemSon.artID">
                            <a href="#/site/goodsinfo/87" class="">
                                <div class="img-box">
                                    <img v-lazy="itemSon.img_url" :src="itemSon.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{itemSon.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{itemSon.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{itemSon.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{itemSon.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
// 调接口
export default {
    data:function(){
        return {
            catelist:[],
            sliderlist:[],
            toplist:[],
            message:[]
        }
    },
    filters: {
        // 过滤器,过滤时间
        cutTime(value){
            return moment(value).format('YYYY-MM-DD');
        }
    },
    beforeMount () {
            // 获取顶部数据
            axios.get('http://47.106.148.205:8899/site/goods/gettopdata/goods')
            .then((response)=>{
                this.catelist=response.data.message.catelist;
                this.sliderlist=response.data.message.sliderlist;
                this.toplist=response.data.message.toplist;
                // console.log(this);
            })
            .catch((err)=>{
                // console.log(err);
            });


            // 获取底部数据
            axios.get('http://47.106.148.205:8899/site/goods/getgoodsgroup')
            .then((response)=>{
                console.log(response);
                this.message=response.data.message;
            })
            .catch((err)={

            })

        }
    
}
</script>
<style scoped>
    .el-carousel img {
            display: block;
            width: 100%;
            height: 100%;
        }
</style>


