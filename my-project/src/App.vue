<template>
  <div id="app" class='app'>
    <headNav></headNav>
    <leftNav></leftNav>
    <router-view/>
  </div>
</template>

<script>
import headNav from './components/common/headNav'
import leftNav from './components/common/leftNav'
export default {
  name: 'App',
  isActive: true,
  components: {
    headNav: headNav,
    leftNav: leftNav
  }
}
localStorage.setItem("lastname", "Smith");
let aa = localStorage.getItem("lastname");
console.log("test0915",aa)
for(var i=0;i<localStorage.length;i++){
  console.log("test_11",localStorage.key(i) + ":" + localStorage.getItem(localStorage.key(i)))
}
</script>
