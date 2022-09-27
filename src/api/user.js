import request from '@/utils/request'

export function getInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

export const getUserDatailById = (id) => request({ url: '/sys/user/' + id })
