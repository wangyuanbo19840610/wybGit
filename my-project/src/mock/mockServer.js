import Mock from 'mockjs'
import data from './data.json' 

Mock.mock('/api/test001',{code:0,data:data.info})