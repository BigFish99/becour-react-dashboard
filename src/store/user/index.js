import {regions} from '../../testData/regions'
import {getCurrentRegion} from './functions'

const initialState = {
	loading: true,
	customer: 'Big Fish AS',
	regions: {
		current: {
			id: 'all',
			name: 'All'
		},
		available: regions
	},
	years: {
		current: new Date().getFullYear(),
		available: [2019, 2020, 2021, 2022]
	},
};

export default function (state = initialState, action) {
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
		default:
			return state;
	}
}