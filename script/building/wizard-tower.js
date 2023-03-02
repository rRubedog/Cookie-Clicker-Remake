let wizardCookies = 44000;

// Number of Wizards
let wizards = 0;

// Create Wizard Counter
const wizardCount = document.createElement("span");
const wizardCook = document.createTextNode(wizards);
wizardCount.setAttribute("id", "wizards");
wizardCount.appendChild(wizardCook);

const wizCount = document.getElementById("wizard-wrapper");
wizCount.appendChild(wizardCount);

let wizard_cost = 330000000;

// Mine Count increase
function wizardIncrease() {
  if (i >= wizard_cost) {
		numOfBuildings += 1;
    i = i - wizard_cost;
    wizards = wizards + 1;
		cookiesPerSecond += wizardCookies;
		document.getElementById('cookies-per-second').innerHTML = +cookiesPerSecond;
    document.getElementById("wizards").innerHTML = +wizards;
    wizard_cost = Math.ceil(wizard_cost + (wizard_cost/5 + wizards/2));
    document.getElementById("wizard-cost").innerHTML = +wizard_cost;
    wizardAddCookies();
  }
}

function wizardAdded() {
  for (let g = 0; g < 1; g++) {
    i = i + wizardCookies;
    document.getElementById("cookies").innerHTML = +i;
  }
}

async function wizardAddCookies() {
  for (let time = 0; ; time++) {
    await timer(timerSpeed);
    wizardAdded();
		updateTitle();
  }
}

// Add Mine Cost
const wizardCost = document.createElement("span");
const wizardCostvar = document.createTextNode(wizard_cost);
wizardCost.setAttribute("id", "wizard-cost");
wizardCost.appendChild(wizardCostvar);

const wisCost = document.getElementById("wizard-price");
wisCost.appendChild(wizardCost);

let wizardUpgradeCost = 5000000;
let requiredWizard = 5;
document.getElementById("wizard-upgrade-button").innerHTML = "wizard give 2x more if you already have " + requiredWizard;

// Create factorie upgrade
function wizardUpgrade() {
  if (i >= wizardUpgradeCost) {
		if(wizards >= requiredWizard) {
			requiredWizard += 10;
	    wizardCookies = wizardCookies * 2;
	    i = i - wizardUpgradeCost;
	    wizardUpgradeCost = wizardUpgradeCost * 2;
	    document.getElementById("wizard-upgrade-cost").innerHTML = +wizardUpgradeCost;
			document.getElementById("wizard-upgrade-button").innerHTML = "Wizard Towers give 2x more if you already have " + requiredWizard;
		}
  }
}

// Create factorie upgrade cost
const wizardUCost = document.createElement("span");
const wizardUCostNode = document.createTextNode(wizardUpgradeCost);
wizardUCost.setAttribute("id", "wizard-upgrade-cost");
wizardUCost.appendChild(wizardUCostNode);

const wizardUCostWrapper = document.getElementById("wizard-upgrade-price");
wizardUCostWrapper.appendChild(wizardUCost);
