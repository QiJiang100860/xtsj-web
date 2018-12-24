<template>
    <div class="jobs-wrapper">
        <h1>我们需要你</h1>
        <div class="container clear">

            <div v-for="(item,idx) in data" :key="idx" class="left job-item">
                <h2>{{item.cpyTitle}}</h2>
                <p>{{item.cpyDetaile}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return {

        }
    }
}
</script>


<style lang="less" scoped>

@import "../../../assets/base";


.jobs-wrapper{
    background-image: url("../../../../static/images/develop-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    h1{
        text-align: center;
        color: #333;
        font-size: 32px;
        line-height: 100px;
    }


    .job-item{
        background: rgba(#fff,.8);
        width: 370px;
        // min-height: 500px;
        height: 500px;
        margin-right: 30px;
        margin-bottom: 30px;
        border-radius: 6px;
        padding: 30px 30px;
        cursor: pointer;
        &:nth-child(3n){
            margin-right: 0;
        }
        h2{
            color: #2C4058;
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: 700;
        }

        P{
            color: #4B5562;
            font-size: 16px;
            line-height: 30px;
            // .textOverflow(13)
            .textOverflow(30px,13)
        }
    }
}
</style>

