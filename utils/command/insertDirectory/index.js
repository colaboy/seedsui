const vscode = require('vscode')
const path = require('path')

const fs = require('fs')

// Recursion directory
function copyDirectory(source, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(source, { withFileTypes: true })

  for (let entry of entries) {
    const sourcePath = path.join(source, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destPath)
    } else {
      fs.copyFileSync(sourcePath, destPath)
    }
  }
}

// Entry choose
async function insertDirectory(pageName) {
  const rootPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath
  if (!rootPath) {
    vscode.window.showErrorMessage('No folder or workspace opened')
    return false
  }
  // Template Directory
  let sourceDir = path.join(rootPath, `src/library/components/Example/${pageName}`)
  // 模板目录不存在则插件里的代码
  if (!sourceDir) {
    sourceDir = path.join(__dirname, `pages/${pageName}`)
  }

  // Dest Directory
  const destDir = path.join(rootPath, `src/${pageName}`)
  console.log(`The directory is detected: ${sourceDir}, ${destDir}`)
  copyDirectory(sourceDir, destDir)
  return true
}

module.exports = insertDirectory
