<style scoped>
</style>
<template>
  <div style='margin: 0 auto'>
    <div style="margin-bottom: 20px;text-align: right">
      <DatePicker
        type="date"
        placeholder="选择日期"
        format="yyyyMMdd"
        @on-change='getBeforeNews'></DatePicker>
    </div>

    <h2 style="margin-bottom: 20px;">{{date}}新闻</h2>
    <Card style="width:600px;height: 260px;margin-bottom: 20px" v-for="item in newsArr.stories">
      <router-link :to="{ path:`/newsDeatil/${item.id}` }">
        <div style="text-align:center">
          <img :src=item.images alt="" style="border-radius: 50%;margin-bottom: 20px">
          <h3>{{item.title}}</h3>
        </div>
      </router-link>
    </Card>
  </div>
</template>
<script>
  import axios from 'axios'
  //  import { getNews} from '../../models/api'

  export default {
    data () {
      return {
        newsArr: [],
        API_PROXY: 'https://bird.ioliu.cn/v1/?url=',
        date: '今日'
      }
    },
    methods: {
      getNews () {
        axios.get(`${this.API_PROXY}https://news-at.zhihu.com/api/4/news/latest`, {}).then((res) => {
          this.newsArr = res.data
        }, function (error) {
          console.log(error)
        })
      },
      getBeforeNews (date) {
        if (date) {
          this.date = date
          axios.get(`${this.API_PROXY}https://news-at.zhihu.com/api/4/news/before/${date}`, {}).then((res) => {
            this.newsArr = res.data
          }, function (error) {
            console.log(error)
          })
        } else {
          this.date = '今日'
          this.getNews() // 获取新新闻
        }
      }
    },
    mounted () {
      this.getNews() // 获取新新闻
    }
  }
</script>