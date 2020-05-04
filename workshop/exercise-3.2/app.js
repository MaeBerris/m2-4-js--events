let main = document.querySelector('#main');

for (i = 0; i < 20; i++){
    let button = document.createElement('button');
    main.appendChild(button)

    button.id =`button${i+1}`
    button.innerText=`button-${i+1}`

    button.addEventListener('click', function(){
        button.classList.toggle('green')
    })
}