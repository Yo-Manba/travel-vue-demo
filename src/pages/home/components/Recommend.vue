<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-titlt">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommed',
        data () {
            return {
                recommendList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
                    title: '千岛湖天迹热气球',
                    desc: '淳安县千岛湖镇坪山工业园区天鹅山部速度快回复花见花开爱客家话'
                }, {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
                    title: '千岛湖天迹热气球',
                    desc: '淳安县千岛湖镇坪山工业园区天鹅山部速度快回复花见花开爱客家话'
                }, {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
                    title: '千岛湖天迹热气球',
                    desc: '淳安县千岛湖镇坪山工业园区天鹅山部速度快回复花见花开爱客家话'
                }, {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
                    title: '千岛湖天迹热气球',
                    desc: '淳安县千岛湖镇坪山工业园区天鹅山部速度快回复花见花开爱客家话'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'

    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-titlt
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height .3rem
                margin-top .16rem
                background #ff9300
                padding .15rem
                border-radius .06rem
                color #fff
                font-size .28rem
</style>
