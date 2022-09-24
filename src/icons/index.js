import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
console.log(req)
// req 函数 --> 根据路径 导入对应的模块

// 函数 keys 属性 --> 方法 --> 数组
console.log(req.keys())

console.log(req('./dashboard.svg'))

const requireAll = requireContext => requireContext.keys().map(requireContext)
// map 返回一个新数组
// 长度和原数组一样
// 实际上是一种映射关系
requireAll(req)// []

console.log(requireAll(req))
