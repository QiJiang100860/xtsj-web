<template>
  <div>
    <xt-header :navType="5"></xt-header>
    <div class="content-wrapper">
      <div class="container img">
        <img :src="require('../../../static/images/service-bg.png')" alt>
      </div>

      
    </div>
    <xt-footer></xt-footer>
  </div>
</template>


<script>
import xtHeader from "@/components/xtHeader";
import xtFooter from "@/components/xtFooter";
export default {
  components: {
    xtHeader,
    xtFooter
  }
};
</script>



<style lang="less" scoped>
.img {
  img {
    display: block;
    width: 1920px;
    margin-left: -360px;
  }
}
</style>
