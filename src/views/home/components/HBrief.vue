<template>
    <div class="brief" :style="{'background-image':'url('+data.bgPhoto+')'}">
        <div class="brief-left"></div>
        <div class="brief-right"></div>
        <div class="content">
            <div class="container clear">
                <div class="left l-wraper">
                    <h1>{{data.companyName}}</h1>
                    <h2>{{data.companyEnglishName}}</h2>
                    <div class="cpy-img">
                        <img :src="data.mainPhoto" alt="">
                    </div>
                </div>
                <div class="left r-wraper">
                    <p>{{data.content||'翔天世纪（西安）集团有限公司始建于2017年，是专注于专业服务房地产行业的民营企业公司，公司坐落西安市雁塔区太白南路上上国际2301室，主要经营企业管理咨询服务，翔天世纪（西安）集团有限公司以始终坚持“诚信为本、客户至上、互惠互利，开拓创新”的企业宗旨，本着“本质为本、专业执着、精益求精”的经营销售理念，力求给客户提供全方位优质服务，我们相信诚实正直、开拓进取地为公司发展做正确的事情，将为公司和个人带来共同的利益和进步。'}}</p>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ["data"]
}
</script>


<style lang="less" scoped>
@import "../../../assets/base";
.brief{
    overflow: hidden;
    height: 526px;
    position: relative;
    // .bgCover(url('../../../../static/images/brief-bg.jpg'));
    background-size: cover;
    background-position:center center;
    background-repeat:no-repeat;

    background-attachment: fixed;
    .brief-left,
    .brief-right{
        float: left;
        width: 50%;
        height: 100%;
    }
    .brief-left{
        background: #2E71BD;
        opacity: .3;
    }
    .brief-right{
        background: #021B39;
        opacity: .8;
    }

    .content{
        position: absolute;
        width: 100%;
        height: 100%;
        .container{
            height: 100%;
            position: relative;
        }
        .line{
            position: absolute;
            width: 64px;
            border-top: solid 1px #fff;
            left: 50%;
            margin-left: -32px;
            top: 50%;
        }
        .l-wraper,
        .r-wraper{
            width: 50%;
            height: 100%;
        }

        .l-wraper{
            padding-top: 30px;
            padding-left: 20px;
            h1{
                font-size: 32px;
                color: #fff;
            }
            h2{
                font-size: 24px;
                color: #fff;
                font-weight: 700;
            }
            .cpy-img{
                width: 490px;
                height: 326px;
                background: #FEE664;
                padding-top: 22px;
                padding-left:22px; 
                margin-top: 30px;
                img{
                    display: block;
                    width: 490px;
                    height: 326px;
                }
            }
        }

        .r-wraper{
            color: #FEFEFE;
            font-size: 18px;
            line-height: 40px;
            padding-top:115px;
            padding-left:60px;
            padding-right:20px;  
        }
    }
}
</style>

