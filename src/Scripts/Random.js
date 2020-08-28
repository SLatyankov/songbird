 let RandomNumber = () =>  {
  return randomNumb(144)
}

function randomNumb(max) {
  return Math.floor(Math.random()*max)
}
export default RandomNumber