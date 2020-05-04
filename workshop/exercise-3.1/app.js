for (i = 0; i < 20; i++){
    let main = document.querySelector('#main')

    let button = document.createElement('button')
    
    main.appendChild(button)
    button.innerText = `Button ${i + 1}`
    button.id = `button${i+1}`
    

    button.addEventListener('click', function (){
        button.style.backgroundColor = "green"
    })
}

// function changeColor (event){
//     let eventLocation = event.target
//     let locationId = eventLocation.id
//     document.
// }