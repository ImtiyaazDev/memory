import { useState } from "react";

import Blur from "./Blur";
import Button from "./Button";
import Modal from "./Modal";

export default function Homepage() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="radial-lg relative grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden">
			<Blur type="large" />
			<Blur type="small" />
			<Blur type="normalLg" />
			<Blur type="normalSm" />

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

					<div className="flex h-1/2 w-1/2 items-center gap-9 px-4 py-2">
						{isActive && <Modal />}
					</div>

					{!isActive && (
						<Button
							type="primary"
							onClick={() => setIsActive((show) => !show)}
						>
							Start Here
						</Button>
					)}
				</div>
			</main>
		</div>
	);
}
