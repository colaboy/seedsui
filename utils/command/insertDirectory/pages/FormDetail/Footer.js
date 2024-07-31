import React from 'react'
import locale from 'library/utils/locale'

import { Layout, Button } from 'seedsui-react'

// 侧边查询底部按钮
export default function FilterContent({ onSave }) {
  return (
    <Layout.Footer className="listpicker-flat-footer">
      <div className="listpicker-flat-footer-button flex-1 color-primary">
        {locale('拜访', 'library.10f31bc81c2384f0909a036aa73fd5ce')}
      </div>
      <div className="listpicker-flat-footer-button flex-1">
        {locale('编辑', 'library.95b351c86267f3aedf89520959bce689')}
      </div>
      <div className="listpicker-flat-footer-button flex-1">
        {locale('退回', 'library.ada958b18039faf6d63be27842e1df54')}
      </div>
      <div className="listpicker-flat-footer-button flex-1">
        <i className="icon icon-moreh-fill"></i>
      </div>
    </Layout.Footer>
  )
}
