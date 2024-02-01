import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Board from "./features/game/Board";
import Homepage from "./ui/Homepage";
import Victory from "./ui/Victory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />
	},
	{
		path: "/game-play",
		element: <Board />
	},
	{
		path: '/victory',
		element: <Victory />
	}
]);

export default function App() {
	return <RouterProvider router={router} />;
}
