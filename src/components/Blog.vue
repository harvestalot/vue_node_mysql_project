<template>
  <div class="">
    <el-input v-model="inpContent"></el-input>
    <el-button type="primary" @click="getValue">获取数据</el-button>
    <el-button type="primary" @click="setValue">添加数据</el-button>
    <el-button type="primary" @click="updateValue">修改数据</el-button>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      inpContent: 'Blog'
    }
  },
  methods: {
      getValue() {
        // axios.get('/', {params: ''})
        this.$http.get('/api/api/getValue', {
          params: {id: 1}
        }).then( (res) => {
          console.log(res);
          // this.inpContent = res.data[0].name;
        })
      },
      setValue() {
        // axios.post('/', {})
        this.$http.post('/api/api/setValue', {
          login_name: "ceshi", password: "xinmima"
        }).then( (res) => {
          console.log('res', res);
        })
      },
      updateValue() {
        this.$http.post('/api/api/updateValue', {
          id: 3,
          login_name:"newloginname"
        }).then( (res) => {
          console.log(res);
          // this.inpContent = res.data[0].name;
        })
      },
  }
}
</script>
