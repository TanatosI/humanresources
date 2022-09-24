// 二次封装 axios 
import axios from 'axios' // 引入 axios

const service = axios.create({
  baseURL: '/dev', // 全局beseURL,基准地址
  timeout: 5000 // 链接请求时间,超出即超时
})

export default service 
