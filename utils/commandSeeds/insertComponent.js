const vscode = require('vscode')

// 插入代码片段
function insertComponent(snippet) {
  const editor = vscode.window.activeTextEditor
  if (editor) {
    editor.edit((editBuilder) => {
      editBuilder.insert(editor.selection.active, snippet)
    })
  }
}

module.exports = insertComponent
