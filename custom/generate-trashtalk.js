const targetItems = require('./target-items.json')
const phrase = require('./phrase.json')

// dummy target
// const target = 'engineer'

function generateTrashtalk(target) {
  // task
  const taskArr = targetItems[target].task
  const task = taskArr[Math.floor(Math.random() * taskArr.length)]

  // phrase
  const adjective = phrase[Math.floor(Math.random() * phrase.length)]

  return `身為一位${targetItems[target].title}，${task}，${adjective}`
}

module.exports = generateTrashtalk
