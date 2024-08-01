const vscode = require('vscode')

const components = require('./../components')

// 插入代码片段
function coding(context) {
  const listener = vscode.workspace.onDidChangeTextDocument((event) => {
    const editor = vscode.window.activeTextEditor
    if (editor && event.document === editor.document) {
      const changes = event.contentChanges
      for (let change of changes) {
        const text = change.text
        const range = change.range

        // 检测输入
        if (components[text] && range.start.character >= 1) {
          console.log(`Listening to the ${text}`)
          const line = editor.document.lineAt(range.start.line)
          const lineText = line.text

          // 确保只有<Calendar而不是<Calendar onChange={() => {}}/>或其他变体
          const calendarIndex = lineText.indexOf(`<${text}`)
          if (calendarIndex !== -1) {
            console.log(`Auto complete${text}`)
            const edit = new vscode.WorkspaceEdit()
            const startPos = range.start.with(undefined, calendarIndex)
            const endPos = range.end.with(undefined, calendarIndex + 9)
            const calendarRange = new vscode.Range(startPos, endPos)

            edit.replace(editor.document.uri, calendarRange, components[text].code)
            vscode.workspace.applyEdit(edit)
          }
        }
      }
    }
  })

  context.subscriptions.push(listener)
}

module.exports = coding
