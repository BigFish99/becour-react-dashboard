import {getCurrentRegion} from './functions'

const initialState = {
	loading: true,
	customer: 'Big Fish AS',
	logo: false,
	regions: {
		current: {
			id: 'all',
			name: 'All'
		},
		point: null,
		available: []
	},
	years: {
		current: new Date().getFullYear(),
		available: [2019, 2020, 2021, 2022]
	},
	map: [],
	powerplants: [],
	tiles: {
		renewable: {
			value: 0,
			unit: ''
		},
		nonRenewable: {
			value: 0,
			unit: ''
		},
		avoidedEmissions: {
			value: 0,
			unit: ''
		},
		chart: {
			series: []
		}
	}
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_SET_CURRENT_YEAR': {
			return {
				...state,
				years: {
					...state.years,
					current: action.year
				}
			};
		}
		case 'USER_SET_CURRENT_REGION': {
			let regions = state.regions.available.slice();
			return {
				...state,
				regions: {
					...state.regions,
					current: getCurrentRegion(regions, action.id)
				}
			}
		}
		case 'USER_SET_REGION_TO_COMPANY_OVERVIEW': {
			return {
				...state,
				regions: {
					...state.regions,
					current: {
						id: 'all',
						name: 'All'
					}
				}
			}
		}
		case 'USER_TOGGLE_REGION_EXPAND': {
			let regions = state.regions.available.slice()
			regions[action.index].expanded = !regions[action.index].expanded;
			return {
				...state,
				regions: {
					...state.regions,
					available: regions
				}
			}
		}
		case 'USER_SET_REGION_EXPAND': {
			let regions = state.regions.available.slice()
			regions[action.index].expanded = true;
			return {
				...state,
				regions: {
					...state.regions,
					available: regions
				}
			}
		}
		case 'USER_GET_CONSUMER_DATA': {
			return {
				...state,
				loading: true
			}
		}
		case 'USER_GET_CONSUMER_DATA_SUCCESS': {
			return {
				...state,
				loading: false,
				regions: {
					...state.regions,
					available: action.payload.data.regions ? action.payload.data.regions : false
				},
				years: {
					...state.years,
					available: action.payload.data.years ? action.payload.data.years : false
				},
				customer: action.payload.data.customer ? action.payload.data.customer : false,
				map: action.payload.data.map ? action.payload.data.map : [],
				powerplants: action.payload.data.powerplants ? action.payload.data.powerplants : [],
				tiles: action.payload.data.tiles ? action.payload.data.tiles : state.tiles
			}
		}
		case 'USER_SET_CURRENT_CONSUMPTION_POINT': {
			return {
				...state,
				regions: {
					...state.regions,
					point: action.point
				}
			}
		}
		case 'USER_CLEAR_CURRENT_CONSUMPTION_POINT': {
			return {
				...state,
				regions: {
					...state.regions,
					point: null
				}
			}
		}
		default:
			return state;
	}
}

export default user