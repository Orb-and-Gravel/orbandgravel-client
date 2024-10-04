import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userRecord: {},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signedInUser: (state, action) => {
			state.userRecord = action.payload;
		},
		logoutUser: (state) => {
			state.userRecord = {};
		},
	},
});

export const { signedInUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
