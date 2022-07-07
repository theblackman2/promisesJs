
const promise = ()=>{
  return new Promise((resolve, reject)=>{
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch((data) => reject("erreur"))
  })
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button)=>{
  button.addEventListener("click", (e) => {
    button.parentElement.children[0].style.opacity = 1
    button.previousElementSibling.removeAttribute("src")
    promise().then(
      (data)=>{
        button.previousElementSibling.src = data.results[0].picture.large
        button.parentElement.children[0].style.opacity = 0
      }
    ).catch((error) => {
      button.previousElementSibling.src = "erreur.png"
      button.parentElement.children[0].style.opacity = 0
    })
  })
})

