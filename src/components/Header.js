import { connect } from 'react-redux';
import Logo from '../assets/images/logo.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

function Header({ email }) {
	console.log('email', email);
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

const mapStateToProps = (store) => ({
	email: store.user.email,
});

export default connect(mapStateToProps)(Header);
