#!/usr/bin/env node
const { run } = require('../src')
const chalk = require('chalk')
const { configKey, fnConfig } = require('../src/libs/const')

async function main() {
  const { default: Configstore } = await import('configstore')
  const config = new Configstore(configKey)

  const args = process.argv.slice(2)

  switch (args[0]) {
    case '--view':
      const { maxWordLength = 0, maxWord = 0 } = config.all
      console.log(`单个单词最大长度`, chalk.green(maxWordLength || '∞'))
      console.log(`最大单词数量`, chalk.green(maxWord || '∞'))
      process.exit(0)
      break
    case '--removeSet':
      config.clear()
      console.log('✅ 已清空配置项')
      process.exit(0)
      break
    case '--setMaxWord':
    case '--setMaxWordLength':
      const { key, hint } = fnConfig[args[0]]
      if (!args[1]) {
        console.log(`⚠️ 请输入限制数字`)
        process.exit(1)
      }
      config.set(key, parseInt(args[1]))
      console.log(`${hint}${args[1]}`)
      process.exit(0)
      break
    default:
      const input = args.join(' ')
      run(input)
      break
  }

}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
