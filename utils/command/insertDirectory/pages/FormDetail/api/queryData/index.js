import { ApiAxios, Device, Loading } from 'seedsui-react'
import locale from 'library/utils/locale'

// 获取数据
function queryData(params) {
  return new Promise((resolve) => {
    // 修改或者复制id
    let id = Device.getUrlParameter('id') || '测试id'

    // 详情不能没有id
    if (!id) {
      resolve(locale('参数不正确！', 'library.e9e63007dfe9f5b8cb614bbef6c3afc0'))
      return
    }

    // 修改或者复制
    Loading.show()
    ApiAxios.post('/platform/param/v1/getLoginUser.do', {
      data: { id: id },
      contentType: 'application/json'
    })
      .then((result) => {
        Loading.hide()
        if (result.code === '1') {
          resolve({
            detailData: null,
            formData: {
              input: '测试数据',
              select: [{ id: '1', name: '测试数据' }],
              customer: [{ id: '1', name: '测试数据' }],
              textarea: '测试数据',
              special: {
                radio: '2'
              },
              input2: '测试数据',
              select2: [{ id: '1', name: '测试数据' }],
              customer2: [{ id: '1', name: '测试数据' }],
              textarea2: '测试数据'
            }
          })
        } else {
          resolve(locale('获取数据错误！', 'library.9c62a21f2d7a4426f205f92e85ea64b9'))
        }
      })
      .catch(() => {
        Loading.hide()
        resolve(locale('获取数据异常！', 'library.a085fb7c5cb81143dcec0f299fff709a'))
      })
  })
}

export default queryData
