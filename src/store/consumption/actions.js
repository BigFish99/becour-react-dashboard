import { apiVersion } from "../apiVersion"

export const getConsumptionData = (year, region, consumptionPoint) => ({
	type: 'GET_CONSUMPTION_DATA',
	payload: {
		request: {
			url: '/getConsumerConsumption',
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

export const setConsumptionLoading = () => ({
	type: 'SET_CONSUMPTION_LOADING'
})

export const clearConsumptionData = () => ({
	type: 'CLEAR_CONSUMPTION_DATA'
})