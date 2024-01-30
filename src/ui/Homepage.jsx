import PlayerBalloons from "./../features/player/PlayerBalloons";
import PlayerRocket from "./../features/player/PlayerRocket";
import Button from "./Button";
import Input from "./Input";

export default function Homepage() {
	return (
		<div className="radial-lg relative grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden">
			<div className="radial-sm-70 absolute left-1/2 top-3/4 aspect-square w-[650px] rounded-full blur-3xl">
				&nbsp;
			</div>
			<div className="radial-sm-30 absolute left-1/2 top-3/4 aspect-square w-[650px] rounded-full blur-3xl">
				&nbsp;
			</div>
			<div className="radial-sm absolute -top-1/2 left-1/2 z-0 aspect-square w-[800px] rounded-full blur-3xl">
				&nbsp;
			</div>
			<div className="radial-sm absolute bottom-1/2 right-3/4 z-0 aspect-square w-[620px] rounded-full blur-3xl">
				&nbsp;
			</div>

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
							<form className="gap- flex justify-between">
								<Input placeholder="Name of Player 1" />
							</form>
						</div>

						<div className="flex h-full w-1/2 flex-col justify-around px-4 py-2">
							<PlayerRocket styles="self-center" />
							<form className="gap- flex justify-between">
								<Input placeholder="Name of Player 2" />
							</form>
						</div>
					</div>

					<Button type="primary">Let&apos;s Play</Button>
				</div>
			</main>
		</div>
	);
}
