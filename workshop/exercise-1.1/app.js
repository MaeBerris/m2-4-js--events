// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let click = false

window.addEventListener('click', function (event){
    click = true
    console.log(click)
})

setTimeout(function (){
    if(click === true){
        console.log("this works")
        let p = document.getElementById('result')
        p.innerText= "You've won"
    }else{
        console.log("this does too")
        let p = document.getElementById('result')
        p.innerText= "You've lost"
    }
} , 1000)