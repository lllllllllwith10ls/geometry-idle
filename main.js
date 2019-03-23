function getDefaultSave() { //Create a new Player with base values
	return {
		points: new Decimal(0), //Zero points
		dots: new Decimal(0), //Zero dots
		tier1: { //First Point Generator
			cost: new Decimal(10),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.15),
			costRaise: 1.01, //Cost Raise affects Cost Mult above 100 Generators
			unlocked: true
		},
		tier2: { //Second Point Generator
			cost: new Decimal(100),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.18),
			costRaise: 1.012, 
			unlocked: true
		},
		tier3: { //...and so on
			cost: new Decimal(1e3),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.21),
			costRaise: 1.014,
			unlocked: true
		},
		ls: { //Line Segments Information
			amount: new Decimal(0), //All upgrades, costs, and times purchased
			potentialUpgrades: ["MU","T4","T5","T6","T7","T8","T9","T10","DT1","DT2","DT3","DT4","DT5","DT6","DT7","DT8","DT9","DT10","DG"],
			costs:             [1   ,60  ,70  ,80  ,90  ,100 ,110 ,120  ,10   ,10   ,10   ,15   ,20   ,25   ,30   ,35   ,40   ,45    ,200 ],
			upgrades: 	   [0   ,0   ,0   ,0   ,0   ,0   ,0   ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0    ,0     ,0   ],
			prestiged: 0 //How many times you have completed a Linear Raise. This resets on Linear Extension
		},
		tier4: { //Back to Point Generators
			cost: new Decimal(1e5),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.24),
			costRaise: 1.016,
			unlocked: false
		},
		tier5: {
			cost: new Decimal(1e8),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.27),
			costRaise: 1.018,
			unlocked: false
		},
		tier6: {
			cost: new Decimal(1e12),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.3),
			costRaise: 1.02,
			unlocked: false
		},
		tier7: {
			cost: new Decimal(1e20),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.33),
			costRaise: 1.022,
			unlocked: false
		},
		tier8: {
			cost: new Decimal(1e30),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.36),
			costRaise: 1.024,
			unlocked: false
		},
		tier9: {
			cost: new Decimal(1e43),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.39),
			costRaise: 1.026,
			unlocked: false
		},
		tier10: {
			cost: new Decimal(1e60),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.42),
			costRaise: 1.028,
			unlocked: false
		},
		dotTier1: { //Now for Dot Generators!
			cost: new Decimal(10),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.12), //They don't have a Cost Raise. This might change in the future
			unlocked: true
		},
		dotTier2: {
			cost: new Decimal(100),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.14),
			unlocked: true
		},
		dotTier3: {
			cost: new Decimal(1000),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.16),
			unlocked: true
		},
		dotTier4: {
			cost: new Decimal(1e5),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.18),
			unlocked: false
		},
		dotTier5: {
			cost: new Decimal(1e8),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.20),
			unlocked: false
		},
		dotTier6: {
			cost: new Decimal(1e12),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.22),
			unlocked: false
		},
		dotTier7: {
			cost: new Decimal(1e20),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.24),
			unlocked: false
		},
		dotTier8: {
			cost: new Decimal(1e30),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.26),
			unlocked: false
		},
		dotTier9: {
			cost: new Decimal(1e43),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.28),
			unlocked: false
		},
		dotTier10: {
			cost: new Decimal(1e60),
			amount: new Decimal(0),
			multiplier: new Decimal(1),
			bought: 0,
			costMult: new Decimal(1.30),
			unlocked: false
		},
		lines: { //Line information
			amount: new Decimal(0), //Potantial upgrades list with upgrades and purchase amount
			potentialUpgrades: ["11", "12", "21", "31", "41", "51", "61", "71", "81", "91", "101", "111"],
			upgrades: 	   [   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,     0,     0],
			costs: 		   [   1,    1,   12,   50,  250,  200,  400,  800, 1600, 3200,  6400, 12800],
			prestiged: 0 //Number of times completed a Linear Extension
		},
		currentTab: "generators", //Used to keep the tab the same on reloading a saved game
		notation: "Standard", //Used to keep the player's notation the same
		lastTick: new Date().getTime(), //Initializing the time the player was created
		version: 0 //Uhhh... version... I guess
	};
}
let player = getDefaultSave(); //If there is no player, it's a new player!

for (let i = 1; i < player.ls.costs.length; i++) { //This might be useless. Converting all costs to Decimal form for ease of computing
	player.ls.costs[i] = new Decimal(player.ls.costs[i]);
}

function produce(offline) { //Produce all dots, points, and generators based on the time difference
	if(player.points == Number.NaN) { //This is me hoping I fixed the Infinity bug.
		player.points = getProductionAmount(1).times(offline);
	}
	else {
		player.points = player.points.plus(getProductionAmount(1).times(offline));
	}
	player.dots = player.dots.plus(getDotProductionAmount(1).times(offline));
	for(let i = 1; i < 10; i++) {
		player["tier"+i].amount = player["tier"+i].amount.plus(getProductionAmount(i+1).times(offline));
		player["dotTier"+i].amount = player["dotTier"+i].amount.plus(getDotProductionAmount(i+1).times(offline));
	}
	update();
}

function pointReset() { //Doing a Linear Raise resets all progress before Line Segments
	if(player.points.gte(Math.pow(2,23/2))) {
		document.getElementById("lineSegTab").style.display="block";
		player.ls.amount = player.ls.amount.add(getLSAmount()); //Upgrades can affect the LS Amount recieved
		let costs = [null,10,100,1000,1e5,1e8,1e12,1e20,1e30,1e43,1e60];
		let costMults = [null,1.15,1.18,1.21,1.24,1.27,1.3,1.33,1.36,1.39,1.42];
		for(let i = 1; i <= 10; i++) {
			player["tier"+i].cost = new Decimal(costs[i]);
			player["tier"+i].costMult = new Decimal(costMults[i]);
			player["tier"+i].amount = new Decimal(0);
			player["tier"+i].multiplier = new Decimal(1);
			player["tier"+i].bought = 0;
		}
		player.points = new Decimal(0);
		player.ls.prestiged++;
	}
}
function getLSAmount() { //Finding out how many Line Segments you will get on Linear Raise
	if(player.lines.upgrades[0] > 0){ //This is the triple LS upgrade
		if(player.points.root(11.5).divide(4).gte(1)) {
			let x = new Decimal(1);
			if(player.lines.upgrades[4] > 0) { //This is the LS boost based on total generators purchased
				for(let i = 1; i < 11; i++) {
					let y = new Decimal(0.001);
					x = x.plus(y.times(player["tier"+i].bought));
				}
			}
			document.getElementById("41Bonus").innerHTML = formatValue(player.notation, x, 3, 3);
			return player.points.root(11.5).divide(4).times(3).times(x).floor();
		} else { //This is to keep the first LS gained after the triple upgrade from being at like 12 points or something
			return new Decimal(0);
		}
	} else { //If no upgrades, then progress with the usual formula (around 8.7 mllion points)
		return player.points.root(11.5).divide(4).floor();
	}
}

function showTiers() { //If you've unlocked a tier, it will be shown. Else it will be hidden. Need to add Dot Tiers here.
	for (let i = 2; i <= 10; i++) {
		if (player["tier" + (i - 1)].amount.gte(0) && player["tier" + i].unlocked) {
			document.getElementById("row" + i).style.display = "";
		} else {
			document.getElementById("row" + i).style.display = "none";
		}
	}
	for(let i = 4; i <= 10; i++) {
		if(player.ls.upgrades[i-3] == 1) { //Checking the unlock upgrades
			player["tier"+i].unlocked = true;
		}
	}
}
function showTab(tabName) { //Tab switching function
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
function update() { //This is SUCH an ugly function. I will split it up into sections soon for readability
	showTiers();
	document.getElementById("points").innerHTML = formatValue(player.notation, player.points, 3, 0); //Clean up point amount
	document.getElementById("dots").innerHTML = formatValue(player.notation, player.dots, 3, 0); //Clean up dot amount
	for (let i = 1; i <= 10; i++) { //Clean up all values for each tier and dot tier
		let str = "tier" + i + "Amount";
		let dstr = "dotTier" + i + "Amount";
		document.getElementById(str).innerHTML = formatValue(player.notation, player["tier" + i].amount, 3, 0);
		document.getElementById(dstr).innerHTML = formatValue(player.notation, player["dotTier" + i].amount, 3, 0);
		document.getElementById("buy" + i).innerHTML = "Cost: " + formatValue(player.notation, player["tier" + i].cost, 3, 0);
		document.getElementById("buyDot" + i).innerHTML = "Cost: " + formatValue(player.notation, player["dotTier" + i].cost, 3, 0) + " line segments";
		document.getElementById("mult" + i).innerHTML = "x" + formatValue(player.notation, getGenMult(i), 3, 3);
		document.getElementById("dotMult" + i).innerHTML = "x" + formatValue(player.notation, getDotMult(i),3, 3);
		if(canBuyGen(i)) { //If you can buy a generator, the button will change
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
	for (let i = 8; i < 18; i++) { //Clean up upgrade costs
		let num = i - 7;
		document.getElementById("T"+num+"DoubleCost").innerHTML = formatValue(player.notation, new Decimal(player.ls.costs[i]), 3, 0)
		document.getElementById("T"+num+"DoubleCount").innerHTML = formatValue(player.notation, new Decimal(Math.pow(2, player.ls.upgrades[i])), 3, 0);
	}
	for (let i = 1; i < player.ls.potentialUpgrades.length; i++) { //Change colors for LS Upgrade buttons
		let name = player.ls.potentialUpgrades[i];
		if (player.ls.amount.gte(player.ls.costs[i])) {
			document.getElementById(name).style.background = "#FFFFFF";
		}
		else {
			document.getElementById(name).style.background = "#A3A3A3";
		}
	}
	for (let i = 1; i < 8; i++) { //If you've purchased a point generator tier, the button will vanish
		let num = i + 3;
		if (player.ls.upgrades[i] > 0) {
			document.getElementById("T"+num).style.display = "none";
			document.getElementById("DT"+num).style.display = "";
		}
		else { 
			document.getElementById("T"+num).style.display = "";
			document.getElementById("DT"+num).style.display = "none";
		}
	}
	for (let i = 1; i < 10; i++) { //Showing each new dot tier when you have 10 of the prior, and the new one is unlocked
		let j = i + 1;
		if(player["dotTier"+i].amount.gte(10) && player["dotTier"+j].unlocked) {
			document.getElementById("dotRow"+j).style.display = "";
		}
		else {
			document.getElementById("dotRow"+j).style.display = "none";
		}
	}
	for (let i = 0; i < 5; i++) { //Changing Line Tree upgrade colors
		if(canBuyTreeItem(player.lines.potentialUpgrades[i])) {
			document.getElementById(player.lines.potentialUpgrades[i]).style.background = "#FFFFFF";
		} else {
			document.getElementById(player.lines.potentialUpgrades[i]).style.background = "#A3A3A3";
		}
		if(player.lines.upgrades[i] > 0) {
			document.getElementById(player.lines.potentialUpgrades[i]).style.background = "#5AC467";
			document.getElementById(player.lines.potentialUpgrades[i]).style.color = "#FFFFFF";
		}
	}
	if(getLSAmount().gte(1)) { //Show and hide the Line Segment button
		document.getElementById("lsButton").style.display = "";
	} else {
		document.getElementById("lsButton").style.display = "none";
	}
	document.getElementById("LSOnPrestige").innerHTML = formatValue(player.notation, getLSAmount(), 3, 0);
	if(player.ls.prestiged > 0) { //Once you've done a Linear Raise at least once, the LS Tab is shown
		document.getElementById("lineSegments").style.display = "";
		document.getElementById("lineSegTab").style.display="";
	} else {
		document.getElementById("lineSegments").style.display = "none";
		document.getElementById("lineSegTab").style.display="none";
	}
	if(getLAmount().gte(1)) { //Show and hide the Line button
		document.getElementById("lButton").style.display = "";
	} else {
		document.getElementById("lButton").style.display = "none";
	}
	document.getElementById("LOnPrestige").innerHTML = formatValue(player.notation, getLAmount(), 3, 0);
	if(player.lines.prestiged > 0) { //Once you've done a Linear Extension, the Line Tab is shown
		document.getElementById("lines").style.display = "";
		document.getElementById("lineTab").style.display = "";
	} else {
		document.getElementById("lines").style.display = "none";
		document.getElementById("lineTab").style.display = "none";
	}
	if(player.ls.upgrades[18] > 0) { //Once you purchase Dot Generators, the Dot Generator Tab is shown
		document.getElementById("dotTab").style.display="";
		document.getElementById("DG").style.display = "none";
		document.getElementById("DG").style.background = "#A3A3A3";
		document.getElementById("DG").innerHTML = "Dot Generators Unlocked!";
	} else {
		document.getElementById("dotTab").style.display="none";
	}
	document.getElementById("lsAmount").innerHTML = formatValue(player.notation, player.ls.amount, 3, 0);
	document.getElementById("lAmount").innerHTML = formatValue(player.notation, player.lines.amount, 3, 0);
}
function clone(obj) { //Handy Dandy clone function to get a copy of a layered object
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
function save(){ //Save the game in local storage
  	localStorage.setItem("geometryIdleSave",JSON.stringify(saveToString(player)));
	//Right here is just some code that allows a popup message when the game saves.
  	//document.getElementById("savedInfo").style.display="inline";
  	//function foo() {document.getElementById("savedInfo").style.display="none"}
  	//setTimeout(foo, 2000);
}
function load() { //Get the game from local storage if possible
  	if (localStorage.getItem("geometryIdleSave") == null) {
		player = getDefaultSave();
  	}
	else {	
  		var save = JSON.parse(localStorage.getItem("geometryIdleSave"));
    		player = stringToSave(save, getDefaultSave());
	}
  	return player;
}
function saveToString(save) { //Convert each Decimal to a string for easy JSON stringification
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
function stringToSave(newSave, base) { //Compares a JSON stringify value to the default save.
	var keySet = Object.keys(base);
	for (var i = 0; i < keySet.length; i++){
		if(!newSave.hasOwnProperty(keySet[i])) { //If the default save has a value not present in the player save
			newSave[keySet[i]] = base[keySet[i]]; //aka, if something was added to the game,
		}					// it is added to the player save with default values.
		else {
			if(base[keySet[i]] instanceof Decimal) { //If the default save says a value should be a Decimal object
				newSave[keySet[i]] = new Decimal(newSave[keySet[i]]); //make a new Decimal with that value
			}
			else if(Object.keys(newSave[keySet[i]]).length > 1) { //If a value is itself an object, recursion!
				newSave[keySet[i]] = stringToSave(newSave[keySet[i]], base[keySet[i]]);
			}
		} //If a value is not supposed to be a Decimal, then it will have converted with JSON.stringify() just fine
	}		//and we don't need to take any further action.
	return newSave;
}
function exportSave() { //Saving something to the clipboard is a Mess.
	var tempInput = document.createElement("input"); //You have to create a new document element
	tempInput.style = "position: absolute; left: -1000px; top: -1000px"; //Say it's out of the window view
	tempInput.value = JSON.stringify(saveToString(player)); //Fill it with the player save file
	document.body.appendChild(tempInput); //Stick the window on the main document
	tempInput.select(); //Select the window
	document.execCommand("copy"); //Stick the contents of said window into the clipboard
	document.body.removeChild(tempInput); //Delete the go-between window
	alert("Save copied to clipboard"); //Tell the player it all worked
}
function importSave() { //Allow the player to import a save file. This is also where "secret codes" will go.
	var imp = prompt("Paste your save file here");
	if(imp==null) alert("That save file doesn't work, sorry.");
	else player = stringToSave(JSON.parse(imp), getDefaultSave());
}
function clearSave() { //Deletes the player save and clears the local storage.
	if (confirm("This is not reversible. Delete your save file?")) {
		localStorage.removeItem("geometryIdleSave");
		player = getDefaultSave();
		save();
		update();
	}
}
function saveFixer() { //Anytime we change something that's already implemented. I'll make this nicer in the future
	player.lines.costs = getDefaultSave().lines.costs;
	for(let i = 1; i < 11; i++) {
		let num = player["tier"+i].bought;
		if (num > 100) {
			let mult = new Decimal(1.012).plus(0.003*i);
			let price = getDefaultSave();
			price = price["tier"+i].cost;
			price = price.times(mult.pow(100));
			for(let j = 100; j < num; j++) {
				mult = mult.plus(new Decimal(Decimal.log10(num/10)).times(0.0015))
				price = price.times(mult);
			}
			player["tier"+i].cost = price;
			player["tier"+i].costMult = mult;
		}
	}
	player.lines.potentialUpgrades = getDefaultSave().lines.potentialUpgrades;
	if(player.lines.upgrades.length == 11) {
		player.lines.upgrades.splice(1, 0, 0);
	}
	player.lines.costs = getDefaultSave().lines.costs;
}
function displaySave() { //For those who have problems with the clipboard, like on mobile devices
	document.getElementById("savePlace").innerHTML = JSON.stringify(saveToString(player));
	document.getElementById("displayedSave").style.display = ""; //This will display the save for easy copying
}
function gameLoop() { //Main gameplay function
	let newTime = new Date().getTime()
	let diff = (newTime - player.lastTick) / 1000;
	player.lastTick = newTime;
	produce(diff);
}
function startInterval() { //On loading the webpage, this all is done.
	load();
	saveFixer();
	showTab(player.currentTab);
  	setInterval(gameLoop, 33);
	setInterval(save, 6000);
}

