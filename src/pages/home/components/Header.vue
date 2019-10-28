<template>
    <div class="header">
        <div class="head-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="head-input">
            <span class="iconfont">&#xe632;</span>
            内容
            </div>
        <div class="head-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe671;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props: {
            city: String
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display flex
        height .86rem
        line-height .86rem
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
            height .64rem
            line-height .64rem
            margin-top .12rem
            padding 0 .2rem 0 .2rem
            background #fff
            border-radius .1rem
            color #ccc
        .head-right
            width 1.3rem
            float right
            text-align center
            .arrow-icon
                font-size .28rem
</style>
