const axios = require('axios')
const url = 'http://aidemo.youdao.com/trans'

const byTranslation = async (content) => {
  const params = {
    q: content,
    from: 'Auto',
    to: 'Auto',
  }

  const res = await axios.get(url, { params })
  const translation = res.data.translation?.[0] || ''
  let words = translation.replace(/[^a-zA-Z ]+/g, ' ').trim().split(/\s+/)

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
