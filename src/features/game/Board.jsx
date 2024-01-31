import { useEffect, useState } from "react";

import Blur from "../../ui/Blur";
import Button from "../../ui/Button";
import PlayerBalloons from "./../player/PlayerBalloons";
import PlayerRocket from "./../player/PlayerRocket";
import { deck } from "./Deck";
import SingleCard from "./SingleCard";

export default function Board() {
	const [cards, setCards] = useState([]);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	// shuffle cards
	function shuffleCards() {
		const shuffledCards = [...deck]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card }));

		setChoiceOne(null);
		setChoiceTwo(null);

		setCards(shuffledCards);
	}

	function handleCardChoice(card) {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	}

	// Compare two cards
	useEffect(
		function () {
			if (choiceOne && choiceTwo) {
				setDisableCard(true);
				if (
					choiceOne.src.split("/").includes("joker") &&
					choiceTwo.src.split("/").includes("joker")
				) {
					setCards((prevCards) => {
						console.log(prevCards);
						return prevCards.map((card) => {
							if (card.suit === choiceOne.suit) {
								return { ...card, isMatched: true };
							} else {
								return card;
							}
						});
					});
				}

				if (
					choiceOne.color === choiceTwo.color &&
					choiceOne.rank === choiceTwo.rank
				) {
					// eslint-disable-next-line
					setCards((prevCards) => {
						return prevCards.map((card) => {
							if (
								card.color === choiceOne.color &&
								card.rank === choiceOne.rank
							) {
								return { ...card, isMatched: true };
							} else {
								return card;
							}
						});
					});
					resetChoice();
				} else {
					setTimeout(() => resetChoice(), 1000);
				}
			}
		},
		[choiceOne, choiceTwo]
	);

	function resetChoice() {
		setChoiceOne(null);
		setChoiceTwo(null);
	}

	useEffect(function () {
		shuffleCards();
	}, []);

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
				<div className="flex h-1/2 flex-col gap-4 self-center text-center ">
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
				<div className="grid grid-cols-9 grid-rows-6 gap-y-2 rounded-lg bg-gradient-to-tl from-white/10 to-white/60 px-3 py-3">
					{/* card */}
					{cards.map((card) => (
						<SingleCard
							card={card}
							key={`${card.rank} - ${card.suit}`}
							handleCardChoice={handleCardChoice}
							flipped={
								card === choiceOne || card === choiceTwo || card.isMatched
							}
						/>
					))}
				</div>

				{/* Player 2 - Right side */}
				<div className="flex h-1/2 flex-col gap-4 self-center text-center">
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
