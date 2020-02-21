<template>
  <div class="hello">
    <h1>{{ active }}</h1>
    <!-- 激活的菜单样式为  active 类 -->
    <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->
    <div id="main">
      <nav v-bind:class="active" v-on:click.prevent>
          <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
          <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
          <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
          <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
      </nav>
      <p>you selected <b>{{active}} menu</b></p>
    </div>
    <form id="main" v-cloak>
      <h1>Services</h1>
      <ul>
        <li v-for="service in services" :key ="service" v-on:click="toggleActive(service)" v-bind:class="{'active': service.active}">
          {{service.name}} <span>{{service.price | currency}}</span>
        </li>
      </ul>
      <div class="total">
        <!-- 计算所有服务的价格，并格式化货币 -->
        Total: <span>{{total() | currency}}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 'home',
      services: [
        {
          name: 'Web Development',
          price: 300,
          active: true
        }, {
          name: 'Design',
          price: 400,
          active: false
        }, {
          name: 'Integration',
          price: 250,
          active: false
        }, {
          name: 'Training',
          price: 220,
          active: false
        }
      ]
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    toggleActive: function (s) {
      s.active = !s.active
    },
    total: function () {
      var total = 0
      this.services.forEach(function (s) {
        if (s.active) {
          total += s.price
        }
      })
      return total
    }
  },
  filters: {
    currency: function (value) {
      return '$' + value.toFixed(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*  隐藏未编译的变量 */

[v-cloak] {
  display: none;
}

*{
  margin:0;
  padding:0;
}

body{
  font:15px/1.3 'Open Sans', sans-serif;
  color: #5e5b64;
  text-align:center;
}

a, a:visited {
  outline:none;
  color:#389dc1;
}

a:hover{
  text-decoration:none;
}

section, footer, header, aside, nav{
  display: block;
}

/*-------------------------
  订单表单
--------------------------*/

form{
  background-color: #61a1bc;
  border-radius: 2px;
  box-shadow: 0 1px 1px #ccc;
  width: 500px;
  padding: 35px 60px;
  margin: 50px auto;
}

form h1{
  color:#fff;
  font-size:64px;
  font-family:'Cookie', cursive;
  font-weight: normal;
  line-height:1;
  text-shadow:0 3px 0 rgba(0,0,0,0.1);
}

form ul{
  list-style:none;
  color:#fff;
  font-size:20px;
  font-weight:bold;
  text-align: left;
  margin:20px 0 15px;
}

form ul li{
  padding:20px 30px;
  background-color:#e35885;
  margin-bottom:8px;
  box-shadow:0 1px 1px rgba(0,0,0,0.1);
  cursor:pointer;
  width:400px;
}

form ul li span{
  float:right;
}

form ul li.active{
  background-color:#8ec16d;
}

div.total{
  border-top:1px solid rgba(255,255,255,0.5);
  padding:15px 30px;
  font-size:20px;
  font-weight:bold;
  text-align: left;
  color:#fff;
}

div.total span{
  float:right;
}
</style>
