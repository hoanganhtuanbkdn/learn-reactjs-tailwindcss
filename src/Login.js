import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SideRight from './assets/images/side-right.png';
function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onLogin = () => {
		if (!email) {
			return alert('Email is required');
		}
		if (!password) {
			return alert('Password is required');
		}
		if (password?.length < 8) {
			return alert('Password must min 8 characters');
		}

		alert('Login Successful With: ' + email + ' | ' + password);
		navigate('/');
	};
	return (
		<div className=" bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen">
			<div className="grid grid-cols-2 ">
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
						<input
							className="w-full h-10 border border-gray-300 rounded mt-[16px] px-[14px]"
							placeholder="Password"
							type="password"
							value={password}
							onChange={(event) =>
								setPassword(event.target.value)
							}
						/>
						<button
							className="w-full h-10 bg-[#42A7C3] rounded mt-[32px]"
							type="submit"
						>
							LOGIN
						</button>
						<p className="mt-[32px]">
							You haven't account{' '}
							<a
								className="text-[#42A7C3] font-semibold"
								href="/register"
							>
								{' '}
								Register
							</a>
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
				<img
					src={SideRight}
					className="w-[704px] max-width-[100%]"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Login;
