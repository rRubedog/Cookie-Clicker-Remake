let clickerCookies = 0.5;

// Number of Clickers
let clickers = 0;

// Create Clickers Counter
const clickerCount = document.createElement("span");
const clickerCook = document.createTextNode(clickers);
clickerCount.setAttribute("id", "clickers");
clickerCount.appendChild(clickerCook);

const clickCount = document.getElementById("clickers-wrapper");
clickCount.appendChild(clickerCount);

let clicker_cost = 15;

// Clicker Count increase
function clickerIncrease() {
  if (i >= clicker_cost) {
		numOfBuildings += 1;
		cookiesPerSecond += clickerCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    i = i - clicker_cost;
    clickers = clickers + 1;
    document.getElementById("clickers").innerHTML = +clickers;
    clicker_cost = Math.floor(clicker_cost + (clicker_cost/5 + clickers/2));
    document.getElementById("clicker-cost").innerHTML = +clicker_cost;
    clickerAddCookies();
  }
}

function clickerAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + clickerCookies;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function clickerAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    clickerAdded();
		updateTitle();
  }
}

// Add Clicker Cost
const clCost = document.createElement("span");
const clCostvar = document.createTextNode(clicker_cost);
clCost.setAttribute("id", "clikcer-cost");
clCost.appendChild(clCostvar);

const cliCost = document.getElementById("clicker-cost");
cliCost.appendChild(clCost);

let cursorUpgradeCost = 1000;
let requiredClickers = 5;
document.getElementById("curosr-upgrade-button").innerHTML = "Cursors give 2x more if you already have " + requiredClickers;

// Create cursor upgrade
function cursorUpgrade() {
  if (i >= cursorUpgradeCost) {
		if(clickers >= requiredClickers) {
			clickerCookies = clickerCookies * 2;
			requiredClickers += 10;
	    i = i - cursorUpgradeCost;
	    cookiesPerClick += 2;
	    cursorUpgradeCost = cursorUpgradeCost * 2;
	    document.getElementById("cursor-upgrade-cost").innerHTML = +cursorUpgradeCost;
			document.getElementById("curosr-upgrade-button").innerHTML = "Cursors give 2x more if you already have " + requiredClickers;
		}
   
  }
}

// Create cursor upgrade cost
const cursorUCost = document.createElement("span");
const cursorUCostNode = document.createTextNode(cursorUpgradeCost);
cursorUCost.setAttribute("id", "cursor-upgrade-cost");
cursorUCost.appendChild(cursorUCostNode);

const cursorUCostWrapper = document.getElementById("cursor-upgrade-price");
cursorUCostWrapper.appendChild(cursorUCost);