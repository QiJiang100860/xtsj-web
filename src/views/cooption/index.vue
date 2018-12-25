<template>
  <div>
    <xt-header :navType="3"></xt-header>
    <div class="content-wrapper">
      <div class="container">
        <div class="container img">
          <img :src="pageData.commercePic" alt>
        </div>
      </div>

      <div class="clear">
        <div class="left cooption-left">
          <div class="right cooption-infro">
            <div class="english-letter">Business cooperation</div>
            <div class="chinese-letter">商务合作</div>
            <div class="under-line"></div>

            <div class="email-wrapper clear">
              <img class="left" :src="require('../../../static/images/icon_email.png')" alt>
              <p class="left">{{pageData.commerceEmail}}</p>
            </div>

            <div class="email-wrapper clear">
              <img class="left" :src="require('../../../static/images/icon_phone.png')" alt>
              <p class="left">{{pageData.commerceMobile}}</p>
            </div>

            <div class="ewm-wrapper">
              <img class="left" :src="pageData.commerceQrCodePic" alt>
            </div>
          </div>
        </div>

        <div class="right cooption-right" id="mapContainer"></div>
      </div>
    </div>
    <xt-footer></xt-footer>
  </div>
</template>


<script>
import xtHeader from "@/components/xtHeader";
import xtFooter from "@/components/xtFooter";
import { getCommerces } from "../../api/cooption";

import AMap from "AMap";

export default {
  components: {
    xtHeader,
    xtFooter
  },
  data() {
    return {
      pageData: {
        commerceEmail: "",
        commerceId: "",
        commerceMobile: "",
        commercePic: "",
        commerceQrCodePic: ""
      },
      potion: [108.885003,34.223045]
    };
  },
  beforeMount() {
    getCommerces().then(res => {
      const data = res.data[0];
      this.pageData.commerceEmail = data.commerceEmail;
      this.pageData.commerceMobile = data.commerceMobile;
      this.pageData.commercePic = data.commercePic;
      this.pageData.commerceQrCodePic = data.commerceQrCodePic;
    });
  },
  mounted() {
    this.initMap(this.potion);
  },
  methods: {
    initMap(potion) {
      let map = new AMap.Map("mapContainer", {
        center: potion,
        zoom: 17,
      });

      let maker = new AMap.Marker({
        icon: "../../static/images/map_icon.png",
        // offset:AMap.Pixel(-130,-74)
        offset: new AMap.Pixel(-70, -68)
      })


      map.add(maker)
     
    }
  }
};
</script>



<style lang="less" scoped>
.img {
  img {
    display: block;
    width: 1920px;
    margin-left: -360px;
    height: 376px;
  }
}

.cooption-left {
  width: 45%;
  .cooption-infro {
    width: 500px;
    padding-right: 40px;
    padding-top: 100px;
    .english-letter {
      font-size: 22px;
      color: #2c4058;
    }
    .chinese-letter {
      font-size: 32px;
      color: #2c4058;
    }

    .under-line {
      height: 6px;
      border-top: 3px solid #000;
      border-bottom: 1px solid #000;
      margin-top: 10px;
    }

    .email-wrapper {
      margin-top: 30px;
      img {
        width: 65px;
        height: 65px;
      }
      p {
        color: #4b5561;
        font-size: 18px;
        line-height: 65px;
        margin-left: 20px;
      }
    }

    .ewm-wrapper {
      margin-top: 30px;
      img {
        width: 230px;
        height: 230px;
      }
    }
  }
}
.cooption-right {
  width: 55%;
  height: 750px;
  background-image: url("../../../static/images/postion-img.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
