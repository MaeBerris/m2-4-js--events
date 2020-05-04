let main = document.querySelector('#main');

for (i = 0; i < 20; i++){
    let button = document.createElement('button');
    main.appendChild(button)

    button.id =`button${i+1}`
    button.innerText=`button-${i+1}`
    button.style.position = 'absolute';
    button.style.left =`${Math.random()*85}vw`
    button.style.top =`${Math.random()*85}vh`

    button.addEventListener('click', function(){
        button.classList.toggle('green')
    })
}