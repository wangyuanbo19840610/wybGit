import http from '@/util/http.js'
let baseUrl = '/api/test005'
export default{
    getInfo(url){
        let sendUrl = baseUrl;
        return http.get(sendUrl)
    }
}
