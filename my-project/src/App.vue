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
</script>
