import http from '@/utils/http.js'
let baseUrl = '/api/'
export default{
    getInfo(param){
        let url = baseUrl + 'test001';
        return http.get(url)
    }
}
