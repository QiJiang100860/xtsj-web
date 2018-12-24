<template>
  <div>
    <xt-header :navType="2"></xt-header>
    <div class="content-wrapper">
      <div class="container img">
        <img :src="require('../../../static/images/service-bg.png')" alt>
      </div>
      <s-item :data='serviveData'></s-item>
    </div>
    <xt-footer></xt-footer>
  </div>
</template>

<script>
import SItem from "./components/SItem";
import xtHeader from "@/components/xtHeader";
import xtFooter from "@/components/xtFooter";
import {getCompanys} from "../../api/service.js"
export default {
  data() {
    return {
      serviveData:null
    };
  },
  beforeMount(){
    getCompanys().then(res=>{
      this.serviveData = res.data
    })
  },
  components: {
    SItem,
    xtHeader,
    xtFooter
  }
};
</script>


<style lang="less" scoped>
.content-wrapper {
  // padding-bottom:20px; 
  .img {
    img {
      display: block;
      width: 1920px;
      margin-left: -360px;
    }
  }

}
</style>
