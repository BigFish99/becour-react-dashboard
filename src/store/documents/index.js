const initialState = {
	loading: true,
	tradeConfirmations: [],
	billingHistory: [],
	contracts: [],
	reportingData: []
};

const documents = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TRADE_CONFIRMATIONS': {
			return {
				...state,
				loading: true
			}
		}
		case 'GET_TRADE_CONFIRMATIONS_SUCCESS': {
			return {
				...state,
				loading: false,
				tradeConfirmations: action.payload.data.tradeConfirmations ? action.payload.data.tradeConfirmations : []
			}
		}
		default:
			return state;
	}
}

export default documents
