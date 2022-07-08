const buttons = document.querySelectorAll("button");
const promise = () => {
  return new Promise((resolve, reject)=>{
    fetch("https://randomuser.me/api/")
      .then((data) => data.json())
      .then((user) => resolve(user))
      .catch((erreur) => reject(erreur))
  })
}

buttons.forEach((button)=>{
  button.addEventListener("click", (e) => {
    button.parentElement.children[0].style.opacity = 1
    promise().then((user)=>{
      console.log("the")
      button.previousElementSibling.src = user.results[0].picture.large
    }).catch((erreur)=> {
      button.previousElementSibling.src = "erreur.png"
    }).finally(()=>{
      button.parentElement.children[0].style.opacity = 0

    })
  })
})
