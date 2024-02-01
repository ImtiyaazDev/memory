import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	players: [
		{
			name: "",
			matchedPairs: 0,
			currentTurn: true,
			id: 1
		},
		{
			name: "",
			matchPairs: 0,
			currentTurn: false,
			id: 2
		}
	]
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		updateName: (state, action) => {
			const { playerId, name } = action.payload;
			state.players.find((player) => player.id === playerId).name = name;
		}
	}
});

export const { updateName } = playerSlice.actions;
export default playerSlice.reducer;

export const getPlayers = (state) => state.player.players;
