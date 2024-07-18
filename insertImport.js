const vscode = require('vscode')
const recast = require('recast')

async function validateImport(componentName) {
  const editor = vscode.window.activeTextEditor
  if (editor) {
    const document = editor.document
    const code = document.getText()
    const ast = recast.parse(code, {
      parser: require('recast/parsers/typescript')
    })

    let importAlreadyExists = false
    recast.visit(ast, {
      visitImportDeclaration(path) {
        const importSpecifiers = path.node.specifiers.map((specifier) => specifier.local.name)
        if (importSpecifiers.includes(componentName)) {
          importAlreadyExists = true
          return false // Stop visiting
        }
        this.traverse(path)
      }
    })

    if (!importAlreadyExists) {
      const importDeclaration = recast.parse(`import { ${componentName} } from 'seedsui-react';\n`)
        .program.body[0]
      ast.program.body.unshift(importDeclaration)
    }

    const newCode = recast.print(ast).code
    const edit = new vscode.WorkspaceEdit()
    const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(code.length))

    edit.replace(document.uri, fullRange, newCode)

    await vscode.workspace.applyEdit(edit)

    return true
  }
  return false
}
module.exports = validateImport
