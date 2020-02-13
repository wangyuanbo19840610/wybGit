<template>
  <div style ="display:flex; height:calc(100% - 50px)">
   <!--<p v-my-directive="msg"></p>!-->
   <el-button @click="mainClick">Test</el-button>
    <div id="map" class="map">
    </div>
  </div>
</template>
<script>
import axios from "axios"
import service from '@/service/fooService.js'
export default{
  data(){
    return{
      msg:"testeeeeeeeee"
    }
  },
  mounted(){
    this.initMap();
    this.testObj();
  },
  methods:{
    testObj(){
      let testObj={"test1":[{"obj1":"111"},{"obj1_1":"111_1"}], 
                    "test2":[{"obj1":"111"},{"obj1_1":"111_1"}],
                    "test3":{"obj3":[{"obj3_1":"333"},{"obj3_2":"333_1"}],
                              "obj4":[{"obj4_1":"444"},{"obj4_2":"444_1"}]
                            }
                  }
        console.log("bbbbbbbb",testObj)
     let tName=[]
     let tArray = Object.keys(testObj)
       console.log("tArray",tArray)
          tArray.forEach(x=>{
            if(testObj[x] instanceof Array){
              tName.push(x)
            }else{
              Object.keys(testObj[x]).forEach(y=>{
                tName.push(y)
              })
            }
          })
      console.log("tName",tName)
    },
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
      service.getInfo().then(res =>{
       console.log("mainClick",res)
       alert(res.data)
      })
    },
    initMap(){
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM(),
            visible: true
          }),
          new ol.layer.Tile({
            source:new ol.source.TileWMS({
              url:'http://localhost:8080/geoserver/topp/wms',//'https://ahocevar.com/geoserver/wms',
              params:{
                'LAYERS':'topp:tasmania_roads',
              },
              serverType:'geoserver',
              transition:5000
            })
          })
        ],
        view: new ol.View({
          center:ol.proj.fromLonLat([147.59583, -42.04926]),//[-70.96065,40.78431], ,//ol.proj.fromLonLat([103.73,36.03]),
          zoom: 8,
          // minZoom:5,
          // maxZoom:12
        }),
        // 新增代码
        controls: ol.control.defaults().extend([    // 往地图增加滑块缩放控件
            new ol.control.ZoomSlider(),
            new ol.control.OverviewMap({        // 实例化一个OverviewMap类的对象，并加入到地图中
                collapsed: false
            }),
            new ol.control.ScaleLine() 
        ]),
      });
    }
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
//   }
// }
</script>
<style>
  .map {
    width:100%
  }
</style>