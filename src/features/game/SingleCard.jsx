export default function SingleCard({
	card,
	handleCardChoice,
	flipped,
	disableCard
}) {
	function handleCardClick() {
		if (!disableCard) handleCardChoice(card);
	}

	return (
		<div className="relative">
			<div>
				{/* Front card */}
				<img
					src={card.src}
					alt={`${card.rank} of ${card.suit}`}
					className={`${flipped ? "rotate-y-front delay-200" : "rotate-y-back"} absolute block w-5/6 transition-transform ease-in`}
				/>
				{/* Back card */}
				<img
					src="/assets/cards/Card_Back.png"
					alt="Back card"
					className={`${flipped ? "rotate-y-back delay-0" : ""} block w-5/6 transition-transform delay-200 ease-in`}
					onClick={handleCardClick}
				/>
			</div>
		</div>
	);
}
