<template>
<div style="width:200px;margin-left:250px">
    <!--<div class="block" v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"></el-image>
    </div>!-->
    <el-tree :data="data" :props="defaultProps" :default-expand-all="defaultEx"  ref= "tree" @node-click="handleNodeClick"></el-tree>
</div>
</template>
<script>
  export default {
    mounted() {
 this.$refs.tree.store.defaultExpandAll = true
    },
    data() {
      return {
        defaultEx:true,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        data: [{
          label: '一级 1',
          id:'1',
                    children: [{
              label: '二级 2-1',
              id:'456'
            }]
      
        }, {
          label: '一级 2',
           id:'2',
            children: [{
              label: '二级 2-1',
              id:'123'
            }]
        }],
              defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
         let treeList = this.data;
        //setTimeout(()=>{
          // for (let i = 0; i < treeList.length; i++) {
          //     this.$refs.tree.store._getAllNodes()[i].expanded = true;
          //     //this.$refs.tree.store.nodesMap[data.$treeNodeId].expanded = true
          //   }
          this.$nextTick(() => {
this.defaultEx = false;
          
      })

        //}, 5000) 

        console.log(data.$treeNodeId);
      }
    }
  }
</script>
<style>
</style>