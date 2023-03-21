const segundosPonteiro = document.querySelector(".ponteiro.segundos")
const minutosPonteiro = document.querySelector(".ponteiro.minutos")
const horasPonteiro = document.querySelector(".ponteiro.horas")

const setRotation = (element, rotationPorcentagem) => {
  element.style.setProperty("--rotation", rotationPorcentagem * 360)
}

const setClock = () => {
  const currentDate = new Date()

  const segundosPorcentagem = currentDate.getSeconds() / 60
  const minutosPorcentagem =
    (segundosPorcentagem + currentDate.getMinutes()) / 60
  const horasPorcentagem = (minutosPorcentagem + currentDate.getHours()) / 12

  setRotation(segundosPonteiro, segundosPorcentagem)
  setRotation(minutosPonteiro, minutosPorcentagem)
  setRotation(horasPonteiro, horasPorcentagem)
}

setClock()

setInterval(setClock, 1000)
