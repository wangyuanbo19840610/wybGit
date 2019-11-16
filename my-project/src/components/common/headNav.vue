<template>
  <div>
    <el-col :span="24">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command = 'changeLanguage'>
        <el-button type="primary">
          {{ language }}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command = 'en'>English</el-dropdown-item>
          <el-dropdown-item command = 'cn'>中文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{ $t('text.name') }}</span>
    </el-header>
      </el-col>
  </div>
</template>
<script>
export default{
  data: () => {
    return {
      name: 'wyb',
      language: ''
    }
  },
  mounted() {
    console.log("head",this.$route.params)
    if(this.$i18n.locale === 'en'){
      this.language = 'English'
      console.log('current language',this.language)
    }else{
      this.language = '中文'
       console.log('current language',this.language)
    }
  },
  methods: {
    changeLanguage(commond){
      console.log('commond',commond)
      if (commond  === 'en') {
        this.$i18n.locale = 'en'
        this.language = 'English'
        window.localStorage.setItem('language', 'en')
        // this.$store.commit('increment')
        console.log('language1', window.localStorage.getItem('language'))
      } else {
        this.$i18n.locale = 'cn'
        this.language = '中文'
        window.localStorage.setItem('language', 'cn')
        // this.$store.commit('increment')
        console.log('language2', window.localStorage.getItem('language'))
      }  
    }
  }
}
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 50px !important;
    height:50px !important;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
