<template>
<div style="width:200px;margin-left:250px">
    <!--<div class="block" v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <el-image=
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"></el-image>
    </div>!-->
    <el-tree
  :data="data"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="defaultKeys"
  :props="defaultProps">
</el-tree>
</div>
</template>
<script>
  export default {
    data() {
      return {
        defaultEx:true,
        defaultKeys:[5,6],
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          },{
            id: 9,
            label: '二级 2-1'
          }, {
            id:10,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
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