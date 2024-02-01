import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PlayerBalloons from "../features/player/PlayerBalloons";
import PlayerRocket from "../features/player/PlayerRocket";
import { updateName } from "./../features/player/playerSlice";
import Button from "./Button";

export default function Modal() {
	const [playerOneName, setPlayerOneName] = useState("");
	const [playerTwoName, setPlayerTwoName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleInputChange(id, name) {
		if (id === 1) {
			setPlayerOneName(name);
		} else if (id === 2) {
			setPlayerTwoName(name);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!playerOneName || !playerTwoName) return;
		dispatch(updateName({ playerId: 1, name: playerOneName }));
		dispatch(updateName({ playerId: 2, name: playerTwoName }));
		navigate("/game-play");
	}

	return (
		<section className="flex h-full w-full flex-col items-center gap-3">
			<div className="flex w-full items-center justify-around px-4 py-2">
				<PlayerRocket styles="self-end" />
				<PlayerBalloons styles="self-center" />
			</div>

			<form
				className="flex h-full w-full flex-col items-center gap-5 px-4 py-2"
				onSubmit={handleSubmit}
			>
				<div className="flex w-full justify-between gap-5">
					<input
						type="text"
						placeholder="Player 1 Name"
						className="focus:ring-blue-specnoDark w-full rounded-lg px-4 py-2 font-sans text-neutral-600 outline-0 focus:ring-4"
						value={playerOneName}
						onChange={(e) => handleInputChange(1, e.target.value)}
					/>
					<input
						type="text"
						placeholder="Player 2 Name"
						className="focus:ring-blue-specnoDark w-full rounded-lg px-4 py-2 font-sans text-neutral-600 outline-0 focus:ring-4"
						value={playerTwoName}
						onChange={(e) => handleInputChange(2, e.target.value)}
					/>
				</div>
				<Button
					type="primary"
					style="w-44"
				>
					Let&apos;s Play
				</Button>
			</form>
		</section>
	);
}
