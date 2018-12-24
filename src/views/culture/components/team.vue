<template>
    <div class="team-wrapper">
        <h1>团队风采</h1>

        <div class="container clear">

            <div v-for="(item,idx) in data" :key="idx" class="left team-item">
                <img :src="item.advertPicUrl" alt="">
                <div class="infro">
                    <h2>{{item.advertTitle}}</h2>
                    <p>{{item.content}}</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>


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
                // .textOverflow(24px,1)
            }
            p{
                color: #4B5562;
                font-size: 16px;
                line-height: 24px;
                .textOverflow(24px,2);
                // .textOverflow(2);

            }
        }
    }
}
</style>
