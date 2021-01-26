const initialState = {
	loading: true,
	overview: {
		totalConsumption: {
			value: 0,
			unit: ''
		},
		totalRenewable: {
			value: 0,
			unit: ''
		},
		totalNonRenewable: {
			value: 0,
			unit: ''
		},
		totalAvoidedEmissions: {
			value: 0,
			unit: ''
		},
	},
	energyDisclosure: {
		documented: {
			total: 0,
			wind: 0,
			solar: 0,
			hydro: 0
		},
		undocumented: 0
	},
	details: {
		renewable: {
			value: 0,
			unit: ''
		},
		totalPurchased: {
			value: 0,
			unit: ''
		},
		totalInderectEmissions: {
			value: 0,
			unit: ''
		},
		referenceMixEmissions: {
			value: 0,
			unit: ''
		},
		totalSavings: {
			value: 0,
			unit: ''
		}
	},
	consumptionLocations: [],
	consumptionMatching: {
		forecast: [],
		wind: [],
		hydro: [],
		solar: [],
		total: []
	}
};

const consumption = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONSUMPTION_DATA': {
			return {
				...state,
				loading: true
			}
		}
		case 'GET_CONSUMPTION_DATA_SUCCESS': {
			return {
				...action.payload.data,
				loading: false
			}
		}
		case 'CLEAR_CONSUMPTION_DATA': {
			return initialState
		}
		default:
			return state;
	}
}

export default consumption