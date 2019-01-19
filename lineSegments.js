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
					player.ls.costs[index] *= 20;
				} else {
      					player.ls.costs[index] *= 10;
				}
   			}
    			else {
				if (player.ls.upgrades[index] > 4) {
					player.ls.costs[index] *= 10;
				} else {
     	 				player.ls.costs[index] *= 5;
				}
    			}
			document.getElementById("T"+upg+"DoubleCost").innerHTML = formatValue(player.notation, new Decimal(player.ls.costs[index]), 3, 0)
			document.getElementById("T"+upg+"DoubleCount").innerHTML = formatValue(player.notation, new Decimal(Math.pow(2, player.ls.upgrades[index])), 3, 0);
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
function getLAmount() {
	if(player.ls.amount.root(15).gte(4)) {
        	return player.ls.amount.root(15).minus(3).floor();
	} else {
		return new Decimal(0);
	}
}
function buyTreeItem(item) {
	if (canBuyTreeItem(item)) {
		let index = player.lines.potentialUpgrades.indexOf(item);
		player.lines.amount = player.lines.amount.minus(player.lines.costs[index]);
		player.lines.upgrades[index]++;
		if (index > 3 && index < 11) {
			let num = index - 1;
			player["dotTier"+num].unlocked = true;
		}
		let next = index + 1;
		document.getElementById(player.lines.potentialUpgrades[next]).className = "button";
	}
}
function canBuyTreeItem(item) {
	if (player.lines.potentialUpgrades.includes(item)) {
		let index = player.lines.potentialUpgrades.indexOf(item);
		if((index!=0)&&(player.lines.upgrades[index-1]==0)) {
			return false;
		}
		if(player.lines.upgrades[index]==1) {
			return false;
		}
		if(new Decimal(player.lines.costs[index].lte(player.lines.amount))) {
			return true;
		}
		return false;
	}
}
function lineSegmentReset() {
	if (getLAmount() > 1) {
		player.lines.amount = player.lines.amount.add(getLAmount());
		let temp = player.ls.prestiged;
		pointReset();
		document.getElementById("lineTab").style.display = "";
		let costs = [null,10,100,1000,1e5,1e8,1e12,1e20,1e30,1e43,1e60];
		let costMults = [null,1.12,1.14,1.16,1.18,1.2,1.22,1.24,1.26,1.28,1.3];
		for(let i = 1; i <= 10; i++) {
			player["dotTier"+i].cost = new Decimal(costs[i]);
			player["dotTier"+i].costMult = new Decimal(costMults[i]);
			player["dotTier"+i].amount = new Decimal(0);
			player["dotTier"+i].multiplier = new Decimal(1);
			player["dotTier"+i].bought = 0;
		}
		player.ls = getDefaultSave().ls;
		player.ls.prestiged = temp;
		player.lines.prestiged++;
	}
}
		
		
		
