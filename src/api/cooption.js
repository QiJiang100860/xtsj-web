import request from './request'
import qs from 'qs'

// export function getAdverts(data) {
//   return request({
//     url: '/web/index/getAdverts',
//     method: 'post',
//     data:qs.stringify(data)
//   })
// }


export function getCommerces() {
    return request({
      url: '/web/commerce/getCommerces',
      method: 'post',
    })
  }

