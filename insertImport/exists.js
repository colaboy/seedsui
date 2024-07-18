const recast = require('recast')

// 遍历AST，检查是否已导入componentName
function exists(ast, componentName) {
  // 0.无 1.只引入了seedsui-react 2.seedsui-react和组件都引入了
  let existsCount = 0
  recast.visit(ast, {
    visitImportDeclaration(path) {
      const importSpecifiers = path.node.specifiers.map((specifier) => specifier.local.name)
      if (importSpecifiers.includes(componentName)) {
        existsCount = 2
        console.log('This component is already exists!')
        return false
      }

      const importSource = path.node.source.value
      if (importSource === 'seedsui-react') {
        console.log(`Only SeedsUI was imported, but the ${componentName} was not!`)
        existsCount = 1
        return false
      }

      this.traverse(path)
    }
  })
  return existsCount
}

module.exports = exists
