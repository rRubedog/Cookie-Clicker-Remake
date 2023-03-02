// Number of Cookies (I really don't want to change the name that would take too much effort sorry.)
let i = 0;
let word = 'Cookies';
let numOfBuildings = 0;
let cookiesPerSecond = 0;
let cookiesPerSecondWord = 'per second: ';
let timerSpeed = 2000;

// Adding page title


document.title  = i + " Cookies";
console.log(document.title);

let cookiesPerClick = 1;

// Create Cookie Counter
const count = document.createElement("span");
const cook = document.createTextNode(Math.ceil(i));
count.setAttribute("id", "cookie-count");
count.appendChild(cook);

const cookieCount = document.getElementById("cookies");
cookieCount.appendChild(count);

// Create Cookie Word next to Cookie Counter
const cCount = document.createElement("span");
const cCook = document.createTextNode(word);
cCount.setAttribute("id", "word");
cCount.appendChild(cCook);

const coCount = document.getElementById("cookies-word");
coCount.appendChild(cCount);

// Display number of cookies
// document.getElementById('cookies').innerHTML = i;

function cookiesIncrease() {
  i = i + cookiesPerClick;
  document.getElementById("cookies").innerHTML = +i;
	updateTitle();
}

function updateTitle(){
	document.title  = i + " Cookies";
	console.log(document.title);
}

// Create Cookies Per Second counter 
const cPS = document.createElement("span");
const cPSNode = document.createTextNode(cookiesPerSecond);
cPS.setAttribute("id", "cookies-per-second");
cPS.appendChild(cPSNode);

const coPS = document.getElementById("cookies-per-second-counter");
coPS.appendChild(cPS);

// Create cookies Per Second Word
const cPSW = document.createElement("span");
const cPSWNode = document.createTextNode(cookiesPerSecondWord);
cPSW.setAttribute("id", "cookies-per-second-word");
cPSW.appendChild(cPSWNode);

const coPSW = document.getElementById("cookies-per-second-word-display");
coPSW.appendChild(cPSW);