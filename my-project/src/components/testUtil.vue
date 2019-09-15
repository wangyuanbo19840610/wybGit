<template>
    <div>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'wang 0721',
            testArray:[]
        }
    },
    mounted(){
        this.test();
    },
    methods:{
        test:()=>{
            this.testArray = [1,2,3];
            console.log("TYPE",typeof(this.testArray))
            console.log("TYPE1",this.testArray instanceof RegExp)
        }
    }
    
}
</script>
<style lang="">
    
</style>>