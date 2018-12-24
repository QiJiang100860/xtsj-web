<template>
    <div class="footer">
        <ul>
            <li>商务合作</li>
            <li>联系我们</li>
            <li v-for="(item,idx) in subCompanyData" :key="idx">{{item.advertName}}</li>
            
        </ul>
        <p>版权所有copyright©2018 翔天世纪集团 版权所有 ICP备1123466875号-1</p>
    </div>
</template>

<script>
import {getSubcompanyList} from "../../api/public.js"
export default {
    data(){
        return {
            subCompanyData:null
        }
    },
    beforeMount(){
        getSubcompanyList().then(res=>{
            this.subCompanyData = res.data
        })
    }
}
</script>

<style lang="less" scoped>
@import url("./css.less");
</style>


