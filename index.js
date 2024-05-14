const createScratchCard = (canvasId) => {
  let canvas = document.getElementById(canvasId)
  let context = canvas.getContext('2d')

  const init = () => {
    context.fillStyle = 'grey'
    context.fillRect(0, 0, 300, 100)
  }

  init()

  let isDragging = false

  const scratch = (x, y) => {
    context.globalCompositeOperation = 'destination-out'
    context.beginPath()
    context.arc(x, y, 25, 0, 2 * Math.PI)
    context.fill()
  }

  canvas.addEventListener('mousedown', (event) => {
    isDragging = true
    scratch(event.offsetX, event.offsetY)
  })

  canvas.addEventListener('mousemove', (event) => {
    if (isDragging) {
      scratch(event.offsetX, event.offsetY)
    }
  })

  canvas.addEventListener('mouseup', () => {
    isDragging = false
  })
}

arrayOqueFazer = [
  'Massagear',
  'Lamber',
  'Chupar',
  'Mordiscar',
  'Ele decide',
  'Acariciar',
  'Ela decide',
  'Beijar',
]

arrayParteCorpo = [
  'Bunda',
  'Pescoço',
  'Coxas',
  'Virilha',
  'Parte íntima',
  'Boca',
  'Pés',
  'Peito',
]

const redirecionar = () => {
  window.location.reload()
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let aux = array[i]
    array[i] = array[j]
    array[j] = aux
  }
  return array
}

const initCode = (id, name) => {
  let code = document.getElementById(id)
  code.innerHTML = name
}

const fillFields = () => {
  shuffle(arrayOqueFazer)
  shuffle(arrayParteCorpo)
  console.log(arrayOqueFazer)
  console.log(arrayParteCorpo)

  for (let i = 1; i <= 16; i++) {
    createScratchCard('scratch-card' + i)
    if (i <= 8) {
      initCode('oqueFazer' + i, arrayOqueFazer[i - 1])
      initCode('parteCorpo' + i, arrayParteCorpo[i - 1])
    }
  }
}

fillFields()
