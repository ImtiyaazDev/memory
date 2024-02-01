import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	players: [
		{
			name: "",
			score: 0,
			id: 1
		},
		{
			name: "",
			score: 0,
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
		},
		updateScore: (state, action) => {
			const { playerId } = action.payload;
			const player = state.players.find((player) => player.id === playerId);
			if (player) {
				player.score += 1;
			}
		}
	}
});

export const { updateName, updatePlayerTurn, updateScore } =
	playerSlice.actions;
export default playerSlice.reducer;

export const getPlayers = (state) => state.player.players;
export const getCurrentTurn = (state) => state.player;
export const getPlayerScore = (state) =>
	state.player.players.map((player) => player.score);
