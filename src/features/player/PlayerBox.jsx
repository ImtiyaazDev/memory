import { useSelector } from "react-redux";

import { getPlayers, getPlayerScore } from "../game/gameSlice";

export default function PlayerBox({ playerIcon, id, children }) {
	const [playerOne, playerTwo] = useSelector(getPlayers);
	const [playerOneScore, playerTwoScore] = useSelector(getPlayerScore);

	return (
		<div className="flex h-1/2 flex-col gap-4 self-center text-center">
			<div className="flex flex-col items-center gap-6 rounded-lg bg-gradient-to-tl from-white/10 to-white/60 py-6">
				{playerIcon}
				<div className="space-y-3">
					<p className="text-xl font-semibold text-white">
						{playerOne.id === id ? playerOne.name : playerTwo.name}
					</p>
					<p className="text-2xl font-semibold text-white">
						Score: {playerOne.id === id ? playerOneScore : playerTwoScore}
					</p>
				</div>
			</div>
			{children}
		</div>
	);
}
