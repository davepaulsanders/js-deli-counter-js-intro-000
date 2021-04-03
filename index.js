
function takeANumber(katzLine, name){
katzLine.push(name)
  return `Welcome, ${name}. You are number ${katzLine.length} in line.`

}
// maybe I need a counter to give each name it's own index?  I thought they should index automatically but I'm not sure
// I think you would need a while loop, because you don't actually know how many they are going to add

function currentLine() {
  if (katzLine.length >= 1) {
  return katzLine
} else {
  return "The line is currently empty."
}
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var firstInLine = katzDeliLine.shift()
    return "Currently serving " + firstInLine + "."

} else {
  return 'There is nobody waiting to be served!'
}
}
