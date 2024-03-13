import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { AuthContext } from '../context';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {
	const { setAuthEmail } = useContext(AuthContext);

	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setIsShowPassword(!isShowPassword);
	};
	const onLogin = () => {
		if (!email) {
			return alert('Email is required');
		}
		if (!emailRegex.test(email)) {
			return alert('Email has incorrect format');
		}
		if (!password) {
			return alert('Password is required');
		}
		if (password?.length < 8) {
			return alert('Password must min 8 characters');
		}
		if (email !== 'admin@admin.com' || password !== 'admin@123') {
			return alert('Email or Password incorrect');
		}

		// Lưu email vào context
		setAuthEmail(email);
		alert('Login Successful With: ' + email + ' | ' + password);
		navigate('/');
	};
	return (
		<div className="flex items-center justify-center">
			<form
				className="w-[420px] min-h-[580px] p-[40px] "
				onSubmit={onLogin}
			>
				<input
					className="w-full h-10 border border-gray-300 rounded px-[14px]"
					placeholder="Email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<div className="relative flex flex-row items-center  mt-[16px]">
					<input
						className="w-full h-10 border border-gray-300 rounded px-[14px]"
						placeholder="Password"
						type={isShowPassword ? 'text' : 'password'}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<button
						className="absolute right-4"
						onClick={toggleShowPassword}
						type="button"
					>
						{isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
					</button>
				</div>

				<button
					className="w-full h-10 bg-[#42A7C3] rounded mt-[32px]"
					type="submit"
				>
					LOGIN
				</button>
				<p className="mt-[32px]">
					You haven't account{' '}
					<Link
						className="text-[#42A7C3] font-semibold"
						to="/register"
					>
						{' '}
						Register
					</Link>
				</p>
				<button
					className="flex flex-row items-center gap-3 mt-[32px]"
					type="button"
				>
					<div className="h-[2px] bg-gray-400 flex flex-1" />
					<p>Login By Social</p>
					<div className="h-[2px] bg-gray-400 flex flex-1" />
				</button>
				<button className="h-[48px] w-full border border-gray-600 rounded mt-[32px]">
					Google
				</button>
				<button className="h-[48px] w-full border border-gray-600 rounded mt-[32px]">
					Facebook
				</button>
			</form>
		</div>
	);
}

export default Login;
