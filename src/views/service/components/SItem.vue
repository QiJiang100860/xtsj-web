<template>
  <ul class="item">

    <div v-for="(item,idx) in [1,2,3,4,5]" :key="idx">

      <li class="even" v-if="item%2==1">
        <div class="bg"></div>
        <div class="container clear">
          <div class="left">
            <img :src="require('../../../../static/images/service-item-img.png')" alt="">
          </div>
          <div class="right infro">
            <h1>翔天世纪分公司{{item}}</h1>
            <p>翔天世纪（西安）集团有限公司始建于2017年，是专注于专业服务房地产行业的民营企业公司，公司坐落西安市雁塔区太白南路上上国际2301室，主要经营企业管理咨询服务，翔天世纪（西安）集团有限公司以始终坚持“诚信为本、客户至上、互惠互利，开拓创新”的企业宗旨，本着“本质为本、专业执着、精益求精”的经营销售理念，力求给客户提供全方位优质服务，我们相信诚实正直、开拓进取地为公司发展做正确的事情，将为公司和个人带来共同的利益和进步。</p>
            <h2>服务内容</h2>
            <p>服务内容服务内容服务内容</p>
          </div>
        </div>
      </li>

      <li class="odd" v-else>
        <div class="bg"></div>
        <div class="container clear">
          <div class="right">
            <img :src="require('../../../../static/images/service-item-img.png')" alt="">
          </div>
          <div class="left infro">
            <h1>翔天世纪分公司{{item}}</h1>
            <p>翔天世纪（西安）集团有限公司始建于2017年，是专注于专业服务房地产行业的民营企业公司，公司坐落西安市雁塔区太白南路上上国际2301室，主要经营企业管理咨询服务，翔天世纪（西安）集团有限公司以始终坚持“诚信为本、客户至上、互惠互利，开拓创新”的企业宗旨，本着“本质为本、专业执着、精益求精”的经营销售理念，力求给客户提供全方位优质服务，我们相信诚实正直、开拓进取地为公司发展做正确的事情，将为公司和个人带来共同的利益和进步。</p>
            <h2>服务内容</h2>
            <p>服务内容服务内容服务内容</p>
          </div>
        </div>
      </li>

    </div>

  </ul>
</template>

<style lang="less" scoped>
.item {
  li {
    .container {
      margin-top: -450px;
    }
    img {
      width: 700px;
      height: 540px;
    }
    .infro {
      width: 500px;

      margin-top: -70px;
      h1 {
        font-size: 34px;
        color: #2c4058;
        line-height: 60px;
      }
      p {
        font-size: 16px;
        color: #4b5561;
        line-height: 36px;
      }
      h2 {
        font-size: 20px;
        font-weight: 700;
        color: #010101;
        line-height: 60px;
      }
    }

    &.even {
      .bg {
        width: 700px;
        height: 540px;
        background: rgb(78, 174, 225);
      }
      .infro {
        padding-left: 50px;
      }
    }

    &.odd {
      .bg {
        width: 700px;
        height: 540px;
        background: rgb(113, 95, 225);
        margin-left: 1220px;
      }
      .infro {
        padding-right: 50px;
      }
    }
  }
}
</style>

