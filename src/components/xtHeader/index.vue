<template>
    <div class="header" :class="{current:scrollCurrent}">
        <div class="container">
            <div class="clear">
                <div class="left logo-wrapper" @click="toIndex"><img :src="require('../../../static/images/logo.png')"></div>
                <div class="right nav">
                    <a data-link='home' @click="handleRouter" :class="{current:navType==1}">首页</a>
                    <a data-link='service' @click="handleRouter" :class="{current:navType==2}">企业服务</a>
                    <a data-link='cooption' @click="handleRouter" :class="{current:navType==3}">商务合作</a>
                    <a data-link='culture' @click="handleRouter" :class="{current:navType==4}">企业文化</a>
                    <a data-link='joinUs' @click="handleRouter" :class="{current:navType==5}">加入我们</a>
                </div>
            </div>
        </div>

        <!-- <div class="backTop" :class="{current:scrollCurrent}" @click="backTop">返回顶部</div> -->
    </div>
</template>

<script>
export default {
  props: ['navType'],
  data() {
    return {
      scrollCurrent: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  

  beforeMount () {
    
  },

  methods: {
    // backTop() {
        
    // },
    scrollToTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const wH =
        document.documentElement.clientHeight || document.body.clientHeight;
      this.scrollCurrent = scrollTop > wH;
    },
    handleRouter(e){
      const path = e.target.dataset.link;
      this.$router.push(path)
    },

    toIndex(){
      this.$router.push('home')
    }
  },

  watch: {

  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>


<style lang="less" scoped>
@import url("./css.less");
</style>
