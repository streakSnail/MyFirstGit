<template>
  <div class="hello">
    <input v-model="str">
    <button @click="setRequest">{{ msg }}</button>
    <div>{{num}}</div>
    <sonWorld></sonWorld>
  </div>
</template>

<script>
// import axios from 'api/index'
import sonWorld from './sonWorld'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 0,
      str: 123
    }
  },
  components: {
    sonWorld
  },
  computed: {
    // num: () => {
    //   return this.$store.state.count
    // }
  },
  created () {
    this.num = this.$store.state.count
  },
  methods: {
    setRequest () {
      debugger
      // this.$store.dispatch('setNumber', this.str)
      this.$store.commit('increment', this.str)
      this.num = this.$store.state.count
      // let data = {
      //   year: '2019',
      //   sqlKey: 'FinanceSelect.sjmx',
      //   conversion: {
      //     id: 10000,
      //     text: '万元'
      //   },
      //   period: '201909'
      // }
      // axios({
      //   url: '/api/finace_select/query',
      //   method: 'post',
      //   data: data
      // }).then(res => {
      //   console.log(res)
      // }, err => {
      //   console.log(err)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
