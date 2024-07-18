// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

const components = require('./components')
const insertComponent = require('./insertComponent')
const insertImport = require('./insertImport')

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "seedsui" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand('seeds', function () {
    // 弹出选择列表
    vscode.window.showQuickPick(Object.keys(components)).then(async (componentName) => {
      if (!componentName) {
        return
      }
      // 插入import
      insertImport()
      // 插入代码
      const item = components[componentName]
      insertComponent(item.code)
    })
  })

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
