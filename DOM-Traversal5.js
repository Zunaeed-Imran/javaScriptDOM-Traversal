const gradnparent = document.getElementById("grandparent-id")
const parent =Array.from (document.getElementsByClassName("parent"))

parent.forEach(changeColor)


function changeColor(element) {
  element.style.backgroundColor ="#333"
}


