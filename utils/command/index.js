const vscode = require('vscode')

const components = require('./../components')
const pages = require('./../pages')
const insertComponent = require('./insertComponent')
const insertImport = require('./insertImport')
const insertDirectory = require('./insertDirectory/index.js')

// 插入代码片段
function command(context) {
  // 组件选择
  const componentsCommand = vscode.commands.registerCommand('components', function () {
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
  context.subscriptions.push(componentsCommand)

  // 页面选择
  const pagesCommand = vscode.commands.registerCommand('pages', function () {
    // 弹出选择列表
    vscode.window.showQuickPick(Object.keys(pages)).then(async (pageName) => {
      if (!pageName) {
        return
      }
      insertDirectory(pageName)
    })
  })
  context.subscriptions.push(pagesCommand)
}

module.exports = command
