import React, { useEffect, useState } from 'react'
import locale from 'library/utils/locale'
import { queryData } from './api'

import Form from 'library/components/Form'
import { Loading, Device, Layout } from 'seedsui-react'
import NoDataGroup from 'library/components/NoDataGroup'
import Main from './Main'

// 编辑新增页面
export default function Detail() {
  // 表单
  const [form] = Form.useForm()

  // 错误面板: null加载中, ''加载成功, 'xx'加载错误
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    loadData()
    // eslint-disable-next-line
  }, [])

  // 初始化数据
  async function loadData() {
    // 编辑
    const id = Device.getUrlParameter('id')
    if (id) {
      Loading.show()
      let data = await queryData({ id: id })
      if (typeof data === 'string') {
        setErrMsg(data)
      } else {
        setErrMsg('')
      }
      // 初始化数据
      form.setFieldsValue(data)
      Loading.hide()
    }
    // 新增
    else {
      setErrMsg(
        locale('地址栏未找到参数id，无法加载数据', 'library.0aeef5e2541751e15f79aef9abc2a281')
      )
    }
  }

  return (
    <Layout className="full" style={{ backgroundColor: 'white' }}>
      {errMsg === '' && (
        <>
          {/* 主体内容 */}
          <Main form={form} />
        </>
      )}

      {/* 页面级错误提示 */}
      {errMsg && <NoDataGroup caption={errMsg} style={{ margin: '20px 0' }} />}
    </Layout>
  )
}
