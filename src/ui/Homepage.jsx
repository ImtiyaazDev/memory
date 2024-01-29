export default function Homepage() {
	return (
		<div className="radial-lg relative h-screen w-screen overflow-hidden">
			<div className="radial-sm-70 absolute left-1/2 top-3/4 aspect-square w-[650px] rounded-full blur-3xl">
				&nbsp;
			</div>
			<div className="radial-sm-30 absolute left-1/2 top-3/4 aspect-square w-[650px] rounded-full blur-3xl">
				&nbsp;
			</div>
			<div className="radial-sm absolute -top-1/2 left-1/2 z-0 aspect-square w-[800px] rounded-full blur-3xl">
				&nbsp;
			</div>
			<div className="radial-sm absolute bottom-1/2 right-3/4 z-0 aspect-square w-[620px] rounded-full blur-3xl">
				&nbsp;
			</div>
			
			<main></main>
		</div>
	);
}
