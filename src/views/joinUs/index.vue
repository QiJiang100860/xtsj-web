<template>
  <div>
    <xt-header :navType="5"></xt-header>
    <div class="content-wrapper">
      <div class="container img">
        <img :src="joinPic" alt>
      </div>
    </div>

    <jobs :data="joinData"></jobs>

    <xt-footer></xt-footer>
  </div>
</template>


<script>
import xtHeader from "@/components/xtHeader";
import xtFooter from "@/components/xtFooter";

import Jobs from "./components/jobs";

import {getJoinUs} from "../../api/joinUs.js"
export default {
  data(){
    return {
      joinPic:'',
      joinData:null,
    }
  },
  beforeMount(){
    getJoinUs().then(res=>{
      this.joinData = res.data.juList
      this.joinPic = res.data.joinUsPic
    })
  },
  components: {
    xtHeader,
    xtFooter,
    Jobs
  }
};
</script>



<style lang="less" scoped>
.img {
  img {
    display: block;
    width: 1920px;
    margin-left: -360px;
    height: 374px;
  }
}
</style>
