<template>
  <div class="content-wrapper">
    <h-banner></h-banner>
    <h-service></h-service>
    <h-brief></h-brief>
    <h-ser-adver></h-ser-adver>
    <h-case></h-case>
  </div>
</template>


<script> 
import HBanner from './components/HBanner.vue';
import HService from './components/HService';
import HBrief from './components/HBrief';
import HSerAdver from './components/HSerAdver';
import HCase from './components/HCase';
export default {
  components: {
    HBanner,
    HService,
    HBrief,
    HSerAdver,
    HCase
  },
  data () {
    return {
      bannerH:new Number()
    }
  },
  beforeMount () {
    
  }
};
</script>

<style lang="less" scoped>
@import url('./css.less');
</style>

