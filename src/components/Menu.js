function Menu(props) {
	const { href, label } = props;
	return <a href={href}>{label}</a>;
}

export default Menu;
