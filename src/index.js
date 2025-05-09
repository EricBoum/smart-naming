const { byTranslation } = require('./libs/byTranslation')
const chalk = require('chalk')

const run = async (desc) => {
  if (!desc) {
    console.log(chalk.red('❗ 请输入描述'))
    process.exit(1)
  }
  const returnData = await byTranslation(desc)
  console.log(chalk.blue(`大驼峰:`), returnData.hump)
  console.log(chalk.blue(`小驼峰:`), returnData.littleHump)
  console.log(chalk.blue(`破折号:`), returnData.hyphen)
  console.log(chalk.blue(`下划线:`), returnData.underline)
}

module.exports = { run }
