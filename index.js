const chalk = require('chalk')
const dataText = require('./data')

console.log(chalk.blue(dataText))
console.log('dirname', __filename)

/*
  по завмовчуванні node.js кожен модуль
  який представлений у вигляді файла огортається
  функцією. Виглядає це приблизно наступним чином

  (function(exports, require, module, __dirname, __filename) {
    // code
  }) 
*/