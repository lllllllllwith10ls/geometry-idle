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
			upgrades: ["T4","T5","T6","T7","T8","T9","T10","DT1","DT2","DT3","DT4","DT5","DT6","DT7","DT8","DT9","DT10","DG"],
			costs:    [60  ,70  ,80  ,90  ,100 ,110 ,120  ,10   ,10   ,10   ,15   ,20   ,25   ,30   ,35   ,40   ,45    ,200 ]
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
	player.points += getProductionAmount(1);
	for(let i = 1; i < 9; i++) {
		player["tier"+i].amount += getProductionAmount(i+1)/fps;
	}
	update();
}

function update() {
	
	document.getElementById("points").innerHTML = Math.floor(player.points);
	for (var i = 1; i <= 9; i++) {
		var str = "tier" + i + "Amount";
		document.getElementById(str).innerHTML = Math.floor(player["tier" + i].amount);
		document.getElementById("buy" + i).innerHTML = "Cost: " + Math.floor(player["tier" + i].cost);
		document.getElementById("mult" + i).innerHTML = "x" + Math.floor(getGenMult(i)*10)/10;
	}
}
function gameLoop() {
	produce(33);
}
function startInterval() {
  setInterval(gameLoop, 33);
}
