import React from 'react'
import locale from 'library/utils/locale'
import validateSpecial from './../components/Special/validate'

import { Input, Select } from 'seedsui-react'
import Form from 'library/components/Form'
import Customer from 'library/components/Customer'
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
        <Input.Text
          placeholder={locale('请输入', 'library.02cc4f8f5a9aefbc03c778f7a5c989c7')}
          maxLength={50}
        />
      </Form.Item>
      <Form.Item
        name="select"
        label={locale('下拉选择框', 'library.ad61d4096cf6d33cfa270c681230676a')}
      >
        <Select.Combo
          placeholder={locale('请选择', 'library.708c9d6d2ad108ab2c560530810deae9')}
          list={[
            {
              id: '1',
              name: '选项1'
            },
            {
              id: '2',
              name: '选项2'
            }
          ]}
          // 互斥图标
          allowClear={'exclusion-ricon'}
          ricon={<i className="ricon shape-arrow-right sm"></i>}
        />
      </Form.Item>
      <Form.Item
        name="customer"
        label={locale('客户选择', 'library.051e6c179357aae2cd19e9b7e7cd498f')}
      >
        <Customer.Combo
          placeholder={locale('请选择', 'library.708c9d6d2ad108ab2c560530810deae9')}
        />
      </Form.Item>
      <Form.Item
        name="textarea"
        label={locale('多行文本框', 'library.c6a16ef980efc2ac48c58727e5bade81')}
      >
        <Input.AutoFit placeholder={locale('请输入', 'library.02cc4f8f5a9aefbc03c778f7a5c989c7')} />
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
        <Special />
      </Form.Item>
    </Form>
  )
}

export default Form1
