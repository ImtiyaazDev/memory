import Blur from "../../ui/Blur";
import Button from "../../ui/Button";
import PlayerBalloons from "./../player/PlayerBalloons";
import PlayerRocket from "./../player/PlayerRocket";

const deck = [
	{ rank: 2, suit: "clubs", src: "/src/assets/cards/front/clubs/2.png" },
	{ rank: 3, suit: "clubs", src: "/src/assets/cards/front/clubs/3.png" },
	{ rank: 4, suit: "clubs", src: "/src/assets/cards/front/clubs/4.png" },
	{ rank: 5, suit: "clubs", src: "/src/assets/cards/front/clubs/5.png" },
	{ rank: 6, suit: "clubs", src: "/src/assets/cards/front/clubs/6.png" },
	{ rank: 7, suit: "clubs", src: "/src/assets/cards/front/clubs/7.png" },
	{ rank: 8, suit: "clubs", src: "/src/assets/cards/front/clubs/8.png" },
	{ rank: 9, suit: "clubs", src: "/src/assets/cards/front/clubs/9.png" },
	{ rank: 10, suit: "clubs", src: "/src/assets/cards/front/clubs/10.png" },
	{ rank: "A", suit: "clubs", src: "/src/assets/cards/front/clubs/ace.png" },
	{ rank: "J", suit: "clubs", src: "/src/assets/cards/front/clubs/jack.png" },
	{ rank: "K", suit: "clubs", src: "/src/assets/cards/front/clubs/king.png" },
	{ rank: "Q", suit: "clubs", src: "/src/assets/cards/front/clubs/queen.png" },
	{ rank: 2, suit: "diamonds", src: "/src/assets/cards/front/diamonds/2.png" },
	{ rank: 3, suit: "diamonds", src: "/src/assets/cards/front/diamonds/3.png" },
	{ rank: 4, suit: "diamonds", src: "/src/assets/cards/front/diamonds/4.png" },
	{ rank: 5, suit: "diamonds", src: "/src/assets/cards/front/diamonds/5.png" },
	{ rank: 6, suit: "diamonds", src: "/src/assets/cards/front/diamonds/6.png" },
	{ rank: 7, suit: "diamonds", src: "/src/assets/cards/front/diamonds/7.png" },
	{ rank: 8, suit: "diamonds", src: "/src/assets/cards/front/diamonds/8.png" },
	{ rank: 9, suit: "diamonds", src: "/src/assets/cards/front/diamonds/9.png" },
	{ rank: 10, suit: "diamonds", src: "/src/assets/cards/front/diamonds/10.png" },
	{ rank: "A", suit: "diamonds", src: "/src/assets/cards/front/diamonds/ace.png" },
	{ rank: "J", suit: "diamonds", src: "/src/assets/cards/front/diamonds/jack.png" },
	{ rank: "K", suit: "diamonds", src: "/src/assets/cards/front/diamonds/king.png" },
	{ rank: "Q", suit: "diamonds", src: "/src/assets/cards/front/diamonds/queen.png" },
	{ rank: 2, suit: "hearts", src: "/src/assets/cards/front/hearts/2.png" },
	{ rank: 3, suit: "hearts", src: "/src/assets/cards/front/hearts/3.png" },
	{ rank: 4, suit: "hearts", src: "/src/assets/cards/front/hearts/4.png" },
	{ rank: 5, suit: "hearts", src: "/src/assets/cards/front/hearts/5.png" },
	{ rank: 6, suit: "hearts", src: "/src/assets/cards/front/hearts/6.png" },
	{ rank: 7, suit: "hearts", src: "/src/assets/cards/front/hearts/7.png" },
	{ rank: 8, suit: "hearts", src: "/src/assets/cards/front/hearts/8.png" },
	{ rank: 9, suit: "hearts", src: "/src/assets/cards/front/hearts/9.png" },
	{ rank: 10, suit: "hearts", src: "/src/assets/cards/front/hearts/10.png" },
	{ rank: "A", suit: "hearts", src: "/src/assets/cards/front/hearts/ace.png" },
	{ rank: "J", suit: "hearts", src: "/src/assets/cards/front/hearts/jack.png" },
	{ rank: "K", suit: "hearts", src: "/src/assets/cards/front/hearts/king.png" },
	{ rank: "Q", suit: "hearts", src: "/src/assets/cards/front/hearts/queen.png" },
	{ rank: 2, suit: "spades", src: "/src/assets/cards/front/spades/2.png" },
	{ rank: 3, suit: "spades", src: "/src/assets/cards/front/spades/3.png" },
	{ rank: 4, suit: "spades", src: "/src/assets/cards/front/spades/4.png" },
	{ rank: 5, suit: "spades", src: "/src/assets/cards/front/spades/5.png" },
	{ rank: 6, suit: "spades", src: "/src/assets/cards/front/spades/6.png" },
	{ rank: 7, suit: "spades", src: "/src/assets/cards/front/spades/7.png" },
	{ rank: 8, suit: "spades", src: "/src/assets/cards/front/spades/8.png" },
	{ rank: 9, suit: "spades", src: "/src/assets/cards/front/spades/9.png" },
	{ rank: 10, suit: "spades", src: "/src/assets/cards/front/spades/10.png" },
	{ rank: "A", suit: "spades", src: "/src/assets/cards/front/spades/ace.png" },
	{ rank: "J", suit: "spades", src: "/src/assets/cards/front/spades/jack.png" },
	{ rank: "K", suit: "spades", src: "/src/assets/cards/front/spades/king.png" },
	{ rank: "Q", suit: "spades", src: "/src/assets/cards/front/spades/queen.png" },
	{ rank: "Joker", suit: "Joker", src: "/src/assets/cards/front/joker/joker-black.png" },
	{ rank: "Joker", suit: "Joker", src: "/src/assets/cards/front/joker/joker-red.png" },
];

export default function Board() {
	return (
		<div className="radial-lg relative grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden">
			<Blur type="large" />
			<Blur type="small" />
			<Blur type="normalLg" />
			<Blur type="normalSm" />

			<header className="ml-auto flex items-center gap-5 px-6 py-3">
				<div className="flex h-full flex-col items-center justify-start gap-6">
					<h2 className="z-50 self-auto text-4xl font-semibold text-white">
						Memory
					</h2>
				</div>
				<Button type="warning">Restare Game</Button>
				<Button type="danger">Exit Game</Button>
			</header>

			<main className="z-50 grid h-full grid-cols-[240px_1fr_240px] content-center space-x-5 px-6">
				{/* Player 1 - Left side */}
				<div className="flex h-1/2 flex-col gap-4 text-center">
					<div className="flex flex-col items-center gap-6 rounded-lg bg-gradient-to-tl from-white/10 to-white/60 py-6">
						<PlayerBalloons />
						<div className="space-y-3">
							<p className="text-xl font-semibold text-white">Player 1</p>
							<p className="text-2xl font-semibold text-white">Score: 10</p>
						</div>
					</div>
					<p className="bg-green-specno rounded-lg py-3 text-xl font-bold text-white">
						It&apos;s Your Turn
					</p>
				</div>

				{/* Main game play */}
				<div className="grid grid-cols-9 grid-rows-6 self-auto rounded-lg bg-gradient-to-tl from-white/10 to-white/60 px-3 py-3"></div>

				{/* Player 2 - Right side */}
				<div className="flex h-1/2 flex-col gap-4 text-center">
					<div className="flex flex-col items-center gap-6 rounded-lg bg-gradient-to-tl from-white/10 to-white/60 py-6">
						<PlayerRocket />
						<div className="space-y-3">
							<p className="text-xl font-semibold text-white">Player 2</p>
							<p className="text-2xl font-semibold text-white">Score: 10</p>
						</div>
					</div>
					<p className="text-blue-specnoNormal rounded-lg bg-white py-3 text-xl font-bold">
						It&apos;s Your Turn
					</p>
				</div>
			</main>
		</div>
	);
}
