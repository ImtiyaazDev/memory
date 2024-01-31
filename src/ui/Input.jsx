export default function Input({ placeholder, name, setName }) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className="focus:ring-blue-specnoDark w-full rounded-lg px-4 py-2 font-sans text-neutral-600 outline-0 focus:ring-4"
			value={name}
			onChange={(e) => setName(e.target.value)}
		/>
	);
}
