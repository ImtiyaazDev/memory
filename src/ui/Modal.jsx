import { useState } from "react";

import PlayerBalloons from "../features/player/PlayerBalloons";
import PlayerRocket from "../features/player/PlayerRocket";
import Input from "./../ui/Input";
import Button from "./Button";

export default function Modal() {
	const [playerOneName, setPlayerOneName] = useState("");
	const [playerTwoName, setPlayerTwoName] = useState("");

	return (
		<section className="flex h-full w-full flex-col items-center gap-3">
			<div className="flex w-full items-center justify-around px-4 py-2">
				<PlayerRocket styles="self-end" />
				<PlayerBalloons styles="self-center" />
			</div>

			<form className="flex h-full w-full flex-col items-center gap-5 px-4 py-2">
				<div className="flex w-full justify-between gap-5">
					<Input
						placeholder="Name of Player 1"
						id={1}
						name={playerOneName}
						setName={setPlayerOneName}
					/>
					<Input
						placeholder="Name of Player 2"
						id={2}
						name={playerTwoName}
						setName={setPlayerTwoName}
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
