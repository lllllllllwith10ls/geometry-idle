function getDefaultSave() { //Create a new 
	return {
		points: new Decimal(0),
		dots: new Decimal(0),
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
		dotTier1: {
			cost: new Decimal(10),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.12,
			unlocked: true
		},
		dotTier2: {
			cost: new Decimal(100),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.14,
			unlocked: true
		},
		dotTier3: {
			cost: new Decimal(1000),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.16,
			unlocked: true
		},
		dotTier4: {
			cost: new Decimal(1e5),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.18,
			unlocked: false
		},
		dotTier5: {
			cost: new Decimal(1e8),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.20,
			unlocked: false
		},
		dotTier6: {
			cost: new Decimal(1e12),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.22,
			unlocked: false
		},
		dotTier7: {
			cost: new Decimal(1e20),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.24,
			unlocked: false
		},
		dotTier8: {
			cost: new Decimal(1e30),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.26,
			unlocked: false
		},
		dotTier9: {
			cost: new Decimal(1e43),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.28,
			unlocked: false
		},
		dotTier10: {
			cost: new Decimal(1e60),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: 1.30,
			unlocked: false
		},
		currentTab: "generators",
		notation: "Standard",
		lastTick: new Date().getTime(),
		version: 0
	};
}
let player = getDefaultSave();

for (let i = 1; i < player.ls.costs.length; i++) {
	player.ls.costs[i] = new Decimal(player.ls.costs[i]);
}

function produce(offline) {
	player.points = player.points.plus(getProductionAmount(1).times(offline));
	player.dots = player.dots.plus(getDotProductionAmount(1).times(offline));
	for(let i = 1; i < 10; i++) {
		player["tier"+i].amount = player["tier"+i].amount.plus(getProductionAmount(i+1).times(offline));
		player["dotTier"+i].amount = player["dotTier"+i].amount.plus(getDotProductionAmount(i+1).times(offline));
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
	return player.points.root(11.5).divide(4).floor();
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
		if (tab.id === tabName) {
			tab.style.display = 'block';
			player.currentTab = tabName;
		}
		else tab.style.display = 'none';
	}
}
function update() {
	showTiers();
	document.getElementById("points").innerHTML = formatValue(player.notation, player.points, 3, 0);
	document.getElementById("dots").innerHTML = formatValue(player.notation, player.dots, 3, 0);
	for (let i = 1; i <= 10; i++) {
		let str = "tier" + i + "Amount";
		let dstr = "dotTier" + i + "Amount";
		document.getElementById(str).innerHTML = formatValue(player.notation, player["tier" + i].amount, 3, 0);
		document.getElementById(dstr).innerHTML = formatValue(player.notation, player["dotTier" + i].amount, 3, 0);
		document.getElementById("buy" + i).innerHTML = "Cost: " + formatValue(player.notation, player["tier" + i].cost, 3, 0);
		document.getElementById("buyDot" + i).innerHTML = "Cost: " + formatValue(player.notation, player["dotTier" + i].cost, 3, 0) + " line segments";
		document.getElementById("mult" + i).innerHTML = "x" + formatValue(player.notation, getGenMult(i), 3, 3);
		document.getElementById("dotMult" + i).innerHTML = "x" + formatValue(player.notation, getDotMult(i),3, 3);
		if(canBuyGen(i)) {
			document.getElementById("buy" + i).className = "button";
			document.getElementById("buy" + i + "Max").className = "button";
		} else {
			document.getElementById("buy" + i).className = "buttonlocked";
			document.getElementById("buy" + i + "Max").className = "buttonlocked";
		}
		if(canBuyDot(i)) {
			document.getElementById("buyDot" + i).className = "button";
			document.getElementById("buyDot" + i + "Max").className = "button";
		} else {
			document.getElementById("buyDot" + i).className = "buttonlocked";
			document.getElementById("buyDot" + i + "Max").className = "buttonlocked";
		}
	}
	for (let i = 8; i < 18; i++) {
		let num = i - 7;
		document.getElementById("T"+num+"DoubleCost").innerHTML = player.ls.costs[i];
		document.getElementById("T"+num+"DoubleCount").innerHTML = Math.pow(2, player.ls.upgrades[i]);
	}
	for (let i = 1; i < 8; i++) {
		if (player.ls.upgrades[i] > 0) {
			let num = i + 3;
			document.getElementById("T"+num).className = "buttonlocked";
			document.getElementById("T"+num).innerHTML = "Tier "+num+" generator<br/>unlocked!"
			document.getElementById("DT"+num).style.display = "";
		}
	}
	for (let i = 1; i < player.ls.potentialUpgrades.length; i++) {
		let name = player.ls.potentialUpgrades[i];
		if (player.ls.amount.gte(player.ls.costs[i])) {
			document.getElementById(name).className = "button";
		}
		else {
			document.getElementById(name).className = "buttonlocked";
		}
	}
	for (let i = 1; i < 10; i++) {
		let j = i + 1;
		if(player["dotTier"+i].amount.gte(9) && player["dotTier"+j].unlocked) {
			document.getElementById("dotRow"+j).style.display = "";
		}
		else {
			document.getElementById("dotRow"+j).style.display = "none";
		}
	}
	if(getLSAmount().gte(1)) {
		document.getElementById("lsButton").style.display = "";
	} else {
		document.getElementById("lsButton").style.display = "none";
	}
	document.getElementById("LSOnPrestige").innerHTML = formatValue(player.notation, getLSAmount(), 3, 0);
	if(player.ls.prestiged > 0) {
		document.getElementById("lineSegments").style.display = "";
		document.getElementById("lineTab").style.display="";
	} else {
		document.getElementById("lineSegments").style.display = "none";
		document.getElementById("lineTab").style.display="none";
	}
	if(player.ls.upgrades[18] > 0) {
		document.getElementById("dotTab").style.display="";
		document.getElementById("DG").className = "buttonlocked";
		document.getElementById("DG").innerHTML = "Dot Generators Unlocked!";
	} else {
		document.getElementById("dotTab").style.display="none";
	}
	document.getElementById("lsAmount").innerHTML = formatValue(player.notation, player.ls.amount, 3, 0);
}
function clone(obj) {
	    var copy;
    	// Handle the 3 simple types, and null or undefined
    	if (null == obj || "object" != typeof obj) return obj;
    	// Handle Date
	if (obj instanceof Date) {
		copy = new Date();
	        copy.setTime(obj.getTime());
	        return copy;
	}
	// Handle Array
	if (obj instanceof Array) {
	        copy = [];
	        for (var i = 0, len = obj.length; i < len; i++) {
	            copy[i] = clone(obj[i]);
	        }
	        return copy;
	}
	// Handle Object
	if (obj instanceof Object) {
		copy = {};
	        for (var attr in obj) {
	            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
	        }
	        return copy;
	}
    throw new Error("Unable to copy obj! Its type isn't supported.");
}
function save(){
  	localStorage.setItem("geometryIdleSave",JSON.stringify(saveToString(player)));
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
    		player = stringToSave(save, getDefaultSave());
	}
  	return player;
}
function saveToString(save) {
	var copy = clone(save);
	var keySet = Object.keys(save);
	for (var i = 0; i < keySet.length; i++){
		if(save[keySet[i]] instanceof Decimal) {
			copy[keySet[i]] = Decimal.toString(save[keySet[i]]);
		}
		else if(Object.keys(copy[keySet[i]]).length > 1) {
			copy[keySet[i]] = saveToString(copy[keySet[i]]);
		}
	}
	return copy;
}
function stringToSave(newSave, base) {
	var keySet = Object.keys(base);
	for (var i = 0; i < keySet.length; i++){
		if(!newSave.hasOwnProperty(keySet[i])) {
			newSave[keySet[i]] = base[keySet[i]];
		}
		else {
			if(base[keySet[i]] instanceof Decimal) {
				newSave[keySet[i]] = new Decimal(newSave[keySet[i]]);
			}
			else if(Object.keys(newSave[keySet[i]]).length > 1) {
				newSave[keySet[i]] = stringToSave(newSave[keySet[i]], base[keySet[i]]);
			}
		}
	}
	return newSave;
}
function clearSave() {
	if (confirm("This is not reversible. Delete your save file?")) {
		player = getDefaultSave();
		update();
	}
}
function gameLoop() {
	let newTime = new Date().getTime()
	let diff = (newTime - player.lastTick) / 1000;
	player.lastTick = newTime;
	produce(diff);
}
function startInterval() {
	load();
	showTab(player.currentTab);
  	setInterval(gameLoop, 33);
	setInterval(save, 6000);
}

