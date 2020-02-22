let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/kcl.png') {
        myImage.setAttribute('src', 'images/KCL-logo-2.jpg');
    } 
    else {
        myImage.setAttribute('src', 'images/kcl.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 
        "Welcome to King's College London, " + myName + "!";
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 
    "Welcome to King's College London, " + storedName + "!";
}

myButton.onclick = function() {
    setUserName();
}