<template>
  <div>
    <div id='detail'></div>

  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'

  export default {
    data () {
      return {
        detail: '',
        id: null,
        API_PROXY: 'https://bird.ioliu.cn/v1/?url='
      }
    },
    methods: {
      getNewsDetail () {
        axios.get(`${this.API_PROXY}https://news-at.zhihu.com/api/4/news/${this.id}`, {}).then((res) => {
          console.log(res)
          document.getElementById('detail').innerHTML = res.data.body
        }, function (error) {
          console.log(error)
        })
      }
    },
    mounted () {
      this.id = this.$route.params.id
      this.getNewsDetail() // 获取服务详情
    }
  }
</script>

<style>
  .answer {
    width: 600px;
  }
  .author {
    display: block;
    line-height: 40px;
  }
  .content p {
    margin-top: 20px;
    line-height: 40px;
  }
  .content ul li {
    margin-top: 20px;
    line-height: 40px;
  }

</style>
