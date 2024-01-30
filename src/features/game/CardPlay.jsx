import { useSelector } from "react-redux";

import { getPlayerName } from "../player/playerSlice";

export default function CardPlay() {
	const name = useSelector(getPlayerName);

	return <h1>{name}</h1>;
}
