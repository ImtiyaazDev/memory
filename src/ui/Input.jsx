export default function InputPlayer({ placeholder, onClick, onSubmit }) {
	return (
		<form
			className="flex justify-between"
			onSubmit={onSubmit}
		>
			<input
				type="text"
				placeholder={placeholder}
				className="focus:ring-blue-specnoDark w-full rounded-lg px-4 py-2 font-sans text-neutral-600 outline-0 focus:ring-4"
				onClick={onClick}
			/>
		</form>
	);
}
