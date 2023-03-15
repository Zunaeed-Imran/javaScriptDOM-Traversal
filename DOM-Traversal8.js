const grandparent = document.querySelector(".grandparent")
const parent = Array.from(grandparent.children)
const parentone = parent[0]
const children = parentone.children

changeColor(children[0])

function changeColor(element) {
  element.style.backgroundColor ="#333"
}


