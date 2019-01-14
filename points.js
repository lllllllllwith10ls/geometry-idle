function getGenMult(tier) {
	let multi = new Decimal(1.015).pow(player["tier"+tier].bought);
	let lineUpgrade = player.ls.upgrades[7+tier];
	if (lineUpgrade>0) {
		multi = multi.times(lineUpgrade*2);
	}
	if (player.dots.gte(1)) {
		let dotBonus = player.dots.log10();
		document.getElementById("dotBonus").innerHTML = formatValue("Standard", dotBonus, 3, 0);
		multi = multi.times(dotBonus);
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
			document.getElementById("dotRow"+tierNext).style.display = "";
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
