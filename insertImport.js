const vscode = require('vscode')
const recast = require('recast')

async function insertImport(componentName) {
  // 读取文件内容
  const editor = vscode.window.activeTextEditor
  if (!editor) {
    console.log('vscode.window.activeTextEditor is not found')
    return false
  }
  const document = editor.document
  const code = document.getText()

  // 解析代码为AST
  const ast = recast.parse(code, {
    parser: require('recast/parsers/babel')
  })

  // 遍历AST，检查是否已导入componentName
  let importAlreadyExists = false
  recast.visit(ast, {
    visitImportDeclaration(path) {
      const importSpecifiers = path.node.specifiers.map((specifier) => specifier.local.name)
      if (importSpecifiers.includes(componentName)) {
        importAlreadyExists = true
        console.log('This component is already exists!')
        return false // 停止遍历
      }
      this.traverse(path)
    }
  })

  // 如果没有导入componentName，则添加import语句
  if (!importAlreadyExists) {
    const importDeclaration = recast.parse(`import { ${componentName} } from 'seedsui-react';\n`)
      .program.body[0]
    ast.program.body.unshift(importDeclaration)
    console.log(`This component was not imported`)
  }

  // 生成修改后的代码
  const newCode = recast.print(ast).code

  // 将修改后的代码写回文件
  const edit = new vscode.WorkspaceEdit()
  const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(code.length))

  edit.replace(document.uri, fullRange, newCode)

  await vscode.workspace.applyEdit(edit)

  console.log(`Import ok!`)
  return true
}

module.exports = insertImport
