export default function PlayerBox({ playerIcon, playerNumber }) {
	return (
		<div className="flex h-1/2 flex-col gap-4 self-center text-center">
			<div className="flex flex-col items-center gap-6 rounded-lg bg-gradient-to-tl from-white/10 to-white/60 py-6">
				{playerIcon}
				<div className="space-y-3">
					<p className="text-xl font-semibold text-white">
						Player {playerNumber}
					</p>
					<p className="text-2xl font-semibold text-white">Score: 10</p>
				</div>
			</div>
			<p
				className={`${playerNumber === 1 ? "bg-green-specno text-white" : "text-blue-specnoNormal bg-white"} rounded-lg py-3 text-xl font-bold`}
			>
				It&apos;s Your Turn
			</p>
		</div>
	);
}
