import { promises } from "fs";
import { resolve } from "path";
import axios from "axios";
let http = axios

export default{
    get:function(url,params){
        return this.base('GET',url,params)
    },
    post:function(url,params){
        return this.base('POST',url,params)
    },
    apiAxios:function(type,url,params){
        return http({
            data:type,
            params:params,
            url:url
        })
    },
    base:function(type,url,params){
        return new Promise((resolve,reject)=>{
            this.apiAxios(type,url,params).then(response => {
                if(response.data && response.data.code==200){
                    resolve(response.data);
                    return;
                }
                if(response.data && response.data.code==500){
                    console.log("xxxx")
                }
            }).catch(err=>{
                reject(err);
                return;
            })
        })
    }
}