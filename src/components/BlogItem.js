import { Link } from 'react-router-dom';

function BlogItem(props) {
	const { photo, item } = props;
	return (
		<div className="">
			<img src={photo} alt="" className="aspect-[284/160] w-full "></img>
			<Link to={'/product/' + item.name}>
				<p>{item.name}</p>
			</Link>
		</div>
	);
}

export default BlogItem;
