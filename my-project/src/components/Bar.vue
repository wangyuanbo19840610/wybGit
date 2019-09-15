<template>
  <el-checkbox-group v-model="checkList" >
    <el-checkbox v-for = "item in items" :label = "item.name" :key="item.name"></el-checkbox>
  </el-checkbox-group>
</template>
<script>
export default {
  data () {
    return {
      checkList: ['aaa','bbb'],
      name:'',
      age:'',
      items:[
        {
          "name":"aaa",
          "age":11
        },
        {
          "name":"bbb",
          "age":12
       }]
    }
  }
}
</script>
