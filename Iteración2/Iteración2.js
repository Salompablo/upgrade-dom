window.onload = () => {
    let body = document.querySelector("body")

    let newDiv = document.createElement("div")
    body.appendChild(newDiv)
    
    let newP = document.createElement("p")
    let newDivWithP = document.createElement("div")
    newDivWithP.innerText = "p"
    newDivWithP.appendChild(newP)
    body.appendChild(newDivWithP)

    let otroDiv = document.createElement("div")
    for(let i = 0; i < 5 ; i++){
        let p = document.createElement("p")
        p.innerText = i + 1
        div6P.appendChild(p)
    }
    body.appendChild(div6P)

    let nuevaP = document.createElement("p")
    nuevaP.innerText = "Soy dinámico!"
    body.appendChild(nuevaP)

    let h2NuevoTexto = document.querySelector("h2.fn-insert-here")
    h2NuevoTexto.innerText = "Wubba Lubba dub dub"

    const apps = ['Facebook', 'Netflix', 'Instagram', 
    'Snapchat', 'Twitter'];
        let ulApps = document.createElement("ul")
        apps.forEach((item)=> {
            let li = document.createElement("li")
            li.innerText = item
            ulApps.appendChild(li)
    })
    body.appendChild(ulApps)

    let toDelete = document.querySelectorAll(".fn-remove-me")
    toDelete.forEach((value)=> {
        value.remove()
    })

    let allDivs = document.querySelectorAll("div")
    let pConTexto = document.createElement("p")
    pConTexto.innerText = "Voy en medio!"
    body.insertBefore(pConTexto, allDivs[1])

    let divClassFn = document.querySelectorAll(".fn-insert-here")
    divClassFn.forEach((item) => {
        let p = document.createElement("p")
        p.innerText = "Voy dentro!"
        item.appendChild(p)
    })

}