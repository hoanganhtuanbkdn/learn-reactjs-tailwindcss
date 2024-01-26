function BlogItem(props) {
	const { photo } = props;
	return (
		<div className="">
			<img src={photo} alt="" className="aspect-[284/160] w-full "></img>
			<p>Flores Road Trip 3D2N</p>
		</div>
	);
}

export default BlogItem;
