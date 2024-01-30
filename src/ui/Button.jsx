export default function Button({ children, disabled, onClick, type }) {
	const base =
		"rounded-lg text-white transition-all duration-300 easi-in outline-0 focus:ring-4";

	const styles = {
		primary: `${base} bg-green-specno px-10 py-3 text-xl font-semibold hover:bg-green-500 focus:ring-green-500`,
		danger: `${base} bg-red-specno z-50 px-3 py-2 font-medium hover:bg-red-700 focus:ring-red-500`
	};

	return (
		<button
			disabled={disabled}
			className={styles[type]}
			onClick={onClick}
		>
			{children}
		</button>
	);
}