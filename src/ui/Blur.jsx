export default function Blur({ type }) {
	const base = "absolute aspect-square rounded-full blur-3xl";

	const variant = {
		large: `${base} radial-sm-70 left-1/2 top-3/4 w-[650px]`,
		small: `${base} radial-sm-30  left-1/2 top-3/4 w-[650px]`,
		normalLg: `${base} radial-sm -top-1/2 left-1/2 z-0 w-[800px]`,
		normalSm: `${base} radial-sm bottom-1/2 right-3/4 z-0 w-[620px]`
	};

	return <div className={variant[type]}>&nbsp;</div>;
}
