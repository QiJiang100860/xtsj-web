import request from './request'
import qs from 'qs'

// export function getAdverts(data) {
//   return request({
//     url: '/web/index/getAdverts',
//     method: 'post',
//     data:qs.stringify(data)
//   })
// }


export function getPageVideo() {
  return request({
    url: '/web/startPage/getPageVideo',
    method: 'post',
  })
}

export function getSubcompanyList() {
  return request({
    url: '/web/index/getSubcompanyList',
    method: 'post',
  })
}