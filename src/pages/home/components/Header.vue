<template>
    <div class="header">
        <div class="head-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="head-input">
            <span class="iconfont">&#xe632;</span>
            内容
            </div>
        <router-link to="/city">
            <div class="head-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe671;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'HomeHeader',
        computed: {
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display flex
        height $headerHeight
        line-height $headerHeight
        background $bgColor
        color #fff
        .head-left
            width .8rem
            float left
            .back-icon
                font-size .26rem
                text-align center
        .head-input
            flex 1
            height .62rem
            line-height .62rem
            margin-top .12rem
            padding 0 .2rem 0 .2rem
            background #fff
            border-radius .1rem
            color #ccc
        .head-right
            min-width 1.04rem
            padding 0 .1rem 0 .1rem
            box-sizing border-box
            float right
            text-align center
            color #fff
            .arrow-icon
                font-size .28rem
</style>
