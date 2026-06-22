import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userRecord: {},
	guestHash: '',
	accessToken: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSignedInUser: (state, action) => {
			state.userRecord = action.payload;
		},
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		logoutUser: (state) => {
			state.userRecord = {};
			state.accessToken = null;
		},
		setGuestHash: (state, action) => {
			state.guestHash = action.payload;
		},
	},
});

export const {
	setSignedInUser,
	setAccessToken,
	logoutUser,
	setGuestHash,
} = userSlice.actions;

export default userSlice.reducer;
