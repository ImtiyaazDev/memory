import Blur from "../../ui/Blur";
import Button from "../../ui/Button";

export default function Board() {
	return (
		<div className="radial-lg relative grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden">
			<Blur type="large" />
			<Blur type="small" />
			<Blur type="normalLg" />
			<Blur type="normalSm" />

			<header className="ml-auto flex items-center px-6 py-3">
				<Button type="warning">Restare Game</Button>
				<Button type="danger">Exit Game</Button>
			</header>

			<main className="z-50">
				<div className="flex h-full flex-col items-center justify-start gap-6">
					<h2 className="z-50 self-auto text-4xl font-semibold text-white">
						Memory
					</h2>
				</div>
			</main>
		</div>
	);
}
