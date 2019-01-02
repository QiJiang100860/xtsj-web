<template>
    <swiper :options="swiperOption">


        <swiper-slide v-for="(item,idx) in data" :key="idx">
            <div class="container"><div class="img" :style="{height:bannerH+'px','background-image':'url('+item.advertPicUrl+')'}"></div></div>
        </swiper-slide>


        <!-- <swiper-slide>
            <div class="container"><div class="img" :style="{height:bannerH+'px'}">2</div></div>
        </swiper-slide>

        <swiper-slide>
            <div class="container"><div class="img" :style="{height:bannerH+'px'}">3</div></div>
        </swiper-slide>

        <swiper-slide>
            <div class="container"><div class="img" :style="{height:bannerH+'px'}">4</div></div>
        </swiper-slide> -->

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: { swiper, swiperSlide },
  props: ['data'],
  data() {
    return {
      bannerH: new Number(),
      swiperOption: {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
        }
      }
    };
  },
  beforeMount() {
    const wH =
      document.documentElement.clientHeight || document.body.clientHeight;
    this.bannerH = wH;
  }
};
</script>

<style lang="less" scoped>
.img {
  height: 100%;
  width: 1920px;
  // background: #ff0000;
  margin-left: -352px;
  background-size:cover;
  background-position:center center;
  background-repeat:no-repeat;   
}
</style>


