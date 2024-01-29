import Logo from '../assets/images/logo.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header
			className={
				'h-[70px] w-[1440px] max-w-full flex flex-row items-center justify-between'
			}
		>
			<a href="/">
				<img src={Logo} alt="" className="h-[50px] w-[141px]" />
			</a>
			<div className="space-x-[80px]">
				<Menu href="/product" label="Product" />
				<Menu href="/contact" label="Contact" />
				<Menu href="/about-us" label="About Us" />
			</div>
			<Link
				to="/login"
				className="bg-[#FA8443] rounded-lg h-[46px] w-[120px] text-white flex items-center justify-center	"
			>
				<span>Sign In</span>
			</Link>
		</header>
	);
}

export default Header;
