<template>
  <div>
  <el-col :span="4" style="height:100%">
    <el-menu :collapse = "collapse" :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" 
     background-color="#545c64" text-color="#fff" router active-text-color="#ffd04b" @select="handleSelect">
      <draggable>
        <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>菜单一</span>
            </template>
            <template v-for="(item,value) in MenuArray">
              <el-menu-item :index="item.path">
                  <i class="item.icon"></i>
                  <span slot="title">{{item.name}}</span> 
              </el-menu-item>            
            </template>
        </el-submenu>    
      </draggable>
      <div class="bottomBtn">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="一致性" name="1">
                <el-menu-item index="5">
                  <i class="el-icon-document"></i>
                  <span slot="title">导航五</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航六</span>
                </el-menu-item>
          </el-collapse-item>
        </el-collapse>
        <!--<button @click="toPage">other button</button>!-->
      </div>
    </el-menu>
  </el-col>
  <common ref="header"></common>
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
    }
  },
  mounted() {
    console.log("4444444",this.$route.name)
    //this.$refs.header.on_alert()
    this.getChildData();
    this.activeIndex = this.$route.name
  },
  // watch: {
  //   $route() {
  //       this.handleSelect('2')
  //   }
  // },
  methods: {
    init(){
      this.getChildData()
    },
    getChildData(){
        console.log("left get common info",this.$refs.header.item[0].age)
        //this.$refs.header.name;
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
  position:absolute
}
</style>