let historyArr = []
const div = document.createElement('div')
div.style = 'position: fixed; top: 0; left: 0; width: 50vw; height: 50vh; background-color: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 9999;'
document.body.appendChild(div)
function addOneHistory(history) {
  historyArr.push(history)
  const p = document.createElement('p')
  p.style = 'color: white'
  p.innerText = historyArr.length + '. ' + history
  div.appendChild(p)
}
