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
import wgis from '../utils/Wgis.js'
export default{
  data(){
    return{
      msg:"testeeeeeeeee"
    }
  },
  mounted(){
    console.log("xxxxxxxxxxxxxxxxxxxxxxx",$.ajax({url:"http://www.baidu.com.cn",async:false}))
    wgis.initMap();
    this.testObj();
    console.log("wgis",wgis.a)
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
//   }
// }
</script>
<style>
  .map {
    width:100%
  }
</style>