import { NavLink } from 'react-router-dom';

function Menu(props) {
	const { href, label } = props;
	return (
		<NavLink
			to={href}
			className={({ isActive }) =>
				isActive ? 'font-bold text-[#FA8443]' : ''
			}
		>
			{label}
		</NavLink>
	);
}

export default Menu;
