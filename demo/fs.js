// file system
const fs = require('fs')
// path
const path = require('path')
// створення папки

// якщо ми працюємо з асинхронними операціями в node
// то завжди перший параметр в callback - error

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Папка створена')
// })

/* // створення файлів
const filePath = path.join(__dirname, 'test', 'text.txt')
// метод writeFile перезаписує існуючий файл
fs.writeFile(filePath, 'Hello NodeJS', (err) => {
  if (err) {
    throw err
  }
  console.log('Файл створений')
  // аналогічний метод по параметрах writeFile - appendFile
  // дозаписує існуючий файл
  fs.appendFile(filePath, '\nHello Again', (err) => {
    if (err) {
      throw err
    }
    console.log('Файл створений 2')
  })
}) */

// читання файлів
const filePath = path.join(__dirname, 'test', 'text.txt')
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw e
  }

  console.log(content)

  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
})