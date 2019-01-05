function getDefaultSave() {
	return {
		points: 0,
		tier1: {
			cost: 10,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.15
		},
		tier2: {
			cost: 100,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.18
		},
		tier3: {
			cost: 1000,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.21
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
			costMult: 1.24
		},
		tier5: {
			cost: 1e8,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.27
		},
		tier6: {
			cost: 1e12,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.3
		},
		tier7: {
			cost: 1e20,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.33
		},
		tier8: {
			cost: 1e30,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.36
		},
		tier9: {
			cost: 1e43,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.39
		},
		tier10: {
			cost: 1e60,
			amount: 0,
			multiplier: 1,
			bought: 0,
			costMult: 1.42
		},
		version: 0
	};
}
let player = getDefaultSave();
