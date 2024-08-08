const vscode = require('vscode')
const insertImport = require('./../command/insertImport')
const components = require('./../utils/components')

// 替换代码
function replaceCode({ edit, document, lineText, position }) {
  console.log(`trigger replace`)
  for (let componentName in components) {
    if (lineText.replace(/\s+$/, '').endsWith(componentName)) {
      console.log(`Auto complete${componentName}`)

      const newText = lineText.replace(`${componentName}`, components[componentName].code)
      edit.replace(
        document.uri,
        new vscode.Range(position.line, 0, position.line, lineText.length),
        newText
      )
      vscode.workspace.applyEdit(edit)
      // 插入import
      setTimeout(() => {
        insertImport(componentName)
      }, 100)
      break
    }
  }
}

// 插入代码片段
function coding(context) {
  const listener = vscode.workspace.onDidChangeTextDocument((event) => {
    // 获取变化的范围
    const changeRanges = event.contentChanges
    const edit = new vscode.WorkspaceEdit()
    const document = event.document
    const position = changeRanges[0].range.start
    const lineText = document.lineAt(position.line).text

    for (const change of changeRanges) {
      // 按Tab键补全代码
      if (change.text === ' ' || change.text === '\t' || change.text === '\n') {
        replaceCode({ edit, document, lineText, position })
      }
    }
  })

  context.subscriptions.push(listener)
}

module.exports = coding
