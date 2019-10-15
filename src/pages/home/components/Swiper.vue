<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
         </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/3e/52e1824f1ace7202.jpg_750x200_ac90db3f.jpg'
                }, {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/b1/5fb695dd812fdc02.jpg_750x200_6f896d28.jpg'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped >
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 26.666666%
        background #eee
        .swiper-img
            width 100%
</style>
