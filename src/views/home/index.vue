<template>
  <div>
    <xt-header :navType='1'></xt-header>
    <div class="content-wrapper">
      <h-banner></h-banner>
      <h-service></h-service>
      <h-brief></h-brief>
      <h-ser-adver></h-ser-adver>
      <h-case></h-case>
    </div>
    <xt-footer></xt-footer>
  </div>
</template>


<script>
import xtHeader from "@/components/xtHeader";
import xtFooter from "@/components/xtFooter";
import HBanner from "./components/HBanner.vue";
import HService from "./components/HService";
import HBrief from "./components/HBrief";
import HSerAdver from "./components/HSerAdver";
import HCase from "./components/HCase";
import * as home from "../../api/home";

export default {
  components: {
    HBanner,
    HService,
    HBrief,
    HSerAdver,
    HCase,
    xtHeader,
    xtFooter
  },
  data() {
    return {
      bannerH: new Number()
    };
  },
  beforeMount() {
    this.getPageData();
  },
  methods: {
    getPageData() {
      home.getAdverts().then(res => {});
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./css.less");
</style>

