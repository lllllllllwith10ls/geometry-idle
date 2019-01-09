function buyUpgrade(upgrade) {
	if(canBuyUpgrade(upgrade)) {
		let index = player.ls.potentialUpgrades.indexOf(upgrade);
		let upg = index-7;
		let weirdFix = Decimal.fromValue(player.ls.amount);
		player.ls.amount = weirdFix.minus(player.ls.costs[index]);
		player.ls.upgrades[index]++;
    		if(upgrade.substring(2)>3) {
      			player.ls.costs[index] *= 10;
			document.getElementById("T"+upg+"DoubleCost").innerHTML *= 10;
   		}
    		else {
     	 		player.ls.costs[index] *= 5;
			document.getElementById("T"+upg+"DoubleCost").innerHTML *= 5;
    		}
		document.getElementById("T"+upg+"DoubleCount").innerHTML *= 2;
	}
}
function canBuyUpgrade(upgrade) {
	if(player.ls.potentialUpgrades.includes(upgrade)) {
		let index = player.ls.potentialUpgrades.indexOf(upgrade);
		if(new Decimal(player.ls.costs[index]).lte(player.ls.amount)) {
			return true;
		}		
		return false;
	}
}
