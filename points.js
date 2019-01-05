function getGenMult(tier) {
	let multi = Math.pow(1.015,player["tier"+tier].bought);
	return multi;
}

function getProductionAmount(tier) {
	if(tier >= 10) {
		return 0;
	}
	return getGenMult(tier)*player["tier"+tier].amount;
}

function canBuyGen(tier) {
	if(player["tier"+tier].cost <= player.points && player["tier"+tier].unlocked) {
		return true;
	}
	return false;
}

function buyGen(tier) {
	if(canBuyGen(tier)) {
		player["tier"+tier].bought++;
		player["tier"+tier].amount++;
		player.points -= player["tier"+tier].cost;
		player["tier"+tier].cost *= player["tier"+tier].costMult;
		
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

