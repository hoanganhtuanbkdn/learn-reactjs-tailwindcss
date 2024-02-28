/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/images/logo.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../stores/reducers/usersReducer';

function Header() {
	const email = useSelector((state) => state.users.email);
	const dispatch = useDispatch();
	const onLogout = () => {
		if (confirm('Do you want to logout ?')) {
			dispatch(logoutRequest());
		}
	};
	return (
		<header
			className={
				'h-[70px] w-[1440px] max-w-full flex flex-row items-center justify-between'
			}
		>
			<Link to="/">
				<img src={Logo} alt="" className="h-[50px] w-[141px]" />
			</Link>
			<div className="space-x-[80px]">
				<Menu href="/product" label="Product" />
				<Menu href="/contact" label="Contact" />
				<Menu href="/about-us" label="About Us" />
				{email && <Menu href="/admin/posts" label="Admin" />}
			</div>

			{!!email ? (
				<div className="flex flex-row items-center justify-center gap-4">
					<p className="text-[#FA8443]">{email}</p>
					<button
						onClick={onLogout}
						className="bg-[#FA8443] rounded-lg h-[46px] px-4 text-white flex items-center justify-center	"
					>
						LogOut
					</button>
				</div>
			) : (
				<Link
					to="/login"
					className="bg-[#FA8443] rounded-lg h-[46px] px-4 text-white flex items-center justify-center	"
				>
					<span>Sign In {email}</span>
				</Link>
			)}
		</header>
	);
}

export default Header;
