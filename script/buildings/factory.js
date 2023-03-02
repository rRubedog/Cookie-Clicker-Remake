let factoryCookies = 260;

// Number of Mines
let factories = 0;

// Create Farm Counter
const factorieCount = document.createElement("span");
const factorieCook = document.createTextNode(factories);
factorieCount.setAttribute("id", "factories");
factorieCount.appendChild(factorieCook);

const facCount = document.getElementById("factorie-wrapper");
facCount.appendChild(factorieCount);

let factorie_cost = 130000;

// Mine Count increase
function factorieIncrease() {
  if (i >= factorie_cost) {
		numOfBuildings += 1;
		cookiesPerSecond += factoryCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    i = i - factorie_cost;
    factories = factories + 1;
    document.getElementById("factories").innerHTML = +factories;
    factorie_cost = Math.ceil(factorie_cost + (factorie_cost/5 + factories/2));
    document.getElementById("factorie-cost").innerHTML = +factorie_cost;
    factorieAddCookies();
  }
}

function factorieAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + factoryCookies;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function factorieAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    factorieAdded();
		updateTitle();
  }
}

// Add Mine Cost
const factCost = document.createElement("span");
const factCostvar = document.createTextNode(factorie_cost);
factCost.setAttribute("id", "factorie-cost");
factCost.appendChild(factCostvar);

const factorieCost = document.getElementById("factorie-price");
factorieCost.appendChild(factCost);

let factorieUpgradeCost = 1000000;
let requiredFactories = 5;
document.getElementById("factorie-upgrade-button").innerHTML = "Factories give 2x more if you already have " + requiredFactories;

// Create factorie upgrade
function factorieUpgrade() {
  if (i >= factorieUpgradeCost) {
		if(factories >= requiredFactories) {
			requiredFactories += 10;
	    factoryCookies = factoryCookies * 2;
	    i = i - factorieUpgradeCost;
	    factorieUpgradeCost = factorieUpgradeCost * 2;
	    document.getElementById("factorie-upgrade-cost").innerHTML = +factorieUpgradeCost;
			document.getElementById("factorie-upgrade-button").innerHTML = "Factories give 2x more if you already have " + requiredFactories;
		}
  }
}

// Create factorie upgrade cost
const factorieUCost = document.createElement("span");
const factorieUCostNode = document.createTextNode(factorieUpgradeCost);
factorieUCost.setAttribute("id", "factorie-upgrade-cost");
factorieUCost.appendChild(factorieUCostNode);

const factorieUCostWrapper = document.getElementById("factorie-upgrade-price");
factorieUCostWrapper.appendChild(factorieUCost);
