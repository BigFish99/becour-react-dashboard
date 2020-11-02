export const getConsumptionData = (year, country) => ({
	type: 'GET_CONSUMPTION_DATA',
	year,
	country
});