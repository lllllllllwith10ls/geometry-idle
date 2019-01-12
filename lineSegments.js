function buyUpgrade(upgrade) {
	if(canBuyUpgrade(upgrade)) {
		let index = player.ls.potentialUpgrades.indexOf(upgrade);
		player.ls.amount = player.ls.amount.minus(player.ls.costs[index]);
		if (index == 18) {
			if (player.ls.upgrades[index] == 0) {
				player.ls.upgrades[index] = 1;
				document.getElementById("DG").innerHTML = "Dot Generators<br/>unlocked!";
			}
		}
		if (index > 7) {
			player.ls.upgrades[index]++;
			let upg = index-7;
    			if(upgrade.substring(2)>3) {
      				player.ls.costs[index] *= 10;
   			}
    			else {
     	 			player.ls.costs[index] *= 5;
    			}
			document.getElementById("T"+upg+"DoubleCost").innerHTML = player.ls.costs[index];
			document.getElementById("T"+upg+"DoubleCount").innerHTML = player.ls.upgrades[index]*2;
		}
		else {
			if (player.ls.upgrades[index] == 0) {
				player.ls.upgrades[index] = 1;
				let num = index + 3;
				document.getElementById("T"+num).innerHTML = "Tier "+num+" generator<br/>unlocked!";
				document.getElementById("DT"+num).style.display = "inline-block";
			}
		}
	}
}
function canBuyUpgrade(upgrade) {
	if(player.ls.potentialUpgrades.includes(upgrade)) {
		let index = player.ls.potentialUpgrades.indexOf(upgrade);
		if(player.ls.upgrades[index]==1&&index<8) {
			return false;
		}
		if(new Decimal(player.ls.costs[index]).lte(player.ls.amount)) {
			return true;
		}		
		return false;
	}
}
