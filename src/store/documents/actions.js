export const getConsumerDocuments = (year, region, consumptionPoint) => ({
	type: 'GET_CONSUMER_DOCUMENTS',
	payload: {
		request: {
			url: '/getConsumerDocuments',
			params: {
				year: year,
				region: region,
				consumptionPoint: consumptionPoint
			},
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		}
	}
})