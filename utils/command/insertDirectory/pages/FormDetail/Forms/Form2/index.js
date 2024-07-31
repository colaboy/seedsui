import React from 'react'
import locale from 'library/utils/locale'

import FormText from 'library/components/FormText'
import Form from 'library/components/Form'

const Form2 = ({ form }) => {
  return (
    <Form form={form} layout="horizontal">
      <Form.Item
        name="input2"
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
        name="select2"
        label={locale('下拉选择框', 'library.ad61d4096cf6d33cfa270c681230676a')}
      >
        <FormText />
      </Form.Item>
      <Form.Item
        name="customer2"
        label={locale('客户选择', 'library.051e6c179357aae2cd19e9b7e7cd498f')}
      >
        <FormText />
      </Form.Item>
      <Form.Item
        name="textarea2"
        label={locale('多行文本框', 'library.c6a16ef980efc2ac48c58727e5bade81')}
      >
        <FormText />
      </Form.Item>
    </Form>
  )
}

export default Form2
