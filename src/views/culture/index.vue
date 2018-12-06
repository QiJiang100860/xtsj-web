<template>
    <div class="content-wrapper">
        <div class="container">
            <img :src="require('../../../static/images/culture-bg.png')" alt="">
            <div class="content">
                <h1>企业服务</h1>
                <p>Enterprise service</p>
                <div class="infro">
                    <div class="c-left">
                        <div class="item">
                            <h2>企业精神</h2>
                            <p>商业趋势洞察；建立竞争优势；推动执行；营造资源生态</p>
                        </div>
                        <div class="item">
                            <h2>企业精神</h2>
                            <p>商业趋势洞察；建立竞争优势；推动执行；营造资源生态</p>
                        </div> 
                        <div class="item">
                            <h2>企业精神</h2>
                            <p>商业趋势洞察；建立竞争优势；推动执行；营造资源生态</p>
                        </div>  
                    </div>
                    <div class="c-line"></div>
                    <div class="c-right">
                        <div class="item">
                            <h2>企业精神</h2>
                            <p>商业趋势洞察；建立竞争优势；推动执行；营造资源生态</p>
                        </div> 
                        <div class="item">
                            <h2>企业精神</h2>
                            <p>商业趋势洞察；建立竞争优势；推动执行；营造资源生态</p>
                        </div> 
                        <div class="item">
                            <h2>企业精神</h2>
                            <p>商业趋势洞察；建立竞争优势；推动执行；营造资源生态</p>
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>



<style lang="less" scoped>
.container{
    position: relative;
    img{
        display: block;
        width: 1920px;
        margin-left: -360px;
        height: 530px;
    }
    .content{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        padding-top:30px; 
        h1,p{
            text-align: center;
            color: #fff;
        }
        h1{
            font-size: 32px;
            line-height: 50px;
        }
        p{
            font-size: 20px;
            margin-bottom: 20px;
        }
        .infro{
            display: flex;
            justify-content: center;
            .c-line{
                height: 366px;
                width: 1px;
                background: #fff;
            }
            .c-left,
            .c-right{
                width: 500px;
                padding-top: 30px;
                .item{
                    margin-top: 66px;
                    &:first-child{
                        margin-top: 0;
                    }
                }
                h2{
                    font-size: 20px;
                    color: #fff;
                }
                p{
                    font-size: 14px;
                    color: #fff;
                }
            }
            .c-left{
                padding-right: 50px;
                .item{
                    p,h2{
                        text-align: right;
                    }
                }
                
                
            }
            .c-right{
                padding-left: 50px;
                .item{
                    p,h2{
                        text-align: left;
                    }
                }
                 
            }
        }
    }
}
</style>
