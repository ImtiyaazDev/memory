import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Blur from "../../ui/Blur";
import Button from "../../ui/Button";
import PlayerBox from "../player/PlayerBox";
import PlayerBalloons from "./../player/PlayerBalloons";
import PlayerRocket from "./../player/PlayerRocket";
import { deck } from "./Deck";
import SingleCard from "./SingleCard";

export default function Board() {
	const [cards, setCards] = useState([]);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disableCard, setDisableCard] = useState(false);
	const navigate = useNavigate();

	function handleExit() {
		navigate("/");
	}

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
		setDisableCard(false);
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
				<Button
					type="danger"
					onClick={handleExit}
				>
					Exit Game
				</Button>
			</header>

			<main className="z-50 grid h-full grid-cols-[240px_1fr_240px] content-center space-x-5 px-6">
				<PlayerBox
					playerIcon={<PlayerBalloons />}
					playerNumber={1}
				/>
				{/* Main game play */}
				<div className="grid grid-cols-9 grid-rows-6 justify-items-center gap-y-4 rounded-lg bg-gradient-to-tl from-white/10 to-white/60 px-3 py-3">
					{cards.map((card) => (
						<SingleCard
							card={card}
							key={`${card.rank} - ${card.suit}`}
							handleCardChoice={handleCardChoice}
							flipped={
								card === choiceOne || card === choiceTwo || card.isMatched
							}
							disableCard={disableCard}
						/>
					))}
				</div>

				<PlayerBox
					playerIcon={<PlayerRocket />}
					playerNumber={2}
				/>		
			</main>
		</div>
	);
}
