<template>
  <div>
    <el-col :span="4" style="height:100%" class="wangyuanbo">
      <el-menu :collapse = "collapse" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" 
      background-color="#545c64" text-color="#fff" router active-text-color="#ffd04b" @select="handleSelect">
        <div class="menuheader" @click="menuheaderClick">
          <span class="el-icon-more"></span>
        </div>
        <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">aaaaa</span>
            </template>
            <el-menu-item v-for="(item,value) in MenuArray" :key="item.name" :index="item.path">
                <i class="item.icon"></i>
                <span slot="title">{{item.name}}</span> 
            </el-menu-item>            
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>  
<script>
import common from './common'
import draggable from 'vuedraggable'
export default{
  components: {
    common,
    draggable
  },
  data(){
    return{
      activeIndex:'2',
      activeName:'',
      collapse:true,
      MenuArray:[{icon:"el-icon-document",path:"1111",name:"导航一"},{icon:"el-icon-setting",path:"2222",name:"导航二"}]
      // MenuArray = [
      //   {
      //     icon:"el-icon-document",
      //     name:"a",
      //     child:{icon:"el-icon-document",path:"1111",name:"aaaa"}
      //   },
      //   {
      //     icon:"el-icon-document",
      //     name:"b",
      //     child:{icon:"el-icon-setting",path:"2222",name:"bbbb"}
      //   }
      // ]
    }
  },
  mounted() {
    $("li.el-menu-item:first-child").addClass('aaaa');
    this.activeIndex = this.$route.name
  },
  methods: {
    init(){
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toPage(){
      this.$router.push({name:'5'})
    },
    handleSelect(index){
      if(index == '1'||index=='2'){
        this.activeName = ''
      }
      console.log("index",index)
    },
    menuheaderClick(){
      this.collapse = !this.collapse;
    }
  }
}
</script>
<style>
.bottomBtn{
  position:absolute;
  bottom:5px;
}
.el-menu{
  height:100%;
  position:absolute;
}
.menuheader{
  text-align:center;
  height:50px;
  line-height:50px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>