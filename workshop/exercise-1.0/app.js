// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
const body = document.querySelector('body')

window.addEventListener('click', function (event) {
    console.log(event)
    let main = document.querySelector(".main");
    let notification = document.createElement("p");
    notification.innerText ="You did it, you clicked";
    main.appendChild(notification);
});
