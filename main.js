function getDefaultSave() {
	return {
		points: 0,
		tier1: {
			cost: 10,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.15,
			unlocked: true
		},
		tier2: {
			cost: 100,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.18,
			unlocked: true
		},
		tier3: {
			cost: 1000,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.21,
			unlocked: true
		},
		lines: {
			amount: 0,
			potentialUpgrades: ["MU","T4","T5","T6","T7","T8","T9","T10","DT1","DT2","DT3","DT4","DT5","DT6","DT7","DT8","DT9","DT10","DG"],
			costs:             [1   ,60  ,70  ,80  ,90  ,100 ,110 ,120  ,2    ,4    ,6    ,15   ,20   ,25   ,30   ,35   ,40   ,45    ,200 ],
			upgrades: []
		},
		tier4: {
			cost: 100000,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.24,
			unlocked: false
		},
		tier5: {
			cost: 1e8,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.27,
			unlocked: false
		},
		tier6: {
			cost: 1e12,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.3,
			unlocked: false
		},
		tier7: {
			cost: 1e20,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.33,
			unlocked: false
		},
		tier8: {
			cost: 1e30,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.36,
			unlocked: false
		},
		tier9: {
			cost: 1e43,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.39,
			unlocked: false
		},
		tier10: {
			cost: 1e60,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.42,
			unlocked: false
		},
		version: 0
	};
}
let player = getDefaultSave();

function produce(fps) {
	player.points += getProductionAmount(1)/fps;
	for(let i = 1; i < 10; i++) {
		player["tier"+i].amount += getProductionAmount(i+1)/fps;
	}
	update();
}

function lineReset() {
	if(player.points > Math.pow(2,31)) {
		let costs = [null,10,100,1000,1e5,1e8,1e12,1e20,1e30,1e43,1e60];
		let costMults = [null,1.15,1.18,1.21,1.24,1.27,1.3,1.33,1.36,1.39,1.42];
		for(let i = 0; i <= 10; i++) {
			player["tier"+i].cost = costs[i];
			player["tier"+i].costMult = costMults[i];
			player["tier"+i].amount = 0;
			player["tier"+i].multiplier = 1;
			player["tier"+i].bought = 0;
		}
		player.lines.amount += Math.floor(Math.sqrt(player.points)/Math.pow(2,31));
		player.points = 0;
	}
}

function buyUpgrade(upgrade) {
	if(canBuyUpgrade(upgrade)) {
		let index = player.lines.potentialUpgrade.indexOf(upgrade);
		player.lines.amount -= player.lines.costs[index];
		player.lines.upgrades.push(upgrade);
	}
}
function canBuyUpgrade(upgrade) {
	if(player.lines.potentialUpgrade.includes(upgrade)) {
		let index = player.lines.potentialUpgrade.indexOf(upgrade);
		if(player.lines.costs[index] <= player.lines.amount) {
			return true;
		}
		
		return false;
	}
}
function showTiers() {
	for (var i = 2; i <= 10; i++) {
		if (player["tier" + (i - 1)].amount > 0 && player["tier" + i].unlocked) {
			document.getElementById("row" + i).style.display = "";
		} else {
			document.getElementById("row" + i).style.display = "none";
		}
	}
	for(let i = 4; i <= 10; i++) {
		if(player.lines.potentialUpgrade.includes("T"+i)) {
			player["tier"+i].unlocked = true;
		}
	}
}
function update() {
	showTiers();
	document.getElementById("points").innerHTML = Math.floor(player.points);
	for (var i = 1; i <= 10; i++) {
		var str = "tier" + i + "Amount";
		document.getElementById(str).innerHTML = Math.floor(player["tier" + i].amount);
		document.getElementById("buy" + i).innerHTML = "Cost: " + Math.floor(player["tier" + i].cost);
		document.getElementById("mult" + i).innerHTML = "x" + Math.floor(getGenMult(i)*10)/10;
		if(canBuyGen(i)) {
			document.getElementById("buy" + i).className = "button";
			document.getElementById("buy" + i + "Max").className = "button";
		} else {
			document.getElementById("buy" + i).className = "buttonlocked";
			document.getElementById("buy" + i + "Max").className = "buttonlocked";
		}
	}
}
function gameLoop() {
	produce(33);
}
function startInterval() {
  setInterval(gameLoop, 33);
}
