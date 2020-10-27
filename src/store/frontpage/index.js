//import {testdata} from './testdata'

const initialState = {
	loading: true,
	customer: 'Big Fish AS',
	map: [
		{
			code: 'NO',
			name: "Norway",
			value: 100,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		},
		{
			code: 'SE',
			name: "Sweden",
			value: 80,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		},
		{
			code: 'DK',
			name: "Denmark",
			value: 10,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		},
		{
			code: 'GB',
			name: "United Kingdoms",
			value: 90,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		}
	],
	powerplants: [
		{
			name: 'Borgund',
			url: '//react.becour.com/powerplants/borgund',
			text: 'Hello, world',
			imageUrl: null
		}
	],
	tiles: {
		renewable: 200,
		nonRenewable: 80,
		avoidedEmissions: 200,
		chart: {
			series: [
				{
					name: 'Renewable',
					data: [24, 21, 12, 32, 42, 23, 53, 42, 12, 32, 63, 12]
				},
				{
					name: 'Non-renewable',
					data: [12, 22, 0, 15, 18, 3, 5, 0, 6, 10, 22, 17]
				}
			]
		}
	}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'REMOVE_LOADER': {
			return {
				...state,
				loading: false
			}
		}
		default:
			return state;
	}
}