
<template lang="jade">
  #wrapper
    el-menu(default-active='1', mode='horizontal', @select='handleSelect')
      el-menu-item(index='1') 计划任务
      el-menu-item(index='2') 首页
      el-menu-item(index='3') 计划列表
    .container
      .col-sm-3
        sidebar
      .col-sm-9
        router-view
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'app',
  components: {
    Sidebar
  },
  methods: {
    handleSelect(key, keyPath) {
      let self = this;
      switch (key) {
        case '1':
        case '2':
          break;
        case '3':
          self.$parent.$router.push('/time-entries');
          break;
      }
    },
  },
}
</script>
