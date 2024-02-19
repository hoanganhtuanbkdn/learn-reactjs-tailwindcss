import Banner from '../components/Banner';
import { useParams } from 'react-router-dom';
import { listPost } from '../constants/posts';

function App() {
	let { productName } = useParams();

	const post = listPost.find((item) => item.name === productName);

	if (!post) {
		return (
			<div className="flex items-center justify-center w-full h-screen">
				<h1>Not found</h1>
			</div>
		);
	}

	return (
		<>
			<Banner title={productName} />
		</>
	);
}

export default App;
