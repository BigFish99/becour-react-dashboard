import {tradeConfirmations} from '../../testData/tradeConfirmations'
import {tradeConfirmationsUpdate} from '../../testData/tradeConfirmationsUpdate'

const initialState = {
	tradeConfirmations: tradeConfirmations,
	billingHistory: [],
	contracts: [],
	reportingData: []
};

export default (state = initialState, action) => {
	switch (action.type) {
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
