export const updateCurrentYear = year => ({
	type: 'UPDATE_CURRENT_YEAR',
	year
});

export const getTradeConfirmations = (year, country) => ({
	type: 'GET_TRADE_CONFIRMATIONS',
	year
});