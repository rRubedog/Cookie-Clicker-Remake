let farmCookies = 8;

// Number of Farms
let farms = 0;

// Create Farm Counter
const farmCount = document.createElement("span");
const farmCook = document.createTextNode(farms);
farmCount.setAttribute("id", "farms");
farmCount.appendChild(farmCook);

const farCount = document.getElementById("farm-wrapper");
farCount.appendChild(farmCount);

let farm_cost = 1100;

// Farm Count increase
function farmIncrease() {
  if (i >= farm_cost) {
		numOfBuildings += 1;
		cookiesPerSecond += farmCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    i = i - farm_cost;
    farms = farms + 1;
    document.getElementById("farms").innerHTML = +farms;
    farm_cost = Math.ceil(farm_cost + (farm_cost/5 + farms/2));
    document.getElementById("farm-cost").innerHTML = +farm_cost;
    farmAddCookies();
  }
}

function farmAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + farmCookies;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function farmAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    farmAdded();
		updateTitle();
  }
}

// Add Farm Cost
const fCost = document.createElement("span");
const fCostvar = document.createTextNode(farm_cost);
fCost.setAttribute("id", "farm-cost");
fCost.appendChild(fCostvar);

const farmCost = document.getElementById("farm-price");
farmCost.appendChild(fCost);

let farmUpgradeCost = 100000;
let requiredFarms = 5;
document.getElementById("farm-upgrade-button").innerHTML = "Farms give 2x more if you already have " + requiredFarms;

// Create farm upgrade
function farmUpgrade() {
  if (i >= farmUpgradeCost) {
		if(farms >= requiredFarms) {
			requiredFarms += 10;
			farmCookies = farmCookies * 2;
    	i = i - farmUpgradeCost;
    	farmUpgradeCost = farmUpgradeCost * 2;
    	document.getElementById("farm-upgrade-cost").innerHTML = +farmUpgradeCost;
			document.getElementById("farm-upgrade-button").innerHTML = "Farms give 2x more if you already have " + requiredFarms;
		}
    
  }
}

// Create farm upgrade cost
const farmUCost = document.createElement("span");
const farmUCostNode = document.createTextNode(farmUpgradeCost);
farmUCost.setAttribute("id", "farm-upgrade-cost");
farmUCost.appendChild(farmUCostNode);

const farmUCostWrapper = document.getElementById("farm-upgrade-price");
farmUCostWrapper.appendChild(farmUCost);
