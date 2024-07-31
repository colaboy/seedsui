import React from 'react'
import locale from 'library/utils/locale'
import validateSpecial from './../components/Special/validate'

import Form from 'library/components/Form'
import FormText from 'library/components/FormText'
import Special from './../components/Special'

const Form1 = ({ form }) => {
  return (
    <Form form={form}>
      <Form.Item
        name="input"
        label={locale('单行文本框', 'library.0766a6467bed7f2840871a5f0638669d')}
        rules={[
          {
            required: true,
            message: locale('单行文本框不能为空', 'library.70bf057b011babf2546c9b97bacdc3ad')
          }
        ]}
      >
        <FormText />
      </Form.Item>
      <Form.Item
        name="select"
        label={locale('下拉选择框', 'library.ad61d4096cf6d33cfa270c681230676a')}
      >
        <FormText />
      </Form.Item>
      <Form.Item
        name="customer"
        label={locale('客户选择', 'library.051e6c179357aae2cd19e9b7e7cd498f')}
      >
        <FormText />
      </Form.Item>
      <Form.Item
        name="textarea"
        label={locale('多行文本框', 'library.c6a16ef980efc2ac48c58727e5bade81')}
      >
        <FormText />
      </Form.Item>
      <Form.Item
        name="special"
        label={locale('极特殊值', 'library.7ab608b2df75934edce694a927f1cafe')}
        rules={[
          {
            validateTrigger: 'onSubmit', // 仅在提交的时候触发验证
            validator: (_, value) => validateSpecial({ value })
          }
        ]}
      >
        <Special readOnly />
      </Form.Item>
    </Form>
  )
}

export default Form1
