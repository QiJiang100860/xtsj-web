<template>
  <div id="app">
    <xt-header></xt-header>
    <router-view/>
    <xt-footer></xt-footer>
  </div>
</template>

<script>
import xtHeader from "@/components/xtHeader";
import xtFooter from "@/components/xtFooter";
export default {
  name: 'App',
  components: {
    xtHeader,
    xtFooter
  }
}
</script>


<style lang="less">
  @import url('./assets/common.less');
</style>

