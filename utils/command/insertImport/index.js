const vscode = require('vscode')
const recast = require('recast')
const exists = require('./exists')
const create = require('./create')
const insert = require('./insert')
const save = require('./save')

async function insertImport(componentName) {
  if (componentName.indexOf('<') !== -1) {
    componentName = componentName.replace('<', '')
  }

  // 读取文件内容
  const editor = vscode.window.activeTextEditor
  if (!editor) {
    console.log('vscode.window.activeTextEditor is not found')
    return false
  }
  const document = editor.document
  const code = document.getText()

  // 解析代码为AST
  let ast = null
  try {
    ast = recast.parse(code, {
      parser: require('recast/parsers/babel')
    })
  } catch (error) {
    console.log(error)
    return false
  }

  // This component was imported, 0.无 path.只引入了seedsui-react 2.seedsui-react和组件都引入了
  const existsCount = exists(ast, componentName)
  if (existsCount === 2) {
    return
  }

  // Neither SeedsUI nor component were imported, create import
  if (existsCount === 0) {
    create(ast, componentName)
  }
  // Only SeedsUI was imported, import component
  else {
    insert(existsCount, componentName)
  }

  // 生成修改后的代码
  const newCode = recast.print(ast).code

  // 将修改后的代码写回文件
  save(newCode)
  return true
}

module.exports = insertImport
