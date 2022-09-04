// Code your solutions in this file

const array = []
function writeCards(array, eventName) {
  for (let i = 0; i < array.length; i++) {
    array[i] = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`
  }
  return array
}

function countDown(number){
  while (number >= 0)
  console.log(number--)
}
