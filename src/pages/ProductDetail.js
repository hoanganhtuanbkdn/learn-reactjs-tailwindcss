import Banner from '../components/Banner';
import { useParams } from 'react-router-dom';

function App() {
	let { productName } = useParams();

	return (
		<>
			<Banner title={productName} />
		</>
	);
}

export default App;
