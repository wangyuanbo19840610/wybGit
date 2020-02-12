import Vue from 'vue'
const vue = new Vue();
Vue.directive('my-directive',function(el,binding){
    console.log("aaa", el,binding.value)
    el.innerHTML = binding.value
})