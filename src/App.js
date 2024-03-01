import { useState } from 'react';
import TrashIco from './assets/images/trash.svg';

function App() {
	return (
		<div className=" bg-[#EA5959] h-screen w-screen flex items-center justify-center">
			<div className="w-[983px] h-[502px] bg-white rounded-lg shadow-md py-5 px-10">
				<h1 className="text-3xl font-bold">All Tasks</h1>
				<div>
					<input
						className="bg-[#F3F3F3] w-full h-[46px] rounded-lg px-4 mt-5"
						placeholder="Add a new task "
					/>
				</div>
				<div className="mt-5 space-y-4">
					{[1, 2, 3, 4, 5].map((item) => (
						<Item key={item} />
					))}
				</div>
			</div>
		</div>
	);
}

const Item = () => {
	const [isActive, setIsActive] = useState(false);

	const onToggle = () => setIsActive(!isActive);
	return (
		<div className="flex flex-row items-center gap-4">
			<button
				className="h-[28px] w-[28px] rounded-lg border border-[#EA5959] flex items-center justify-center"
				onClick={onToggle}
			>
				{isActive && (
					<div className="bg-[#EA5959] rounded-md	 w-5 h-5" />
				)}
			</button>
			<div className="flex-1">
				<p>Get a new helmet</p>
			</div>
			<button className="hover:bg-gray-200 p-2 rounded-lg">
				<img src={TrashIco} alt="" />
			</button>
		</div>
	);
};

export default App;
