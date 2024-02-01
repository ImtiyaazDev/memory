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
	],
	currentPlayer: 1
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		updateName: (state, action) => {
			const { playerId, name } = action.payload;
			state.players.find((player) => player.id === playerId).name = name;
		},
		updatePlayerTurn: (state, action) => {
			state.currentPlayer = action.payload;
		}
	}
});

export const { updateName, updatePlayerTurn } = playerSlice.actions;
export default playerSlice.reducer;

export const getPlayers = (state) => state.player.players;
export const getCurrentTurn = (state) => state.player;
