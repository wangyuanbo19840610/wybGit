<template>
  <div style ="display:flex; height:calc(100% - 50px)">
    <div id="map" class="map">
      <el-button @click="mainClick"> watch button</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import service from '@/service/fooService.js'
export default{
  methods:{
    mainClick1(){
      return new Promise((resolve, reject) => {
        axios.get('/api/test001')
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
      })
    },
    mainClick(){
      service.getInfo('url').then(res =>{
       console.log("mainClick",res)
       alert(res.data)
      })
    },
  }
}
// import service from '@/service/fooService.js'
// export default{
//   data(){
//     return{
//      testObj:{}
//     }
//   },
//   mounted(){
//    this.initMap()
//    // this.init();
//   },
//   watch:{  //深度监控一个对象
//     testObj: {
//          handler(newVal, oldVal){
//            console.log("newVal",newVal)
//            console.log("oldVal",oldVal)
//            this.status = true;
//            console.log("this.status",this.status)
//         },
//          deep: true
//     }
//   },
//   methods:{
//     mainClick(){
//       let aaa = service.getInfo()
//       console.log("aaa",aaa)
//     },
//     init:function(){
//       setTimeout(()=>{
//           console.log("obj changed")        
//           this.testObj = {
//             "info":{
//               "one":'1111',
//               "two":'2222',
//               "three":{
//                 "one_one":'1111_1111',
//                 "two_two":'2222_2222'
//               }
//             }
//           }
//         },4000)
//     },
//     initMap:function(){
//       var map = new ol.Map({
//         target: 'map',
//         layers: [
//           new ol.layer.Tile({
//             source: new ol.source.OSM()
//           })
//         ],
//         view: new ol.View({
//           center: ol.proj.fromLonLat([103.73,36.03]),
//           zoom: 8,
//           minZoom:5,
//           maxZoom:12
//         })
//       });
//     }
//   }
// }
</script>
<style>
  .map {
    width:100%
  }
</style>