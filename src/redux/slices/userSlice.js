import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userRecord: {},
	guestHash: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setsetSignedInUser: (state, action) => {
			state.userRecord = action.payload;
		},
		logoutUser: (state) => {
			state.userRecord = {};
		},
		setGuestHash: (state, action) => {
			state.guestHash = action.payload;
		},
	},
});

export const { setSignedInUser, logoutUser, setGuestHash } = userSlice.actions;

export default userSlice.reducer;
