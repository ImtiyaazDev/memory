import PlayerBalloons from "./../features/player/PlayerBalloons";
import PlayerRocket from "./../features/player/PlayerRocket";
import Blur from "./Blur";
import Button from "./Button";
import InputPlayer from "./InputPlayer";

export default function Homepage() {
	return (
		<div className="radial-lg relative grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden">
      <Blur type="large"/>
      <Blur type="small"/>
      <Blur type="normalLg"/>
      <Blur type="normalSm"/>

			<header className="ml-auto flex items-center px-6 py-3">
				<Button type="danger">Exit Game</Button>
			</header>

			<main className="z-50">
				<div className="flex h-full flex-col items-center justify-start gap-6">
					<h2 className="z-50 self-auto text-4xl font-semibold text-white">
						Memory
					</h2>
					<h1 className="text-5xl font-bold text-white">
						Are you ready to play?
					</h1>

					<div className="flex h-1/2 w-1/2 items-center justify-around gap-4 px-4 py-2">
						<div className="flex h-full w-1/2 flex-col justify-around px-4 py-2">
							<PlayerBalloons styles="self-center" />
							<InputPlayer placeholder="Name of Player 1" />
						</div>

						<div className="flex h-full w-1/2 flex-col justify-around px-4 py-2">
							<PlayerRocket styles="self-center" />
							<InputPlayer placeholder="Name of Player 2" />
						</div>
					</div>

					<Button type="primary">Let&apos;s Play</Button>
				</div>
			</main>
		</div>
	);
}
