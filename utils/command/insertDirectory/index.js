const vscode = require('vscode')
const path = require('path')
// const fs = require('fs-extra')

async function insertDirectory() {
  const rootPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath
  if (!rootPath) {
    vscode.window.showErrorMessage('No folder or workspace opened')
    return false
  }
  const sourceDir = path.join(__dirname, 'pages/Edit') // 模板目录
  const destDir = path.join(rootPath, 'src') // 目标目录
  console.log(`检测到根目录为: ${sourceDir}, ${destDir}`)
  // try {
  //   await fs.copy(sourceDir, destDir)
  //   vscode.window.showInformationMessage('Template directory copied successfully')
  // } catch (err) {
  //   vscode.window.showErrorMessage(`Failed to copy template directory: ${err.message}`)
  // }
  return true
}

module.exports = insertDirectory
