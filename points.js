function getGenMult(tier) {
	let multi = new Decimal(1.015).pow(player["tier"+tier].bought);
	let lineUpgrade = player.ls.upgrades[7+tier];
	if (lineUpgrade>0) {
		multi = multi.times(Math.pow(2, lineUpgrade));
	}
	if (player.dots.gte(1)) {
		let dotBonus = Decimal.max(player.dots.log10(), 1);
		document.getElementById("dotBonus").innerHTML = formatValue(player.notation, dotBonus, 3, 2);
		multi = multi.times(dotBonus);
	}
	if (player.lines.upgrades[1] > 0) {
		let m = 1 + Math.log10(player.lines.prestiged + 1);
		document.getElementById("12Bonus").innerHTML = formatValue(player.notation, m, 3, 3);
		multi = multi.times(m);
	}
	if (player.lines.upgrades[2] > 0) {
		let m = 1;
		for (let i = 1; i < 11; i++) {
			m += 0.001*player["tier"+i].bought;
		}
		m = new Decimal(m);
		document.getElementById("21Bonus").innerHTML = formatValue(player.notation, m, 3, 3);
		multi = multi.times(m);
	}
	if (player.lines.upgrades[3] > 0) {
		let x = Math.floor(player["tier"+tier].bought/25);
		let m = new Decimal(1.03).pow(x);
		m = new Decimal(m);
		multi = multi.times(m);
	}
	player["tier"+tier].multiplier = multi;
	return multi;
}

function getDotMult(tier) {
	let multi = new Decimal(1.03).pow(player["dotTier"+tier].bought);
	player["dotTier"+tier].multiplier = multi;
	return multi;
}

function getProductionAmount(tier) {
	if(tier > 10) {
		return new Decimal(0);
	}
	return getGenMult(tier).times(player["tier"+tier].amount);
}

function getDotProductionAmount(tier) {
	if(tier > 10) {
		return new Decimal(0);
	}
	return getDotMult(tier).times(player["dotTier"+tier].amount);
}

function canBuyGen(tier) {
	if(player["tier"+tier].cost.lte(player.points) && player["tier"+tier].unlocked) {
		return true;
	}
	return false;
}

function canBuyDot(tier) {
	if(player["dotTier"+tier].cost.lte(player.ls.amount) && player["dotTier"+tier].unlocked) {
		return true;
	}
	return false;
}

function buyGen(tier) {
	if(canBuyGen(tier)) {
		player["tier"+tier].bought++;
		player["tier"+tier].amount = player["tier"+tier].amount.plus(1);
		player.points = player.points.minus(player["tier"+tier].cost);
		player["tier"+tier].cost = player["tier"+tier].cost.times(player["tier"+tier].costMult);
		if(player["tier"+tier].bought > 100) {
			player["tier"+tier].costMult = player["tier"+tier].costMult.plus(new Decimal(Decimal.log10(player["tier"+tier].bought/10)).times(0.0013));
		}			
	}
}

function buyDot(tier) {
	let p = player.points;
	if(canBuyDot(tier)) {
		player["dotTier"+tier].bought++;
		player["dotTier"+tier].amount = player["dotTier"+tier].amount.plus(1);
		player.ls.amount = player.ls.amount.minus(player["dotTier"+tier].cost);
		player["dotTier"+tier].cost = player["dotTier"+tier].cost.times(player["dotTier"+tier].costMult);
		if(player["dotTier"+tier].bought>=10) {
			let tierNext = tier + 1;
			if(player["dotTier"+tierNext].unlocked){
				document.getElementById("dotRow"+tierNext).style.display = "";
			}
		}
	}
	player.points = p;
}

function buyMaxDot(tier) {
	while(canBuyDot(tier)) {
		buyDot(tier);
	}
}

function buyMaxGen(tier) {
	while(canBuyGen(tier)) {
		buyGen(tier);
	}
}

function maxAll() {
	for(let i = 10; i >= 1; i--) {
		buyMaxGen(i);
	}
}

function maxallDots() {
	for(let i = 10; i >= 1; i--) {
		buyMaxDot(i);
	}
}
