<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImg="gallaryImg"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :categoryList="categoryList" ></detail-list>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImg: [],
                categoryList: []
            }
        },
        mounted () {
            this.getDetailInfo()
        },
        methods: {
            getDetailInfo () {
                axios.get('/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.handleGetdataSucc)
            },
            handleGetdataSucc (res) {
                console.log(res)
                if (res.data.ret && res.data.data) {
                    var data = res.data.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImg = data.gallaryImg
                    this.categoryList = data.categoryList
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>
