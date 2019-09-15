<template>
<div>
<el-button @click="save">提交</el-button>
</div>
</template>
<script>
import http from "../util/http.js"
import axios from "axios"
export default{
  methods:{
    save:function(){
      return new Promise((resolve, reject) => {
        axios.get('api')
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
      })
    }
  }
}
</script>