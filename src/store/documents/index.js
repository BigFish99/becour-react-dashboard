import {regions} from '../../testData/regions'
import {tradeConfirmations} from '../../testData/tradeConfirmations'
import {tradeConfirmationsUpdate} from '../../testData/tradeConfirmationsUpdate'

const initialState = {
	regions: regions,
	years: {
		current: new Date().getFullYear(),
		available: [2019, 2020, 2021, 2022]
	},
	tradeConfirmations: tradeConfirmations,
	billingHistory: [],
	contracts: [],
	reportingData: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_CURRENT_YEAR': {
			return {
				...state,
				years: {
					...state.years,
					current: action.year
				}
			};
		}
		case 'GET_TRADE_CONFIRMATIONS': {
			if(action.year === 2020) {
				return {
					...state,
					tradeConfirmations: tradeConfirmations
				}
			}
			return {
				...state,
				tradeConfirmations: tradeConfirmationsUpdate
			}
		}
		default:
			return state;
	}
}
