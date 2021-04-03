
function takeANumber(katzLine, name){
katzLine.push(name)
  return `Welcome, ${name}. You are number ${katzLine.length} in line.`

}

function currentLine(katzLine) {

for (var i = 1, i = katzLine.length, i++){
  return `The line is currently: ${i}. ${katzLine[i]}`
} else {
  return "The line is currently empty."
}
}

function nowServing(katzLine) {
  if (katzLine.length > 0){
    var firstInLine = katzLine.shift()
    return "Currently serving " + firstInLine + "."

} else {
  return 'There is nobody waiting to be served!'
}
}
