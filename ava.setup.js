require('browser-env')()
const hooks = require('require-extension-hooks')

hooks('vue').plugin('vue').push()
hooks(['vue', 'js']).exclude(({ filename }) => filename.match(/\node_modules\//)).plugin('babel').push()

// remove annoying console messages
const Vue = require('vue')
Vue.config.productionTip = false
Vue.config.devtools = false 

// 🐞 https://github.com/prettier/prettier/issues/5018
window.Date = global.Date = Date

