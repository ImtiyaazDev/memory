import { useState } from "react";

import Blur from "./Blur";
import Button from "./Button";
import Header from "./Header";
import Modal from "./Modal";

export default function Homepage() {
	const [isActive, setIsActive] = useState(false);
	const [isExiting, setIsExiting] = useState(false);

	function handleStart() {
		setIsActive((show) => !show);
		setIsExiting(false);
	}

	function handleExit() {
		setIsExiting((exit) => !exit);
	}

	return (
		<div className="radial-lg relative grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden">
			<Blur type="large" />
			<Blur type="small" />
			<Blur type="normalLg" />
			<Blur type="normalSm" />

			<Header>
				<Button
					type="danger"
					onClick={handleExit}
					disabled={isExiting}
				>
					Exit Game
				</Button>
			</Header>

			<main className="z-50">
				<div className="flex h-[75vh] flex-col items-center justify-evenly gap-6">
					<h1 className="text-5xl font-bold text-white">
						Are you ready to play?
					</h1>

					<div className="flex h-1/2 w-7/12 items-center gap-9 px-4 py-2">
						{isActive && <Modal />}
					</div>

					{!isActive && (
						<Button
							type="primary"
							onClick={handleStart}
						>
							Start Here
						</Button>
					)}
					{isExiting && (
						<p className="text-lg font-semibold text-white mt-14">
							Can&apos;t leave the game without having some fun first 😁
						</p>
					)}
				</div>
			</main>
		</div>
	);
}
