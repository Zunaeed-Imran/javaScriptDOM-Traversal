const grandparent = document.querySelector(".grandparent")

const children = grandparent.querySelectorAll(".child")

children.forEach(changeColor)

function changeColor(element) {
  element.style.backgroundColor ="#333"
}


