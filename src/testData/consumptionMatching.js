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


const data = {
	type: 'stock',
	series: {
		wind: randomStockData,
		hydro: randomStockData,
		solar: randomStockData,
		total: randomStockDataTotal
	}
}

export default data