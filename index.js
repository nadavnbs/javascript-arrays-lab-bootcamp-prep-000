const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
var newKittens = []


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
  newKittens = [...kittens,name]
  return newKittens
}
function prependKitten(name){
  newKittens = [name,...kittens]
  return newKittens
}
function removeLastKitten(){
  newKittens = kittens.splise(2)
  return newKittens
}







