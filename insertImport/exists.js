const recast = require('recast')

// 遍历AST，检查是否已导入componentName
function exists(ast, componentName) {
  let importAlreadyExists = false
  recast.visit(ast, {
    visitImportDeclaration(path) {
      const importSpecifiers = path.node.specifiers.map((specifier) => specifier.local.name)
      if (importSpecifiers.includes(componentName)) {
        importAlreadyExists = true
        console.log('This component is already exists!')
        return false // 停止遍历
      }
      this.traverse(path)
    }
  })
  return importAlreadyExists
}

module.exports = exists
