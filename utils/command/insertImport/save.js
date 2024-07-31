const vscode = require('vscode')

async function save(newCode) {
  const document = vscode.window.activeTextEditor.document
  const code = document.getText()

  const edit = new vscode.WorkspaceEdit()
  const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(code.length))

  edit.replace(document.uri, fullRange, newCode)

  await vscode.workspace.applyEdit(edit)

  console.log(`Import ok!`)
}

module.exports = save
