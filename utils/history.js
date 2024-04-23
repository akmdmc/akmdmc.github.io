let historyArr = []
const div = document.createElement('div')
div.style = 'position: fixed; top: 0; left: 0; width: 50vw; height: 50vh; background-color: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 9999;word-wrap: break-word;overflow-y: auto;padding: 10px 15px;'
document.body.appendChild(div)
function addOneHistory(history, prefix = '') {
  historyArr.push(history)
  const container = document.createElement('div')
  container.style = 'color: white;text-align: left;padding: 0 10px 0 30px;text-indent: -30px;'
  let newHistory = history
  try {
    newHistory = JSON.parse(history)
  }
  catch (e) {
    console.log(e)
  }
  let innerText = ''
  if (typeof newHistory === 'object') {
    for (let key in newHistory) {
      innerText += '' + key + ': ' + newHistory[key] + '\n'
    }
    innerText = historyArr.length + '. ' + prefix + ' {\n' + innerText + '}\n'
  } else {
    innerText = historyArr.length + '. ' + newHistory
  }
  container.innerText = innerText
  div.appendChild(container)
}
