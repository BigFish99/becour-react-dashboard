const initialState = {
	loading: true,
	tradeConfirmations: [],
	proofOfPurchases: [],
	auditReports: [],
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
				auditReports: action.payload.data.auditReports ? action.payload.data.auditReports : [],
				proofOfPurchases: action.payload.data.proofOfPurchases ? action.payload.data.proofOfPurchases : [],
				tradeConfirmations: action.payload.data.tradeConfirmations ? action.payload.data.tradeConfirmations : [],
				contracts: action.payload.data.contracts ? action.payload.data.contracts : []
			}
		}
		default:
			return state;
	}
}

export default documents
