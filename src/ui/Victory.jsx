import PlayerAstronaut from "./../features/player/PlayerAstronaut";
import PlayerBalloons from "./../features/player/PlayerBalloons";
import PlayerRocket from "./../features/player/PlayerRocket";
import Blur from "./Blur";
import Button from "./Button";

export default function Victory() {
	return (
		<div className="radial-lg relative h-screen w-screen overflow-hidden">
			<Blur type="large" />
			<Blur type="small" />
			<Blur type="normalLg" />
			<Blur type="normalSm" />

			<main className="z-50">
				<div className="flex h-screen flex-col items-center gap-6">
					<div className="z-50 flex flex-col items-center space-y-4 mt-14">
						<div className="space-y-2 text-center font-bold text-white">
							<p className="text-4xl font-bold text-white">Well Done!</p>
							<p className="text-6xl">%PLAYER%</p>
						</div>
						<PlayerAstronaut />
					</div>

					<div className="z-50 flex h-2/3 w-7/12 flex-col items-center gap-9 px-4 py-2">
						{/* Top banner */}
						<div className="to-yellow-specno flex h-1/4 w-3/4 items-center justify-evenly rounded-lg bg-gradient-to-l from-white">
							<PlayerBalloons styles="h-24 w-24" />
							<p className="text-blue-specnoDarker text-xl font-bold">
								1st Place
							</p>
							<p className="text-blue-specnoDarker text-xl">%NAME</p>
							<p className="text-blue-specnoDarker text-xl">Score: $SCORE$</p>
						</div>
						{/* Bottom banner */}
						<div className="flex h-1/4 w-3/4 items-center justify-evenly rounded-lg bg-white">
							<PlayerRocket styles="h-24 w-24" />
							<p className="text-blue-specnoDarker text-xl font-bold">
								2nd Place
							</p>
							<p className="text-blue-specnoDarker text-xl">%NAME</p>
							<p className="text-blue-specnoDarker text-xl">Score: $SCORE$</p>
						</div>
						<Button type="secondary">Play Again</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
