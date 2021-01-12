document.getElementById('solve').addEventListener('click', circumfrence)

function circumfrence () {
  let diameter = document.getElementById('diameter').value
  diameter = parseInt(diameter)
  let circumfrence = Math.PI * diameter
  circumfrence = parseInt(circumfrence)
  document.getElementById('answer').value = circumfrence
}
