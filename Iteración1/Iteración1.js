window.onload = () => {
    let btnShowMe = document.querySelectorAll(".showme")
    console.log(btnShowMe)

    let labelCaught = document.querySelector("#pillado")
    console.log(labelCaught)

    let allP = document.querySelectorAll("p")
    console.log(allP)

    let allPokemonClass = document.querySelectorAll(".pokemon")
    console.log(allPokemonClass)

    let allTestMe = document.querySelectorAll('[data-function="testMe"]')
    console.log(allTestMe)

    console.log(allTestMe[2])
    console.log(allTestMe[2].innerText)
}
