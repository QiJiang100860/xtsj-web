<template>
    <div class="service">
        <div class="container">
            <h1>企业服务</h1>
            <h2>企业服务宣传标语，尽量体现出服务特色</h2>
            <ul class="item">
                <li v-for="(item,idx) in data" :key="idx">
                    <img :src="item.advertPicUrl">
                    <h3>{{item.advertTitle}}</h3>
                    <p>作为聚焦资本市场和财务报告的专业咨询机构，我们能够提供整合评估咨询服务，并与会计师事务所、律所、银行、机构投资者及监管机构紧密合作，为各行业客户提供支持。在过去的25年间，我们致力深耕亚太区......
通过调用仲量联行的国际经验及专家资源，我们能够将服务范围拓展至全球。</p>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    props: ['data']
}
</script>


<style lang="less" scoped>
@import "../../../assets/base";
.service{
    background: #f2f2f2;
    padding: 20px 0;
    h1,h2{
        text-align: center;
    }
    h1{
        font-size: 32px;
        color: #333;
    }
    h2{
        font-size: 18px;
        color: #919090;
        margin-top: 10px;
    }
    .item{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        li{
            width: 285px;
            height: 380px;
            background: #fff;
            border-radius: 8px;
            padding: 20px 30px;
            cursor: pointer;
            transition: all .3s;
            box-shadow: 0px 0px 50px rgba(0, 0, 0, .2);
            img{
                display: block;
                width: 100px;
                height: 100px;
                margin: 0 auto;
                background: #3E7CC3;
                border-radius: 50px;
                transition: all .3s;
            }
            h3{
                text-align: center;
                color: #060606;
                position: relative;
                margin-top: 10px;
                transition: all .3s;
                &::before{
                    position: absolute;
                    content: "1";
                    color:transparent;
                    display: inline-block;
                    width: 50px;
                    height: 3px;
                    background: #3E7CC3;
                    left: 50%;
                    margin-left: -25px;
                    bottom: -14px;
                    transition: all .3s;
                }
            }
            p{
                margin-top: 28px;
                font-size: 14px;
                line-height: 26px;
                color: #666666;
                transition: all .3s;
                .textOverflow(26px,7);
                // .textOverflow(7);
                &::after{
                    transition: all .3s;
                }
            }

            &:hover{
                background: #3E7CC3;
                margin-top: -20px;
                img{
                    background: #fff;
                }
                h3{
                    color: #fff;
                    &::before{
                        background: #fff;
                    }
                }
                p{ 
                    color: #fff;
                    &::after{
                        background: #3E7CC3;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
