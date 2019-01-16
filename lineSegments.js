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
				if (player.ls.upgrades[index] > 4) {
					player.ls.costs[index] = player.ls.costs[index].times(20);
				} else {
      					player.ls.costs[index] = player.ls.costs[index].times(10);
				}
   			}
    			else {
				if (player.ls.upgrades[index] > 4) {
					player.ls.costs[index] = player.ls.costs[index].times(10);
				} else {
     	 				player.ls.costs[index] = player.ls.costs[index].times(5);
				}
    			}
			document.getElementById("T"+upg+"DoubleCost").innerHTML = formatValue(player.notation, player.ls.costs[index], 3, 0)
			document.getElementById("T"+upg+"DoubleCount").innerHTML = formatValue(player.notation, Math.pow(2, player.ls.upgrades[index]), 3, 0);
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
		if(player.ls.costs[index].lte(player.ls.amount)) {
			return true;
		}		
		return false;
	}
}
