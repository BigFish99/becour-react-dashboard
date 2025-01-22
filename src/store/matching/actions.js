import { apiVersion } from "../apiVersion"
export const getMatchingData = (year, region, consumptionPoint) => ({
	type: 'GET_CONSUMER_MATCHING',
	payload: {
		request: {
			url: '/getMatchingData',
			params: {
				year: year,
				region: region,
				consumptionPoint: consumptionPoint,
				version: apiVersion
			},
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		}
	}
})