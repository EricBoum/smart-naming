const configKey = 'smart-naming'

const fnConfig = {
  '--setMaxWord': {
    key: 'maxWord',
    hint: '✅ 已限制最大单词数量为'
  },
  '--setMaxWordLength': {
    key: 'maxWordLength',
    hint: '✅ 单个单词最大长度已限制为'
  }
}

module.exports = {
  configKey,
  fnConfig
}
