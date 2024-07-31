import React from 'react'
import { getOption } from './options'

// 特殊value
function Special({ value }) {
  return (
    <div>
      {/* 选项 */}
      {getOption(value?.radio)?.name}
    </div>
  )
}

export default Special
