let grandmaCookies = 1;

// Number of grandmas
let grandma = 0;

// Create Grandma Counter
const gCount = document.createElement("span");
const gCook = document.createTextNode(grandma);
gCount.setAttribute("id", "grandma");
gCount.appendChild(gCook);

const grandmaCount = document.getElementById("grandmas-wrapper");
grandmaCount.appendChild(gCount);

let grandmaCost = 100;

// Grandma count increase
function gmaIncrease() {
  if (i >= grandmaCost) {
		numOfBuildings += 1;
    i = i - grandmaCost;
		cookiesPerSecond += grandmaCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    grandma = grandma + 1;
    document.getElementById("grandma").innerHTML = +grandma;
    grandmaCost = Math.ceil(grandmaCost + (grandmaCost/5 + grandma/2));
    document.getElementById("g-cost").innerHTML = +grandmaCost;
    gmaAddCookies();
  }
}

function gmaAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + 1;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function gmaAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    gmaAdded();
		updateTitle();
  }
}

// Create Grandma Cost
const gCost = document.createElement("span");
const gCostvar = document.createTextNode(grandmaCost);
gCost.setAttribute("id", "g-cost");
gCost.appendChild(gCostvar);

const grandmaCostVar = document.getElementById("grandma-cost");
grandmaCostVar.appendChild(gCost);


let grandmaUpgradeCost = 5000;
let requiredGrandmas = 5;
document.getElementById("grandma-upgrade-button").innerHTML = "Grandmas give 2x more if you already have " + requiredGrandmas;

// Create grandma upgrade
function grandmaUpgrade() {
  if (i >= grandmaUpgradeCost) {
		if(grandma >= requiredGrandmas) {
			requiredGrandmas += 10;
			i = i - grandmaUpgradeCost;
	    cookiesPerClick += 2;
	    grandmaUpgradeCost = grandmaUpgradeCost * 2;
	    document.getElementById("grandma-upgrade-cost").innerHTML = +grandmaUpgradeCost;
			document.getElementById("grandma-upgrade-button").innerHTML = "Grandmas give 2x more if you already have " + requiredGrandmas;
		}
    
  }
}

// Create grandma upgrade cost
const grandmaUCost = document.createElement("span");
const grandmaUCostNode = document.createTextNode(grandmaUpgradeCost);
grandmaUCost.setAttribute("id", "grandma-upgrade-cost");
grandmaUCost.appendChild(grandmaUCostNode);

const grandmaUCostWrapper = document.getElementById("grandma-upgrade-price");
grandmaUCostWrapper.appendChild(grandmaUCost);
