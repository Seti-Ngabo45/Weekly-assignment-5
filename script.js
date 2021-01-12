function solveCircumfrence() {
  let diameter = document.getElementById('diameter').value
  diameter = parseInt(diameter)
  let circumfrence = Math.PI * diameter
  circumfrence = parseInt(circumfrence)
  document.getElementById('answer').value = circumfrence
}
