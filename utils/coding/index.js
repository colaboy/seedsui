const vscode = require('vscode')

// const components = require('./../components')

// 插入代码片段
function coding() {
  vscode.workspace.onDidChangeTextDocument((event) => {
    console.log('1111')
    const editor = vscode.window.activeTextEditor
    if (editor && event.document === editor.document) {
      const changes = event.contentChanges
      for (let change of changes) {
        const text = change.text
        const range = change.range

        // 检测输入<Calendar
        if (text === 'Calendar' && range.start.character >= 1) {
          const line = editor.document.lineAt(range.start.line)
          const lineText = line.text

          // 确保只有<Calendar而不是<Calendar onChange={() => {}}/>或其他变体
          const calendarIndex = lineText.indexOf('<Calendar')
          if (calendarIndex !== -1 && !lineText.includes('onChange')) {
            const edit = new vscode.WorkspaceEdit()
            const startPos = range.start.with(undefined, calendarIndex)
            const endPos = range.end.with(undefined, calendarIndex + 9)
            const calendarRange = new vscode.Range(startPos, endPos)

            edit.replace(editor.document.uri, calendarRange, '<Calendar onChange={() => {}}/>')
            vscode.workspace.applyEdit(edit)
          }
        }
      }
    }
  })
}

module.exports = coding
