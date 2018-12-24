<template>
  <ul class="item">

    <div v-for="(item,idx) in data" :key="idx">

      <li class="even" v-if="idx%2==0">
        <div class="bg"></div>
        <div class="container clear">
          <div class="left">
            <img :src="item.companyPic" alt="">
          </div>
          <div class="right infro">
            <h1>{{item.companyName}}</h1>
            <p>{{item.companyBrief}}</p>
            <h2>服务内容</h2>
            <p>{{item.companyContent}}</p>
          </div>
        </div>
      </li>

      <li class="odd" v-else>
        <div class="bg"></div>
        <div class="container clear">
          <div class="right">
            <img :src="item.companyPic" alt="">
          </div>
          <div class="left infro">
            <h1>{{item.companyName}}</h1>
            <p>{{item.companyBrief}}</p>
            <h2>服务内容</h2>
            <p>{{item.companyContent}}</p>
          </div>
        </div>
      </li>

    </div>

  </ul>
</template>

<script>
export default {
  props:['data']
}
</script>


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

