const randomStockData = [];
const randomStockDataTotal = [];
const date = (new Date().getTime() - (3600000 * (24*7)));

for(let i = 0; i < (24 * 7); i++) {

	let number = parseFloat((Math.random() * 100).toFixed(2))

	randomStockData.push([
		date + (3600000*i),
		number
	])

	randomStockDataTotal.push([
		date + (3600000*i),
		parseFloat((number*3).toFixed(2))
	])
}

const randomStockMonthly = [];
const randomStockMonthlyTotal = [];

for(let m = 0; m < 12; m++) {
	let number = parseFloat((Math.random() * 100).toFixed(2))
	randomStockMonthly.push(number)
	randomStockMonthlyTotal.push(parseFloat((number*3).toFixed(2)))
}

export const hourly = {
	wind: randomStockData,
	hydro: randomStockData,
	solar: randomStockData,
	total: randomStockDataTotal
};

export const monthly = {
	wind: randomStockMonthly,
	hydro: randomStockMonthly,
	solar: randomStockMonthly,
	total: randomStockMonthlyTotal
};