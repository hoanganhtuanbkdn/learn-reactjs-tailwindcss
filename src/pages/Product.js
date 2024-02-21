import Banner from '../components/Banner';
import BlogItem from '../components/BlogItem';

import { useEffect, useState } from 'react';

function App() {
	const [listPosts, setListPosts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/posts')
			.then((raw) => raw.json())
			.then((response) => {
				setListPosts(response);
				console.log('response', response);
			})
			.catch((error) => {
				console.log('error', error);
			});

		//
	}, []);

	return (
		<>
			<Banner title="Product" />
			<div className="pb-[105px]">
				<p className="text-[36px] font-bold mb-[8px]">
					Popular Destinations
				</p>
				<p>Vacations to make your experience enjoyable in Indonesia!</p>
				<div className="mt-[60px] grid grid-cols-4 gap-[30px]">
					{listPosts.map((item) => (
						<BlogItem
							photo={item.photo}
							item={item}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
