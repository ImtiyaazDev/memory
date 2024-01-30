import { RouterProvider, createBrowserRouter } from "react-router-dom";



import Board from "./features/game/Board";
// import AppLayout from "./ui/AppLayout";
import Homepage from "./ui/Homepage";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />
	},
	{
		path: "/game-play",
		element: <Board />
	}
]);

export default function App() {
	return <RouterProvider router={router} />;
}