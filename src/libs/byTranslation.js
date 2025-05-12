const axios = require('axios')
const { configKey } = require('./const')
const url = 'http://aidemo.youdao.com/trans'
const byTranslation = async (content) => {
  const { default: Configstore } = await import('configstore')
  const config = new Configstore(configKey) || { all: {} }
  const { maxWordLength = 0, maxWord = 0 } = config.all

  const params = {
    q: content,
    from: 'Auto',
    to: 'Auto',
  }
  // 请求翻译后的数据
  const res = await axios.get(url, { params })
  const translation = res.data.translation?.[0] || ''
  let words = translation.replace(/[^a-zA-Z ]+/g, ' ').trim().split(/\s+/)
  // 长度限制
  if (maxWord) {
    words = words.slice(0, maxWord)
  }
  // 单词长度限制
  if (maxWordLength) {
    words = words.map(word => word.slice(0, maxWordLength))
  }

  const hump = words.map(word => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }).join('')
  const littleHump = hump.charAt(0).toLowerCase() + hump.slice(1)
  const hyphen = words.map(w => w.toLowerCase()).join('-')
  const underline = words.map(w => w.toLowerCase()).join('_')

  return {
    hump,
    littleHump,
    hyphen,
    underline
  }
}

module.exports = { byTranslation }
