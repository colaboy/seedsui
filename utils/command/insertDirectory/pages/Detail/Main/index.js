import locale from 'library/utils/locale'

import Form from 'library/components/Form'
import { Layout } from 'seedsui-react'
import FormText from 'library/components/FormText'

// 主体内容
function Main({ form }) {
  return (
    <Layout.Main>
      <Form form={form} className="wq-form">
        <Form.Item
          name="customer"
          label={locale('客户', 'library.ff0b207718d78924989384356166e4a3')}
        >
          <FormText />
        </Form.Item>

        <Form.Item
          name="orderNo"
          label={locale('退货单号', 'library.2efaa8fe48e4efd421dad5b7fde1aa00')}
        >
          <FormText />
        </Form.Item>

        {/* 开始和结束日期 */}
        <Form.Item
          name="dateRange"
          label={locale('提交日期', 'library.1de8349a0ae081c3b8c4d4a1951e8562')}
        >
          <FormText />
        </Form.Item>

        <Form.Item
          name="employee"
          label={locale('客户经理', 'library.bd839db0d5d951346fdc0d235811039b')}
        >
          <FormText />
        </Form.Item>

        <Form.Item
          name="remark"
          label={locale('订单备注', 'library.bb84d6eab6156242125acd22d08f367d')}
        >
          <FormText />
        </Form.Item>

        <Form.Item
          name="orderStatus"
          label={locale('状态', 'library.3fea7ca76cdece641436d7ab0d02ab1b')}
        >
          <FormText />
        </Form.Item>
      </Form>
    </Layout.Main>
  )
}

export default Main
