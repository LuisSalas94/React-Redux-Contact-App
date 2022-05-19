//actions
import { ADD_CONTACT } from "./contactActions";

const initialState = [
	{
		id: 0,
		name: "User 1",
		email: "user1@gmail.com",
		number: 1234,
	},
	{
		id: 1,
		name: "User 2",
		email: "user2@gmail.com",
		number: 4321,
	},
	{
		id: 2,
		name: "User 3",
		email: "user3@gmail.com",
		number: 5678,
	},
];

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return [...state, action.payload];

		default:
			return state;
	}
};

export default contactReducer;
