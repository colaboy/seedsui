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
  const platform = projectName.includes('web') ? 'web' : 'mobile'

  // 跳转官网
  const officialCommand = vscode.commands.registerCommand('official', function () {
    vscode.env.openExternal(
      vscode.Uri.parse(
        platform === 'web' ? 'https://ant.design/' : 'https://colaboy.github.io/seedsui-react'
      )
    )
  })
  context.subscriptions.push(officialCommand)

  // 组件选择
  const componentsCommand = vscode.commands.registerCommand('components', function () {
    // 弹出选择列表
    vscode.window.showQuickPick(Object.keys(components[platform])).then(async (componentName) => {
      if (!componentName) {
        return
      }
      const item = components[platform][componentName]
      // 插入import
      insertImport(componentName, platform === 'web' ? 'antd' : 'seedsui-react')
      // 插入代码
      insertComponent(item.code)
    })
  })
  context.subscriptions.push(componentsCommand)

  // 页面选择
  const pagesCommand = vscode.commands.registerCommand('pages', function (folderUri) {
    // 弹出选择列表
    vscode.window.showQuickPick(Object.keys(pages[platform])).then(async (pageName) => {
      let sourcePath = pages[platform]?.[pageName]?.url
      if (!sourcePath) {
        vscode.window.showErrorMessage(`Option is not found: ${pageName}`)
        return
      }
      insertDirectory(pageName, sourcePath, folderUri?.path)
    })
  })
  context.subscriptions.push(pagesCommand)
}

module.exports = command
