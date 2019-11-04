<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg" />
            <div class="banner-info">
                <div class="banner-title">
                    北京海洋馆(AAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe61b;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary
            :imgs="imgs"
            v-show="showGallary"
            @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/Gallary'
    export default {
        name: 'DetailBanner',
        data () {
            return {
                showGallary: false,
                imgs: [
                    'http://img1.qunarzz.com/sight/p0/1908/a3/a37bdcae93140a30a3.img.jpg_r_800x800_e9d19d44.jpg',
                    'http://img1.qunarzz.com/sight/p0/1908/9a/9af8c997677a58b8a3.img.jpg_r_800x800_29817cac.jpg'
                ]
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallary = true
            },
            handleGallaryClose () {
                this.showGallary = false
            }
        },
        components: {
            CommonGallary
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                margin-top .14rem
                padding 0 .4rem
                height .32rem
                line-height .32rem
                font-size .24rem
                border-radius .2rem
                background rgba(0, 0, 0, 0.8)
                .banner-icon
                    font-size .24rem
</style>
