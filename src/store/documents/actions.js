export const getConsumerDocuments = (year, region, point) => ({
	type: 'GET_CONSUMER_DOCUMENTS',
	payload: {
		request: {
			url: '/getConsumerDocuments',
			params: {
				year: year,
				region: region,
				point: point
			},
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		}
	}
})