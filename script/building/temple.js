let templeCookies = 7800;

// Number of Mines
let temples = 0;

// Create Farm Counter
const templeCount = document.createElement("span");
const templeCook = document.createTextNode(temples);
templeCount.setAttribute("id", "temples");
templeCount.appendChild(templeCook);

const tempCount = document.getElementById("temple-wrapper");
tempCount.appendChild(templeCount);

let temple_cost = 20000000;

// Mine Count increase
function templeIncrease() {
  if (i >= temple_cost) {
		numOfBuildings += 1;
    i = i - temple_cost;
		cookiesPerSecond += templeCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    temples = temples + 1;
    document.getElementById("temples").innerHTML = +temples;
    temple_cost = Math.ceil(temple_cost + (temple_cost/5 + temples/2));
    document.getElementById("temple-cost").innerHTML = +temple_cost;
    templeAddCookies();
  }
}

function templeAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + templeCookies;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function templeAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    templeAdded();
		updateTitle();
  }
}

// Add Temple Cost
const templeCost = document.createElement("span");
const templeCostvar = document.createTextNode(temple_cost);
templeCost.setAttribute("id", "temple-cost");
templeCost.appendChild(templeCostvar);

const temCost = document.getElementById("temple-price");
temCost.appendChild(templeCost);

let templeUpgradeCost = 10000000;
let requiredTemple = 5;
document.getElementById("temple-upgrade-button").innerHTML = "Temple give 2x more if you already have " + requiredTemple;

// Create temple upgrade
function templeUpgrade() {
  if (i >= templeUpgradeCost) {
		if(temples >= requiredTemple) {
			requiredTemple += 10;
	    templeCookies = templeCookies * 2;
	    i = i - templeUpgradeCost;
	    templeUpgradeCost = templeUpgradeCost * 2;
	    document.getElementById("temple-upgrade-cost").innerHTML = +templeUpgradeCost;
			document.getElementById("temple-upgrade-button").innerHTML = "Temple give 2x more if you already have " + requiredTemple;
		}
  }
}

// Create temple upgrade cost
const templeUCost = document.createElement("span");
const templeUCostNode = document.createTextNode(templeUpgradeCost);
templeUCost.setAttribute("id", "temple-upgrade-cost");
templeUCost.appendChild(templeUCostNode);

const templeUCostWrapper = document.getElementById("temple-upgrade-price");
templeUCostWrapper.appendChild(templeUCost);
