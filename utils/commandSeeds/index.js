const vscode = require('vscode')

const components = require('./../components')
const insertComponent = require('./insertComponent')
const insertImport = require('./insertImport')

// 插入代码片段
function commandSeeds(context) {
  const disposable = vscode.commands.registerCommand('seeds', function () {
    // 弹出选择列表
    vscode.window.showQuickPick(Object.keys(components)).then(async (componentName) => {
      if (!componentName) {
        return
      }
      // 插入import
      insertImport(componentName)
      // 插入代码
      const item = components[componentName]
      insertComponent(item.code)
    })
  })

  context.subscriptions.push(disposable)
}

module.exports = commandSeeds
