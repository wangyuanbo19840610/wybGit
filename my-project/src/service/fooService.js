import http from '@/util/http.js'
let baseUrl = '/api/'
export default{
    getInfo(param){
        let url = baseUrl + 'test005';
        return http.get(url)
    }
}
