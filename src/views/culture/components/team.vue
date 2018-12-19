<template>
    <div class="team-wrapper">
        <h1>团队风采</h1>

        <div class="container clear">

            <div v-for="(item,idx) in [1,2,3,4,5,6]" :key="idx" class="left team-item">
                <img :src="require('../../../../static/images/cpy-img.png')" alt="">
                <div class="infro">
                    <h2>看到伟大的无与伦比的美。湖区。{{item}}</h2>
                    <p>新闻组：参与一个与您的业务有关的团队。您通常可以每天​​邮寄一次，但我鼓励您每天都能找到新鲜的话题。如果他们一直看到相同的消息，人们会把你调出来。记得永远不要垃圾邮件。仅加入与您的兴趣相同的群组。换句话说，当您宣传剃须膏时，请不要注册食谱交换组。</p>
                </div>
            </div>
            
        </div>
    </div>
</template>



<style lang="less" scoped>

@import "../../../assets/base";

.team-wrapper{
    background-image: url("../../../../static/images/develop-bg1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    h1{
        text-align: center;
        color: #FFFFFF;
        font-size: 32px;
        line-height: 60px;
    }

    .team-item{
        width: 370px;
        margin-right: 30px;
        margin-bottom: 30px;
        cursor: pointer;
        &:nth-child(3n){
            margin-right: 0;
        }
        img{
            display: block;
            width: 100%;
            height: 240px;
            background: #dedede;
        }
        .infro{
            padding: 20px;
            background: #fff;
            h2{
                color: #2C4058;
                font-size: 20px;
                margin-bottom: 10px;
                .textOverflow(1)
            }
            p{
                color: #4B5562;
                font-size: 16px;
                .textOverflow(2)
            }
        }
    }
}
</style>
