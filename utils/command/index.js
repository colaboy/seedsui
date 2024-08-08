const vscode = require('vscode')

const components = require('./../utils/components')
const pages = require('./../utils/pages')
const getProjectName = require('./../utils/getProjectName')
const insertComponent = require('./insertComponent')
const insertImport = require('./insertImport')
const insertDirectory = require('./insertDirectory/index.js')

// 插入代码片段
function command(context) {
  const projectName = getProjectName()
  console.log('项目名称: ' + projectName)

  // 跳转官网
  const officialCommand = vscode.commands.registerCommand('official', function () {
    vscode.env.openExternal(vscode.Uri.parse('https://colaboy.github.io/seedsui-react'))
  })
  context.subscriptions.push(officialCommand)

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
  const pagesCommand = vscode.commands.registerCommand('pages', function (folderUri) {
    // 弹出选择列表
    vscode.window
      .showQuickPick(Object.keys(pages[projectName.includes('web') ? 'web' : 'mobile']))
      .then(async (pageName) => {
        if (!pageName) {
          return
        }
        insertDirectory(pageName, folderUri?.path)
      })
  })
  context.subscriptions.push(pagesCommand)
}

module.exports = command
