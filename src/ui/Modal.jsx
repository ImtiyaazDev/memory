import { useNavigate } from "react-router-dom";

import InputPlayer from "../features/player/InputPlayer";
import PlayerBalloons from "../features/player/PlayerBalloons";
import PlayerRocket from "../features/player/PlayerRocket";
import Button from "./Button";

export default function Modal() {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/game-play");
	}

	return (
		<section className="flex h-full w-full flex-col items-center gap-3">
			<div className="flex h-full w-full items-center gap-4 px-4 py-2">
				<div className="flex h-full w-1/2 flex-col gap-5 px-4 py-2">
					<PlayerBalloons styles="self-center" />
					<InputPlayer
						placeholder="Name of Player 1"
						id={1}
					/>
				</div>

				<div className="flex h-full w-1/2 flex-col gap-5 px-4 py-2">
					<PlayerRocket styles="self-center" />
					<InputPlayer
						placeholder="Name of Player 2"
						id={2}
					/>
				</div>
			</div>
			<Button
				type="primary"
				style="w-44"
				onClick={handleClick}
			>
				Let&apos;s Play
			</Button>
		</section>
	);
}
