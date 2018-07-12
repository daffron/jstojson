const fs = require('fs')

const readPath = process.argv[2]
const writePath = process.argv[3]

if (!readPath) {
  throw new Error('No read path found')
}

if (!writePath) {
  throw new Error('No write path found')
}

const inputData = require(readPath)

const json = JSON.stringify(inputData, null, 2)

if(!json) {
  throw new Error('Unable to parse js object, or file not found')
}

fs.writeFile(writePath, json, 'utf8', err => {
  if (err) throw new Error('Error writing file')
  console.log('Successfuly written file to ', writePath)
})

