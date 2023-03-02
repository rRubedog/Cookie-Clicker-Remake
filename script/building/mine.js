let mineCookies = 47;

// Number of Mines
let mines = 0;

// Create Farm Counter
const mineCount = document.createElement("span");
const mineCook = document.createTextNode(mines);
mineCount.setAttribute("id", "mines");
mineCount.appendChild(mineCook);

const minCount = document.getElementById("mine-wrapper");
minCount.appendChild(mineCount);

let mine_cost = 12000;

// Mine Count increase
function mineIncrease() {
  if (i >= mine_cost) {
		numOfBuildings += 1;
    i = i - mine_cost;
		cookiesPerSecond += mineCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    mines = mines + 1;
    document.getElementById("mines").innerHTML = +mines;
    mine_cost = Math.ceil(mine_cost + (mine_cost/5 + mines/2));
    document.getElementById("mine-cost").innerHTML = +mine_cost;
    mineAddCookies();
  }
}

function mineAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + mineCookies;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function mineAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    mineAdded();
		updateTitle();
  }
}

// Add Mine Cost
const mCost = document.createElement("span");
const mCostvar = document.createTextNode(mine_cost);
mCost.setAttribute("id", "mine-cost");
mCost.appendChild(mCostvar);

const mineCost = document.getElementById("mine-price");
mineCost.appendChild(mCost);

let mineUpgradeCost = 500000;
let requiredMinors = 5;
document.getElementById("mine-upgrade-button").innerHTML = "Mines give 2x more if you already have " + requiredMinors;

// Create mine upgrade
function mineUpgrade() {
  if (i >= mineUpgradeCost) {
		if(mines >= requiredMinors) {
			requiredMinors += 10;
	    mineCookies = mineCookies * 2;
	    i = i - mineUpgradeCost;
	    mineUpgradeCost = mineUpgradeCost * 2;
	    document.getElementById("mine-upgrade-cost").innerHTML = +mineUpgradeCost;
			document.getElementById("mine-upgrade-button").innerHTML = "Mines give 2x more if you already have " + requiredMinors;
		}
  }
}

// Create mine upgrade cost
const mineUCost = document.createElement("span");
const mineUCostNode = document.createTextNode(mineUpgradeCost);
mineUCost.setAttribute("id", "mine-upgrade-cost");
mineUCost.appendChild(mineUCostNode);

const mineUCostWrapper = document.getElementById("mine-upgrade-price");
mineUCostWrapper.appendChild(mineUCost);
