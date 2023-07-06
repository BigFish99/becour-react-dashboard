import {testNumber} from '../../functions/testNumber'

const months = [
	'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
	'October', 'November', 'December'
];

const createNewTestData = () => {
	return Array.from(Array(12).keys()).map((_, index) => {
		return {
			name: months[index],
			charts: [
				{
					label: "Projected",
					total: 100,
					series: [
						{
							name: "Matched",
							description: "Matched description",
							value: 70
						},
						{
							name: "Planned",
							description: "Planned description",
							value: 20
						}
					],
					colors: ['#1A5237', '#79C363'],
					backgroundColor: 'rgba(121, 193, 98, .3)'
				},
				{
					label: "Night",
					total: testNumber(5000, 10000),
					series: [
						{
							name: "Matched",
							description: "Night description",
							value: testNumber(500, 5000)
						}
					],
					colors: ["#F07533"],
					backgroundColor: 'rgba(239, 117, 51, .3)'
				},
				{
					label: "Sites",
					total: testNumber(5, 10),
					series: [
						{
							name: "Matched",
							description: "Sites description",
							value: testNumber(1, 5)
						}
					],
					colors: ['#FACE34'],
					backgroundColor: 'rgba(250, 206, 52, .3)'
				}
			]
		}
	})
}

const initialState = {
	loading: true,
	summary: {
		name: "",
		description: "",
		charts: []
	},
	months: []
};

const matching = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONSUMER_MATCHING': {
			return {
				...state,
				loading: true
			}
		}
		case 'GET_CONSUMER_MATCHING_SUCCESS': {
			return {
				...action.payload.data.matchingData,
				loading: false
			}
		}
		default:
			return state;
	}
}

export default matching
