<template>
    <div class="jobs-wrapper">
        <h1>我们需要你</h1>
        <div class="container clear">

            <div v-for="(item,idx) in [1,2,3,4,5,6,7]" :key="idx" class="left job-item">
                <h2>前端开发工程师{{idx}}</h2>
                <p>前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。
前端开发工程师不仅要掌握基本的Web前端开发技术，网站性能优化、SEO和服务器端的基础知识，而且受到重视的一个新兴职业。Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。
前端开发工程师不仅要掌握基本的Web前端开发技术，网站性能优化、SEO和服务器端的基础知识，而且受到重视的一个新兴职业。Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。
前端开发工程师不仅要掌握基本的Web前端开发技术，网站性能优化、SEO和服务器端的基础知识，而且要学会运用各种工具进行辅助开发以及理论层面的知识，包括代码的可维护性、组件的易用性、分层语义模板和浏览器分级支持等。</p>
            </div>
        </div>
    </div>
</template>


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
            .textOverflow(13)
        }
    }
}
</style>

