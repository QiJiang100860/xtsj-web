<template>
  <div class="develop">
    <h1>公司发展历程</h1>

    <div class="develop-wrapper">

      <div class="item" v-for="(item,idx) in [2008,2009,2012,2013,2015,2016,2017,2018]" :key="idx">

        <div class="left-wrapper" :class="{'margin_top':(idx+1)%2==1}">
          <template v-if="(idx+1)%2==1">
            <h2>{{item}}年</h2>
            <p><span></span>公司正式成立，企业开始新的征程，注册公司正式成立，企业开始新的征程，注册 资金二百万元。公司稳步发展，逐步建成 体系,后期发展可期</p>
          </template>
        </div>
        <div class="line"></div>

        <div class="right-wrapper" :class="{'margin_top':(idx+1)%2==0}">
          <template v-if="(idx+1)%2==0">
            <h2>{{item}}年</h2>
            <p><span></span>公司正式成立，企业开始新的征程，注册 资金二百万元。公司稳步发展，逐步建成 体系,后期发展可期</p>
          </template>
        </div>
      </div>

    </div>
  </div>
</template>


<style lang="less" scoped>
.develop {
  background-image: url("../../../../static/images/develop-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  h1 {
    font-size: 32px;
    color: #545e69;
    text-align: center;
    line-height: 80px;
  }

  .develop-wrapper {
    padding: 50px 0;
    
    .item {
      margin-top: -20px;
      display: flex;
      justify-content: center;

      .margin_top{
        margin-top: -10px;
      }
      .left-wrapper,
      .right-wrapper {
        width: 265px;
        h2 {
          font-size: 20px;
          color: #1a6eb1;
          font-weight: 700;
          line-height: 40px;
          position: relative;
        }
        p{
          font-size: 14px;
          color: #535353;
          line-height: 20px;
          span{
            display: inline-block;
            width: 10px;
            height: 10px;
            margin-right: 5px;
          }
        }
      }

      .left-wrapper{
        text-align: right;
        h2{
          &::after{
            content: '1';
            color:transparent;
            position: absolute;
            right: -40px;
            top: 16px;
            width: 20px;
            height: 10px;
            background: #3E7DC5;
            border-right:solid 6px #FFBA00;
          }
        }
        p{
          span{
            background: #FFBA00;
          }
        }
      }


      .right-wrapper{
        text-align: left;
        h2{
         &::after{
            content: '1';
            color:transparent;
            position: absolute;
            left: -40px;
            top: 16px;
            width: 20px;
            height: 10px;
            background: #3e7dc5;
            border-left:solid 6px #FFBA00;
          }
        }
        p{
          span{
            background: #3e7dc5;
          }
        }
      }

      .line {
        width: 6px;
        background: #3e7dc5;
        margin: 0 40px;
      }

    }

    .item:last-child{
      .line{
        margin-bottom: -20px;
      }
    }

    .item:first-child{
      .line{
        margin-top: -20px;
      }
    }
  }
}
</style>
