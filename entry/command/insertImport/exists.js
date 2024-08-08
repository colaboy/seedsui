const recast = require('recast')

// 遍历AST，检查是否已导入componentName
function exists(ast, componentName, componentLibrary) {
  // 0.无 path.只引入了seedsui-react 2.seedsui-react和组件都引入了
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
      if (importSource === componentLibrary) {
        console.log(`Only ${componentLibrary} was imported, but the ${componentName} was not!`)
        existsCount = path
        return false
      }

      this.traverse(path)
    }
  })
  return existsCount
}

module.exports = exists
