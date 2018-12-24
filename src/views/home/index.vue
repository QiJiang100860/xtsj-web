<template>
  <div>
    <xt-header :navType='1'></xt-header>
    <div class="content-wrapper">
      <h-banner :data="banner"></h-banner>
      <h-service :data="service"></h-service>
      <h-brief :data="companyBrief"></h-brief>
      <h-ser-adver :data="advange"></h-ser-adver>
      <h-case :data="caseData"></h-case>
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
      bannerH: new Number(),

      banner:null,
      service:null,
      companyBrief:{
        advertTitle:"",
        advertPicUrl:""
      },
      advange:null,
      caseData:null,
    };
  },
  beforeMount() {
    this.getPageData();
  },
  methods: {
    getPageData() {
      home.getAdverts().then(res => {
        this.banner = res.data.banner;
        this.service = res.data.service;
        this.companyBrief = res.data.companyBrief[0];
        this.advange = res.data.advange;
        this.caseData = res.data.case
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./css.less");
</style>

