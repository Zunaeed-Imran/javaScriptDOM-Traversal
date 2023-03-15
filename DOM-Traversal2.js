const parent = document.querySelectorAll('.parent')

parent.forEach(changeColor)

function changeColor(element) {
  element.style.backgroundColor = "#333"
}