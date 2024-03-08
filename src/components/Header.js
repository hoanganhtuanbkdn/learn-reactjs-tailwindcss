import Logo from '../assets/images/logo.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App';
function Header() {
	const { email } = useContext(ThemeContext);

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
			</div>

			{!!email ? (
				<p className="text-[#FA8443]">{email}</p>
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
