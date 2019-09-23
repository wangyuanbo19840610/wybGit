<template>
  <div>
  <el-col :span="4" style="height:100%">
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" 
     background-color="#545c64" text-color="#fff" router active-text-color="#ffd04b" @select="handleSelect">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
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
export default{
  components: {
    'common':common
  },
  data(){
    return{
      activeIndex:'2',
      activeName:''
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