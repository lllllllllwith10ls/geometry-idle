function getDefaultSave() {
	return {
		points: new Decimal(0),
		tier1: {
			cost: new Decimal(10),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.15,
			unlocked: true
		},
		tier2: {
			cost: new Decimal(100),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.18,
			unlocked: true
		},
		tier3: {
			cost: new Decimal(1e3),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.21,
			unlocked: true
		},
		ls: {
			amount: new Decimal(0),
			potentialUpgrades: ["MU","T4","T5","T6","T7","T8","T9","T10","DT1","DT2","DT3","DT4","DT5","DT6","DT7","DT8","DT9","DT10","DG"],
			costs:             [1   ,60  ,70  ,80  ,90  ,100 ,110 ,120  ,10   ,10   ,10   ,15   ,20   ,25   ,30   ,35   ,40   ,45    ,200 ],
			upgrades: 	   [0   ,0   ,0   ,0   ,0   ,0   ,0   ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0     ,0   ],
			prestiged: 0
		},
		tier4: {
			cost: new Decimal(1e5),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.24,
			unlocked: false
		},
		tier5: {
			cost: new Decimal(1e8),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.27,
			unlocked: false
		},
		tier6: {
			cost: new Decimal(1e12),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.3,
			unlocked: false
		},
		tier7: {
			cost: new Decimal(1e20),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.33,
			unlocked: false
		},
		tier8: {
			cost: new Decimal(1e30),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.36,
			unlocked: false
		},
		tier9: {
			cost: new Decimal(1e43),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.39,
			unlocked: false
		},
		tier10: {
			cost: new Decimal(1e60),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.42,
			unlocked: false
		},
		lastTick: new Date().getTime(),
		version: 0
	};
}
let player = getDefaultSave();

function produce(offline) {
	player.points = player.points.plus(getProductionAmount(1).times(offline));
	for(let i = 1; i < 10; i++) {
		player["tier"+i].amount = player["tier"+i].amount.plus(getProductionAmount(i+1).times(offline));
	}
	update();
}

function pointReset() {
	if(player.points.gte(Math.pow(2,23/2))) {
		document.getElementById("lineTab").style.display="block";
		let costs = [null,10,100,1000,1e5,1e8,1e12,1e20,1e30,1e43,1e60];
		let costMults = [null,1.15,1.18,1.21,1.24,1.27,1.3,1.33,1.36,1.39,1.42];
		for(let i = 1; i <= 10; i++) {
			player["tier"+i].cost = new Decimal(costs[i]);
			player["tier"+i].costMult = new Decimal(costMults[i]);
			player["tier"+i].amount = new Decimal(0);
			player["tier"+i].multiplier = new Decimal(1);
			player["tier"+i].bought = 0;
		}
		player.ls.amount = player.ls.amount.add(getLSAmount());
		player.points = new Decimal(0);
		player.ls.prestiged++;
	}
}
function getLSAmount() {
	return player.points.root(11.5).divide(4);
}

function showTiers() {
	for (let i = 2; i <= 10; i++) {
		if (player["tier" + (i - 1)].amount.gte(0) && player["tier" + i].unlocked) {
			document.getElementById("row" + i).style.display = "";
		} else {
			document.getElementById("row" + i).style.display = "none";
		}
	}
	for(let i = 4; i <= 10; i++) {
		if(player.ls.upgrades[i-3] == 1) {
			player["tier"+i].unlocked = true;
		}
	}
}
function showTab(tabName) {
	var tabs = document.getElementsByClassName('tab');
	var tab;
	for (var i = 0; i < tabs.length; i++) {
		tab = tabs.item(i);
		if (tab.id === tabName) tab.style.display = 'block';
		else tab.style.display = 'none';
	}
}
function update() {
	showTiers();
	document.getElementById("points").innerHTML = formatValue("Standard", player.points, 3, 0);
	for (let i = 1; i <= 10; i++) {
		let str = "tier" + i + "Amount";
		document.getElementById(str).innerHTML = formatValue("Standard", player["tier" + i].amount, 3, 0);
		document.getElementById("buy" + i).innerHTML = "Cost: " + formatValue("Standard", player["tier" + i].cost, 3, 0);
		document.getElementById("mult" + i).innerHTML = "x" + formatValue("Standard", getGenMult(i), 3, 3);
		if(canBuyGen(i)) {
			document.getElementById("buy" + i).className = "button";
			document.getElementById("buy" + i + "Max").className = "button";
		} else {
			document.getElementById("buy" + i).className = "buttonlocked";
			document.getElementById("buy" + i + "Max").className = "buttonlocked";
		}
	}
	for (let i = 1; i < player.ls.potentialUpgrades.length-1; i++) {
		let name = player.ls.potentialUpgrades[i];
		if (player.ls.amount.gte(player.ls.costs[i])) {
			document.getElementById(name).className = "button";
		}
		else {
			document.getElementById(name).className = "buttonlocked";
		}
	}
	if(getLSAmount().gte(1)) {
		document.getElementById("lsButton").style.display = "";
	} else {
		document.getElementById("lsButton").style.display = "none";
	}
	document.getElementById("LSOnPrestige").innerHTML = formatValue("Standard", getLSAmount(), 3, 0);
	if(player.ls.prestiged > 0) {
		document.getElementById("lineSegments").style.display = "";
		document.getElementById("lineTab").style.display="";
	} else {
		document.getElementById("lineSegments").style.display = "none";
		document.getElementById("lineTab").style.display="none";
	}
	document.getElementById("lsAmount").innerHTML = formatValue("Standard", player.ls.amount, 3, 0);
}
function save(){
	let tempPlayer = player;
  	localStorage.setItem("geometryIdleSave",JSON.stringify(saveToString(tempPlayer)));
	//Right here is just some code that allows a popup message when the game saves.
  	//document.getElementById("savedInfo").style.display="inline";
  	//function foo() {document.getElementById("savedInfo").style.display="none"}
  	//setTimeout(foo, 2000);
}
function load() {
  	if (localStorage.getItem("geometryIdleSave") == null) {
		player = getDefaultSave();
  	}
	else {	
  		var save = JSON.parse(localStorage.getItem("geometryIdleSave"));
    		player = stringToSave(save,getDefaultSave());
	}
  	return player;
}
function saveToString(save) {
	let stringSave = save;
	let keySet = Object.keys(save);
	for (var i = 0; i < keySet.length; i++){
		if(Object.keys(save[keySet[i]]).length > 1) {
			stringSave[keySet[i]] = saveToString(save[keySet[i]]);
		}
		else if(save[keySet[i]] instanceof Decimal) {
			stringSave[keySet[i]] = Decimal.toString(save[keySet[i]]);
		}
	}
	return stringSave;
}
function stringToSave(string, baseSave) {
	var newSave = string;
	var keySet = Object.keys(string);
	for (var i = 0; i < keySet.length; i++){
		if(newSave[keySet[i]] == undefined) console.log(newSave[keySet[i]]);
		if(Object.keys(save[keySet[i]]).length > 1) {
			newSave[keySet[i]] = stringToSave(save[keySet[i]],  baseSave[i]);
		}
		else if(baseSave[i] instanceof Decimal) {
			newSave[keySet[i]] = Decimal.fromString(string[keySet[i]]);
		}
	}
	return newSave;
}
function gameLoop() {
	let newTime = new Date().getTime()
	let diff = (newTime - player.lastTick) / 1000;
	player.lastTick = newTime;
	produce(diff);
}
function startInterval() {
	//load();
  	setInterval(gameLoop, 33);
	//setInterval(save, 6000);
}

