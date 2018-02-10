<style scoped>
</style>
<template>
  <div style='margin: 0 auto'>
    <h2 style="margin-bottom: 20px;">{{name}}</h2>
    <Card style="width:600px;height: 260px;margin-bottom: 20px" v-for="item in newsArr.stories">
      <router-link :to="{ path:`/newsDeatil/${item.id}` }">
        <div style="text-align:center">
          <img :src=item.images alt="" style="width: 150px;height: 150px;border-radius: 50%;border-style: none;margin-bottom: 20px">
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
        id: null,
        name: '新闻'
      }
    },
    methods: {
      getNews () {
        axios.get(`${this.API_PROXY}https://news-at.zhihu.com/api/4/theme/${this.id}`, {}).then((res) => {
          this.newsArr = res.data
          this.name = res.data.name
        }, function (error) {
          console.log(error)
        })
      }
    },
    mounted () {
      this.id = this.$route.params.id
      this.getNews() // 获取服务详情
    }
  }
</script>