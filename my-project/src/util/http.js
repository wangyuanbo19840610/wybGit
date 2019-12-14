import axios from "axios";
let http = axios;

export default {
    get:function(url,params){
        return this.base('GET', url, params)
    },
    post:function(url,params){
        return this.base('POST', url, params)
    },
    apiAxios:function(type, url, params){
        return http({
            data:type,
            params:params,
            url:url
        })
    },
    base:function(type, url, params){
        return new Promise((resolve, reject)=>{
            return this.apiAxios(type, url, params).then(response => {
                if(response.data && response.status==200){
                    resolve(response);
                }
                if(response.data && response.status==500){
                    console.log("xxxx")
                }
            }).catch(err=>{
                reject(err);
            })
        }).then((value)=>{
             console.log("value",value)
             return value
        })
    }
}