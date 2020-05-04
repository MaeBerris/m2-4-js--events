let startButton = document.querySelector('#startButton')
// This creates a random number between 5 and 10
let randomNumOfButtons = Math.floor(Math.random()*5) + 5;
let numberOfClicks = 0;

startButton.addEventListener('click', function StartGame(){
    startButton.style.display = 'none';
    // This makes the buttons appear
    appearButton(randomNumOfButtons)
})

function appearButton (numberOfButtons){
    for (i = 0; i < numberOfButtons; i++){
        let button = document.createElement('button');
        main.appendChild(button)
    
        button.id =`button${i+1}`
        button.innerText=`Button-${i+1}`
        button.style.position = 'absolute';
        button.style.left =`${Math.random()*85}vw`
        button.style.top =`${Math.random()*85}vh`
    
        button.addEventListener('click', function(){
            button.classList.add('green')
            numberOfClicks = numberOfClicks + 1;
        })
    }
}

if(numberOfClicks > 3){
    console.log("you've won!")
}