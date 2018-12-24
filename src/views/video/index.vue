<template>
  <div class="video-wrapper" :style="{height:_WHEIGHT+'px'}">
    <video
      id="startVideo"
      autoplay="autoplay"
      :src="vedioUrl"
    ></video>

    <div class="video-bg"></div>
  </div>
</template>


<script>
import {getPageVideo} from "../../api/public.js"
export default {
  data() {
    return {
      _WHEIGHT: new Number(),
      vedioUrl:""
    };
  },
  beforeMount() {
    let _height = document.documentElement.clientHeight;
    this._WHEIGHT = _height;

    getPageVideo().then(res=>{
      this.vedioUrl = res.data.advertPicUrl
    })
  },
  mounted() {
    this.handlePlayEnd();
  },
  methods: {
    handlePlayEnd() {
      let videoEle = document.getElementById("startVideo");
      let height = videoEle.getBoundingClientRect().height;
      videoEle.style.marginTop = -(height - this._WHEIGHT) / 2 + "px";

      videoEle.addEventListener("canplaythrough", () => {
      });

      videoEle.addEventListener(
        "ended",
        () => {
          this.$router.push("home");
        },
        false
      );
    }
  }
};
</script>



<style lang="less" scoped>
.video-wrapper {
  width: 100%;
  overflow: hidden;
  video {
    width: 100%;
  }

  .video-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(#000, 0.5);
  }
}
</style>

