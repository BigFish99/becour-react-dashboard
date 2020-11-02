import {year2020, year2021, year2019} from '../../testData/consumption'

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
	},
	consumptionLocations: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONSUMPTION_DATA': {
			if(action.year === 2021) {
				return year2021;
			} else if(action.year === 2019) {
				return year2019
			} else {
				return year2020
			}
		}
		default:
			return state;
	}
}
