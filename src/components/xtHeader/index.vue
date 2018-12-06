<template>
    <div class="header" :class="{current:scrollCurrent}">
        <div class="container">
            <div class="clear">
                <div class="left logo-wrapper"><img :src="require('../../../static/images/logo.png')"></div>
                <div class="right nav">
                    <a href="" class="current">首页</a>
                    <a href="">企业服务</a>
                    <a href="">商务合作</a>
                    <a href="">企业文化</a>
                    <a href="">加入我们</a>
                </div>
            </div>
        </div>

        <div class="backTop" :class="{current:scrollCurrent}" @click="backTop">返回顶部</div>
    </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  data() {
    return {
      scrollCurrent: false
    };
  },

  methods: {
    backTop() {
        // document.documentElement.scrollTop-=i;
        // if (document.documentElement.scrollTop>0) {
        //     var c=setTimeout(()=>this.backTop(i),16);
        // }else {
        //     clearTimeout(c);
        // }

        document.documentElement.scrollTop=0;
    },
    scrollToTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const wH =
        document.documentElement.clientHeight || document.body.clientHeight;
      this.scrollCurrent = scrollTop > wH;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>


<style lang="less" scoped>
@import url("./css.less");
</style>
