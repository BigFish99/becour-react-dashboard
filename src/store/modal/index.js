const initialState = {
	loading: true,
	active: false,
	content: null
};

const modal = (state = initialState, action) => {
	switch (action.type) {

		case 'ACTIVATE_MODAL':
			return {
				...state,
				active: true,
				content: action.payload
			}

		case 'DEACTIVATE_MODAL':
			return {
				...state,
				active: false
			}

		default:
			return state;
	}
}

export default modal
