function getGenMult(tier) {
	let multi = new Decimal(1.015).pow(player["tier"+tier].bought);
	player["tier"+tier].multiplier = multi;
	let upgrade = player.ls.upgrades[8+tier];
	if (upgrade>0) {
		return multi.times(player.ls.upgrades[8+tier].times(2));
	}
	else {
		return multi;
	}
}

function getProductionAmount(tier) {
	if(tier > 10) {
		return new Decimal(0);
	}
	return getGenMult(tier).times(player["tier"+tier].amount);
}

function canBuyGen(tier) {
	if(player["tier"+tier].cost.lte(player.points) && player["tier"+tier].unlocked) {
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

