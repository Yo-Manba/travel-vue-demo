<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        data: function () {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop
        },
        computed: {
            letters () {
                var letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        methods: {
            handleLetterClick (e) {
                // console.log(e.target.innerText)
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart () {
                this.touchStatus = true
            },
            handleTouchMove (e) {
                if (this.touchStatus) {
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        var touchY = e.touches[0].clientY - 79
                        var index = Math.floor((touchY - this.startY) / 20)
                        if (index >= 0 && index < this.letters.length) {
                            console.log(index)
                            this.$emit('change', this.letters[index])
                        }
                    }, 16)
                }
            },
            handleTouchEnd () {
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>
