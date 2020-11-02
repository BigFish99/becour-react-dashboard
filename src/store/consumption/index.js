const initialState = {
	overview: {
		totalConsumption: 1435,
		totalRenewable: 1290,
		totalNonRenewable: 140,
		totalAvoidedEmissions: 920,
	},
	energyDisclosure: {
		renewable: {
			total: 95,
			wind: 0,
			solar: 0,
			hydro: 0
		},
		nuclear: 2.2,
		fossil: 2.8
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
