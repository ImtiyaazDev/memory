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

const gameSlice = createSlice({
	name: "game",
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
				player.score = player.score + 2;
			}
		},
		resetScore: (state) => {
			state.players.forEach((player) => (player.score = 0));
		}
	}
});

export const { updateName, updatePlayerTurn, updateScore, resetScore } =
	gameSlice.actions;
export default gameSlice.reducer;

export const getPlayers = (state) => state.game.players;
export const getCurrentTurn = (state) => state.game;
export const getPlayerScore = (state) =>
	state.game.players.map((player) => player.score);
