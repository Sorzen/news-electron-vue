<template>
  <div id='type'>
      <Row style="background:#eee;padding:20px">
        <Col span="8" v-for="item in type">
        <router-link :to="{ path:`/typeDetail/${item.id}` }">
          <Card
            style="margin:0 10px 20px;height: 70%"
            :key="index">
            <div style='text-align: center'>
              <Avatar :src=item.thumbnail />
              <h3>{{item.name}}</h3>
            </div>
          </Card>
          </router-link>
        </Col>
      </Row>
  </div>

</template>

<script type="text/ecmascript-6">
  import axios from 'axios'

  export default {
    data () {
      return {
        type: '',
        typeRemain: [],
        API_PROXY: 'https://bird.ioliu.cn/v1/?url='
      }
    },
    methods: {
      getNewsDetail () {
        axios.get(`${this.API_PROXY}https://news-at.zhihu.com/api/4/themes`, {}).then((res) => {
          this.type = res.data.others
          this.typeRemain = res.data
        }, function (error) {
          console.log(error)
        })
      },
      handleReachBottom () {
        return new Promise(resolve => {
          this.type = this.typeRemain.others.splice(0, 11)
          resolve()
        })
      }
    },
    mounted () {
      this.getNewsDetail()
    }
  }
</script>

<style>
  #type {
    width: 600px;
    margin: 20px auto;
  }
</style>
