const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
//destructivelyAppendKitten("Ralph")
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
//destructivelyPrependKitten("Bob")
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  newKitten = kittens.push(name)
  return newKitten
}
appendKitten("Broom")





