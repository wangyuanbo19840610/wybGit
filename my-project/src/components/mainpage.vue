<template>
  <div id="myChart" :style=" {width: '300px', height: '300px'}"></div>
  
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
    this.drawLine();
    // let zz="100px";
    // $('#aaa').css({"background-color":"yellow","max-height":`calc(100vh - ${zz}`})
    // console.log("xxxxxxxxxxxxxxxxxxxxxxx",$.ajax({url:"http://www.baidu.com.cn",async:false}))
    // wgis.initMap();
    // this.testObj();
    // console.log("wgis",wgis.a)
  },
  methods:{
      drawLine(){
        console.log("111")
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
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