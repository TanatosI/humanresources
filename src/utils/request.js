import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
const timeOut = 35600 // s

function IsCheckTimeOut() {
  const currentTime = Date.now()
  const timeStamp = (currentTime - store.getters.hrsaasTime) / 1000
  return timeStamp > timeOut
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})

service.interceptors.request.use(
  confirm => {
    if (store.getters.token) {
      if (IsCheckTimeOut()) {
        store.disoatch('user/logout')
        router.push('login')
        return Promise.reject(new Error('token 超时'))
      }
      confirm.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return confirm
  },
  error => {
    return new Error(error.message)
  }
)

service.interceptors.response.use(
  response => {
    const { message, data, success } = response.data
    if (success) {
      return data
    }
    Message.error(message)
    return Promise.reject(new Error(message))
  },
  error => {
    console.log(error.response)
    if (error.response.status === 401) {
      store.dispantch('user/logout')
      router.push('login')
      Message.error('token 超时')
    } else {
      Message.error(error.message)
    }
    return Promise.reject(error)
  })
export default service
