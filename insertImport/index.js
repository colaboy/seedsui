const vscode = require('vscode')
const recast = require('recast')
const exists = require('./exists')
const create = require('./create')
const save = require('./save')

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

  // This component was imported
  const importAlreadyExists = exists(ast, componentName)
  if (importAlreadyExists) {
    return
  }

  // SeedsUI and this component both were imported, create import
  create(ast, componentName)

  // 生成修改后的代码
  const newCode = recast.print(ast).code

  // 将修改后的代码写回文件
  save(newCode)
  return true
}

module.exports = insertImport
