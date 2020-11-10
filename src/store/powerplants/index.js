const initialState = {
	loading: false,
	plants: [
		{
			name: 'Name',
			about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			id: 123,
			image: '#',
			location: {
				lat: 12.0023,
				lng: 51.231
			},
			labels: [
				{
					image: '',
				}
			],
			consumption: {
				renewable: 100,
				totalPurchased: 90
			},
			documents: [
				{
					name: 'Fact sheet',
					url: '#'
				}
			]
		}
	]
};

const powerplants = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default powerplants
