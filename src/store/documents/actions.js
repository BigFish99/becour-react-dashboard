export const getTradeConfirmations = () => ({
	type: 'GET_TRADE_CONFIRMATIONS',
	payload: {
		request: {
			url: '/getConsumerDocuments',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		}
	}
})