import React from 'react'
import locale from 'library/utils/locale'
import validateSpecial from './../components/CustomComponent/validate'

import Form from 'library/components/Form'
import CustomComponent from './../components/CustomComponent'
import CustomFormItem from './../components/CustomFormItem'

const Form3 = ({ form, ...props }) => {
  return (
    <Form form={form} {...props}>
      <Form.Item
        name="special"
        label={locale('自定义组件与校验')}
        rules={[
          {
            validateTrigger: 'onSubmit', // 仅在提交的时候触发验证
            validator: (_, value) => validateSpecial({ value })
          }
        ]}
      >
        <CustomComponent />
      </Form.Item>
      <Form.Item name="customFormItem">
        <CustomFormItem />
      </Form.Item>
    </Form>
  )
}

export default Form3
