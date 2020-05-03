
let timePrint = setInterval(function(){
    let timeObject = new Date()
    let currentTime = timeObject.getHours() +":"+ timeObject.getMinutes() 
    
    console.log(currentTime)
    document.querySelector("#currentTime p").innerText = currentTime
},1000)


let isStopped = false


function timer (){

    let seconds = 0;
    let minutes = 0;
    let miliseconds = 0;

let timerInterval = setInterval(function (){
        miliseconds = miliseconds + 10
        if(miliseconds >= 1000){
        seconds = seconds + 1;
        miliseconds = 0
        }
        if(seconds >= 60){
            seconds = 0
            minutes = minutes + 1
        }
        document.querySelector("#minutes").innerText = minutes
        document.querySelector("#seconds").innerText = seconds
        document.querySelector("#mili").innerText = miliseconds

        if(isStopped === true){
        clearInterval(timerInterval)
        }

    },10)
};



let stopButton = document.querySelector('#stopButton')

let startButton = document.querySelector("#start")

startButton.addEventListener('click', function start(){
    timer()
    startButton.removeEventListener('click', start)
})

stopButton.addEventListener('click', function(){
    isStopped = true
})




function CountDowntimer (num1){

    let seconds = num1;
    let miliseconds = 1000;

let timerInterval = setInterval(function (){
        miliseconds = miliseconds - 10
        if(miliseconds <= 0){
        seconds = seconds - 1;
        miliseconds = 1000
        }
        document.querySelector("#countdownSeconds").innerText = seconds
        document.querySelector("#countdownMili").innerText = miliseconds

        if(seconds === 0 && miliseconds === 10){
            console.log("over")
            window.alert("The time is up !")
            clearInterval(timerInterval)
            
        }
    },10)
};

let submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', function submit (){
    let num1 = document.querySelector('#formInput').value
    console.log(num1)
    CountDowntimer(num1)
})