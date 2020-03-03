import '../sass/styles.scss'

const start = () => {
  // example code
  const helloDiv = document.createElement('div')
  helloDiv.textContent = 'hello world'
  // end example code

  const root = document.getElementById('root')
  root.replaceChild(helloDiv, root.childNodes[0])
}

start()
