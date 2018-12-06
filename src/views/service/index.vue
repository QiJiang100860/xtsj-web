<template>
    <div class="content-wrapper">
        <div class="container img">
            <img :src="require('../../../static/images/service-bg.png')" alt="">
        </div>
        <s-item></s-item>
    </div>
</template>

<script>
import SItem from "./components/SItem";
export default {
  data() {
    return {};
  },
  components: {
    SItem
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
