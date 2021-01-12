const initialState = {
	loading: true,
	tradeConfirmations: [],
	contracts: [],
};

const documents = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONSUMER_DOCUMENTS': {
			return {
				...state,
				loading: true
			}
		}
		case 'GET_CONSUMER_DOCUMENTS_SUCCESS': {
			return {
				...state,
				loading: false,
				tradeConfirmations: action.payload.data.tradeConfirmations ? action.payload.data.tradeConfirmations : [],
				contracts: action.payload.data.contracts ? action.payload.data.contracts : []
			}
		}
		default:
			return state;
	}
}

export default documents
