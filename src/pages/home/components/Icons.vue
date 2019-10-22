<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div
                    class="icon"
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon-img-box">
                        <img class="icon-img" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return {
                iconList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '热门景点'
                }, {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                    desc: '泡温泉'
                }, {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '热门景点'
                }, {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                    desc: '泡温泉'
                }, {
                    id: '0005',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '热门景点'
                }, {
                    id: '0006',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                    desc: '泡温泉'
                }, {
                    id: '0007',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '热门景点'
                }, {
                    id: '0008',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                    desc: '泡温泉'
                }, {
                    id: '0009',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '热门景点'
                }]
            }
        },
        computed: {
            pages () {
                const pages = []
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'

    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icon
        float left
        width 25%
        height 0
        padding-bottom 25%
        position relative
        .icon-img-box
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            padding 0.15rem
            box-sizing border-box
            .icon-img
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color $dackTextColor
            padding 0 .2rem 0 .2rem
            box-sizing border-box
            ellipsis()
</style>
