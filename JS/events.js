console.log('Welcome to jS DOM EVENTS')

// option 1: directly set on the html element
// <button onclick="console.log(7)">click me</button>


// option 2: add onclick function (most of the time use karbo)
//<button onclick="makeRed()">Make red</button> 
function makeRed(){
    document.body.style.backgroundColor ='red';
}


// option 3: add onclick, function and also using id form html
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue; //akhane function k call karte hobe na

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}


//  option 3 another: add onclick, function in the line
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}


//option 4: addEvenListener
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink (){
    document.body.style.backgroundColor = 'pink'
}

//option 4 another: addEvenListener , function in the line
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green'});


// option 4 final: Important we will use sometimes
document.getElementById('make-orange').addEventListener('click', function (){  // function ar nam dileo hobe but amra dibona
document.body.style.backgroundColor = 'orange'
}) 