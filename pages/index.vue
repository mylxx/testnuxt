<template>
  <div>首页</div>
</template>

<script>
import { getNewsList } from '@/util/api/user.js'
export default {
  props: {},
  created() {},
  data() {
    return {
      dataSource: []
    }
  },
  computed: {},
  mounted() {
  },
  async asyncData(context) {
    getNewsList({
      cat_id: 264,
      data_list: 'list',
      append: 'location' //位置
    }).then((res) => {
      // console.log(res.data.list)
    })
  },
  watch: {},
  methods: {},
  components: {}
}
</script>

<style lang='scss' scoped>
</style>
