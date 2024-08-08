const vscode = require('vscode')

function getProjectName() {
  return vscode.workspace.workspaceFolders?.[0]?.name || ''
}
module.exports = getProjectName
