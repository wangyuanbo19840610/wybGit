<template>
<div class="test1" id="test1">
    <div class="left">
        <div>工具栏</div>
        <div class="spanItem" id="div1" draggable="true" @dragstart="dragStart($event)">
            <VueDragResize @clicked='clicked($event)' :x='size' :y='size' :w='size' :h='size' @resizing='resizing($event)' :isDraggable='isDraggable' :isResizable='isResizable' :parentLimitation='parentLimitation'>
               <div id="divEnd">1111</div>
            </VueDragResize>
        </div>
        
    </div>
    <div class="right" id = "div5" @dragenter="dragenter($event)" @dragover="dragover($event)" @drop="drop($event)">right</div>
</div>
</template>
<script>
import VueDragResize from 'vue-drag-resize'
export default {
  name: 'DndList',
  components:{
    VueDragResize
  },
  watch: {
  },
  data () {
    return {
        isDraggable:false,
        isResizable:false,
        size:50,
        parentLimitation:false,
        isActive:true,
        innerDragFlag:false,
        params:{
            left: Number, //the X position of the component
            top: Number, //the Y position of the component
            width: Number, //the width of the component
            height: Number //the height of the component
        }

    }
  },
  mounted(){
      //this.drawLine()
      console.log("xx",$('#test1').offset())
  },
  computed: {
  },
  methods: {
      clicked(ev){
          console.log("clicked",ev)
      },
      resizing(ev){
          console.log("resizing",ev)
      },
    dragging(a){
        console.log(a)
    },
    dragenter(ev){
        console.log("dragenter",ev)
    },
    dragTStart(ev){
        this.innerDragFlag = true;
        console.log("dragTStart",ev)
    },
    dragStart(ev){
        this.innerDragFlag = false;
       // ev.preventDefault();
        ev.dataTransfer.setData("Text", ev.target.id);
        console.log("dragStart",ev)
    },
    dragover(ev){
        ev.preventDefault();
    },
    drop(ev){
        ev.preventDefault();
        if(this.innerDragFlag){
            return
        }
        var data = ev.dataTransfer.getData("Text");
        var item = document.getElementById(data).cloneNode(true);
        //document.getElementById(data).setAttribute("id","mydiv1");
        console.log("item",document.getElementById(data))
        if(item.id){
            item.id +=1;
        }
        ev.target.appendChild(item); 
        document.getElementById(item.id).style.marginLeft = '10px';
        document.getElementById(item.id).style.marginTop = '10px';
        this.drawLine(item.id)
    },
    drawLine(id){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(id))
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
    }
  }
}
</script>
 
<style  lang="less" scoped>
.test1{
    width:100%;
    height:100%;
        display: inline-flex;
    .left{
        width:20%;
        height:100%;
        background:red;

            .spanItem{
                width:25px;
                height:25px;
                border:1px solid black;
            }
            .myChart{
                width:25px;
                height:25px;
            }
        

    }
    .right{
        width:80%;
        height:100%;
        background:gray;
        .spanItem{
            width:250px;
            height:250px;
            background:green;
            border:1px solid black;
        }
    }
}

</style>