function buyUpgrade(upgrade) {
	if(canBuyUpgrade(upgrade)) {
		let index = player.ls.potentialUpgrades.indexOf(upgrade);
		player.ls.amount = player.ls.amount.minus(player.ls.costs[index]);
		if (index > 7) {
			player.ls.upgrades[index]++;
			let upg = index-7;
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
		else {
			if (player.ls.upgrades[index] == 0) {
				player.ls.upgrades[index] = 1;
				let num = index + 3;
				document.getElementById("T"+num).innerHTML = "Tier "+index+" generator<br/>unlocked!";
			}
		}
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
