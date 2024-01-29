import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CardPlay from "./features/cards/CardPlay";
import AppLayout from "./ui/AppLayout";
import Homepage from "./ui/Homepage";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Homepage />
			},
			{
				path: "/memory",
				element: <CardPlay />
			}
		]
	}
]);

export default function App() {
	return <RouterProvider router={router} />;
}
