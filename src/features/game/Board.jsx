import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Blur from "../../ui/Blur";
import Button from "../../ui/Button";
import PlayerBox from "../player/PlayerBox";
import {
	updatePlayerTurn,
	getCurrentTurn,
	updateScore
} from "../player/playerSlice";
import Header from "./../../ui/Header";
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
	const dispatch = useDispatch();
	const { currentPlayer } = useSelector(getCurrentTurn);

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

	const handleUpdatePlayerTurn = useCallback(() => {
		const nextPlayer = currentPlayer === 1 ? 2 : 1;
		dispatch(updatePlayerTurn(nextPlayer));
	}, [currentPlayer, dispatch]);

	const handleUpdateScore = useCallback(() => {
		dispatch(updateScore({ playerId: currentPlayer }));
	}, [dispatch, currentPlayer]);

	// Compare two cards
	useEffect(
		function () {
			if (choiceOne && choiceTwo) {
				setDisableCard(true);
				// Incorrect Choice
				if (
					!(
						choiceOne.src.split("/").includes("joker") &&
						choiceTwo.src.split("/").includes("joker")
					) &&
					(choiceOne.color !== choiceTwo.color ||
						choiceOne.rank !== choiceTwo.rank)
				) {
					setTimeout(handleUpdatePlayerTurn, 500);
				}
				// FIXME: Refactor into more reusable - duplicate code
				if (
					choiceOne.src.split("/").includes("joker") &&
					choiceTwo.src.split("/").includes("joker")
				) {
					setCards((prevCards) => {
						return prevCards.map((card) => {
							if (card.suit === choiceOne.suit) {
								handleUpdateScore();
								return { ...card, isMatched: true, src: null };
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
					setCards((prevCards) => {
						return prevCards.map((card) => {
							if (
								card.color === choiceOne.color &&
								card.rank === choiceOne.rank
							) {
								handleUpdateScore();
								return { ...card, isMatched: true, src: null };
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

			<Header>
				<Button type="warning">Restart Game</Button>
				<Button
					type="danger"
					onClick={handleExit}
				>
					Exit Game
				</Button>
			</Header>

			<main className="z-50 grid h-full grid-cols-[240px_1fr_240px] content-center space-x-5 px-6">
				<PlayerBox
					playerIcon={<PlayerBalloons />}
					id={1}
				>
					{currentPlayer === 1 && (
						<p className="bg-green-specno rounded-lg py-3 text-xl font-bold text-white">
							It&apos;s Your Turn
						</p>
					)}
				</PlayerBox>
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
					id={2}
				>
					{currentPlayer === 2 && (
						<p className="text-blue-specnoNormal rounded-lg bg-white py-3 text-xl font-bold">
							It&apos;s Your Turn
						</p>
					)}
				</PlayerBox>
			</main>
		</div>
	);
}
