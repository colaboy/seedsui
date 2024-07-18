const recast = require('recast')

// 创建import
async function create(ast, componentName) {
  const importDeclaration = recast.parse(`import { ${componentName} } from 'seedsui-react';\n`)
    .program.body[0]
  ast.program.body.unshift(importDeclaration)
  console.log(`Neither SeedsUI nor this component were imported`)
}

module.exports = create
