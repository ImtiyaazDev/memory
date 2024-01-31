export default function Header({ children }) {
	return (
		<header className="grid grid-cols-12 items-center justify-between px-6 py-3">
			<h2 className="z-50 col-start-6 col-end-8 row-span-full self-start justify-self-center text-4xl font-semibold text-white">
				Memory
			</h2>
			<div className="z-50 col-start-10 col-end-13 row-span-full space-x-4 justify-self-end">
				{children}
			</div>
		</header>
	);
}
