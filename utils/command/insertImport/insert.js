const recast = require('recast')

// 已经有seedsui-react的import语句，但没有Calendar，添加Calendar
async function insert(path, componentName) {
  path.node.specifiers.unshift(
    recast.types.builders.importSpecifier(recast.types.builders.identifier(componentName))
  )
  console.log(`${componentName} was not imported`)
}

module.exports = insert
