<template>
    <div class="case">
        <div class="container">
            <h1>服务案例</h1>
            <h2>企业服务宣传标语，尽量体现出服务特色</h2>
            <ul class="item">
                <li v-for="(item,idx) in data" :key="idx">
                    <img :src="item.mainPhoto">
                    <div class="infro">
                        <h3>{{item.projectName||'服务案例名称'}}</h3>
                        <p>{{item.content||'想居住的目标从未改变。在此基础上，“三好”体系再次深入理解人居需求，让好房子、好服务、好社区 的理念传递......  。。。。多家庭。万科“三好”，是万科始终如一的坚持，更是追求美好生活的信念'}}</p>
                    </div>
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
.case{
    padding-top:40px;
    padding-bottom:40px; 
    background: #f2f2f2;
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
        margin-bottom: 30px;
    }

    .item{
        display: flex;
        flex-wrap: wrap;
        padding-left: 86px;
        li{
            width: 322px;
            // height: 306px;
            // border:solid 1px #dedede;
            margin: 10px;
            cursor: pointer;
            img{
                display: block;
                width: 100%;
                height: 250px;
            }
            .infro{
                h3{
                    color: #333;
                    font-size: 18px;
                    line-height: 40px;
                    font-weight: 700;
                }
                p{
                    color: #333;
                    font-size: 14px;
                    line-height: 24px;
                    .textOverflow(24px,2);
                    // .textOverflow(2);
                    &::after{
                        background: #f2f2f2;
                    }
                }
            }
        }   
    }
}
</style>

