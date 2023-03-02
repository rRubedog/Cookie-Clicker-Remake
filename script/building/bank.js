let bankCookies = 1400;

// Number of Banks
let banks = 0;

// Create Bank Counter
const bankCount = document.createElement("span");
const bankCook = document.createTextNode(banks);
bankCount.setAttribute("id", "banks");
bankCount.appendChild(bankCook);

const banCount = document.getElementById("bank-wrapper");
banCount.appendChild(bankCount);

let bank_cost = 1400000;

// Bank Count increase
function bankIncrease() {
  if (i >= bank_cost) {
		numOfBuildings += 1;
		cookiesPerSecond += bankCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    i = i - bank_cost;
    banks = banks + 1;
    document.getElementById("banks").innerHTML = +banks;
    bank_cost = Math.ceil(bank_cost + (bank_cost/5 + banks/2));
    document.getElementById("bank-cost").innerHTML = +bank_cost;
    bankAddCookies();
  }
}

function bankAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + bankCookies;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function bankAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    bankAdded();
		updateTitle();
  }
}

// Add Mine Cost
const bankCost = document.createElement("span");
const bankCostvar = document.createTextNode(bank_cost);
bankCost.setAttribute("id", "bank-cost");
bankCost.appendChild(bankCostvar);

const banCost = document.getElementById("bank-price");
banCost.appendChild(bankCost);

let bankUpgradeCost = 5000000;
let requiredBank = 5;
document.getElementById("bank-upgrade-button").innerHTML = "Bank give 2x more if you already have " + requiredBank;

// Create factorie upgrade
function bankUpgrade() {
  if (i >= bankUpgradeCost) {
		if(banks >= requiredBank) {
			requiredBank += 10;
	    bankCookies = bankCookies * 2;
	    i = i - bankUpgradeCost;
	    bankUpgradeCost = bankUpgradeCost * 2;
	    document.getElementById("bank-upgrade-cost").innerHTML = +bankUpgradeCost;
			document.getElementById("bank-upgrade-button").innerHTML = "Bank give 2x more if you already have " + requiredBank;
		}
  }
}

// Create factorie upgrade cost
const bankUCost = document.createElement("span");
const bankUCostNode = document.createTextNode(bankUpgradeCost);
bankUCost.setAttribute("id", "bank-upgrade-cost");
bankUCost.appendChild(bankUCostNode);

const bankUCostWrapper = document.getElementById("bank-upgrade-price");
bankUCostWrapper.appendChild(bankUCost);
