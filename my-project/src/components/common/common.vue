<template>
</template>
<script>
export default{
    data: () => {
        return {
        name :"wangyuanbo",
        item:[
            {
                name:"111",
                age: ""
            },
            {
                name:"2222",
                age:"22"
            }
        ],
        item_1:[
            {
                name:"333",
                age:"33"
            },
            {
                name:"444",
                age:"44"
            }
        ]
      }
    },
    mounted() {
        this.item[0].name = this.$route.params.project_id
        console.log("common project_id",this.$route.params.project_id)
        console.log("commmon item",this.item)
        
// 　　　　setInterval( () => {
//             this.get_info()
// 　　　　　　}, 1000)
    },
    methods: {
        on_alert(){
            alert("you are success!!!")
        },
        get_info(){
            this.item[0].age = Math.floor(Math.random()*10+1)
        }
    },
    computed: {
       newName() {
           return this.item[0].age
       }
    },
    watch: {
       newName(val){
           this.$parent.init()
       }
    },
}
</script>