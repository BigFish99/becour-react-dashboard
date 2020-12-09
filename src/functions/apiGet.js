import axios from 'axios'

const apiGet = (path, params) => {
	return axios({
		method: 'get',
		url: `${process.env.REACT_APP_API_URL}/${path}`,
		headers: {
			Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
			'Content-Type': 'application/json'
		},
		params: params
	})
}

export default apiGet