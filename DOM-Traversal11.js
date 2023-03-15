const childOne = document.querySelector("#child-one")

const childTwo = childOne.nextElementSibling

changeColor(childTwo)



function changeColor(element) {
  element.style.backgroundColor ="#333"
}


