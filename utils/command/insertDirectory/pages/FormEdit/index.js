import React, { useRef, useEffect, useState } from 'react'
import locale from 'library/utils/locale'
import { validateForm } from 'library/components/CustomFields/utils'
import { queryData, saveData } from './api'

import { Layout, Card } from 'seedsui-react'
import NoDataGroup from 'library/components/NoDataGroup'
import Form from 'library/components/Form'
import Forms from './Forms'
import Footer from './Footer'

// 表单编辑页面
const FormEdit = () => {
  const [form] = Form.useForm()

  // 防重复提交token
  const tokenRef = useRef('' + Date.now())

  // 详情数据
  const [detailData, setDetailData] = useState(null)

  // 错误: null加载中, ''加载成功, '错误信息'加载失败
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    // 初始化数据
    loadData()

    // eslint-disable-next-line
  }, [])

  /**
   * queryData初始化数据方法
   * @return {Object} {detailData: xx, formData: xx}
   */
  async function loadData() {
    // 加载详情数据
    let data = await queryData()

    // 加载数据失败
    if (typeof data === 'string') {
      setErrMsg(data)
    }
    // 加载数据成功
    else {
      // 设置详情数据
      setDetailData(data.detailData)

      // 设置表单数据
      form.setFieldsValue(data.formData)
    }
  }

  // 保存
  async function handleSave() {
    // 校验表单数据
    let errMsg = await validateForm({ form, errorType: 'toast' })
    if (errMsg) return

    // 获取表单数据
    let formData = form.getFieldsValue()

    saveData({ formData, tokenRef: tokenRef })
  }

  return (
    <Layout className="full">
      {/* 内容 */}
      <Layout.Main>
        {/* 表单1，请替换成业务中更贴切的名称，例如：Forms.Base等 */}
        <Card>
          <p
            className="font-size-l border-b"
            style={{ margin: '0 12px', padding: '8px 0', fontWeight: '500' }}
          >
            {locale('表单1', 'library.52b3596e27795e1029b33e1e96f5f86e')}
          </p>
          <Forms.Form1 detailData={detailData} form={form} />
        </Card>

        {/* 表单2: 左右布局 */}
        <Card>
          <p
            className="font-size-l border-b"
            style={{ margin: '0 12px', padding: '8px 0', fontWeight: '500' }}
          >
            {locale('表单2: 左右布局', 'library.62f71aef231d97559c09eca9efba2609')}
          </p>
          <Forms.Form2 detailData={detailData} form={form} />
        </Card>
      </Layout.Main>

      {/* 底部 */}
      <Footer onSave={handleSave} />

      {/* 数据加载失败 */}
      {errMsg && <NoDataGroup caption={errMsg} style={{ margin: '20px 0' }} />}
    </Layout>
  )
}

export default FormEdit
