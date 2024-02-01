import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Game from "./features/game/Game";
import Homepage from "./ui/Homepage";
import Victory from "./ui/Victory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />
	},
	{
		path: "/game-play",
		element: <Game />
	},
	{
		path: '/victory',
		element: <Victory />
	}
]);

export default function App() {
	return <RouterProvider router={router} />;
}
