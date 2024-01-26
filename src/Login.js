import Header from './components/Header';
import Banner from './components/Banner';
import Session1 from './components/Session1';

import SideRight from './assets/images/side-right.png';
function Login() {
	return (
		<div className=" bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen">
			<div className="grid grid-cols-2 ">
				<div className="flex items-center justify-center">
					<div className="w-[420px] min-h-[580px] p-[40px] ">
						<input
							className="w-full h-10 border border-gray-300 rounded px-[14px]"
							placeholder="Email"
						/>
						<input
							className="w-full h-10 border border-gray-300 rounded mt-[16px] px-[14px]"
							placeholder="Password"
							type="password"
						/>
						<button className="w-full h-10 bg-[#42A7C3] rounded mt-[32px]">
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
						<div className="flex flex-row items-center gap-3 mt-[32px]">
							<div className="h-[2px] bg-gray-400 flex flex-1" />
							<p>Login By Social</p>
							<div className="h-[2px] bg-gray-400 flex flex-1" />
						</div>
						<button className="h-[48px] w-full border border-gray-600 rounded mt-[32px]">
							Google
						</button>
						<button className="h-[48px] w-full border border-gray-600 rounded mt-[32px]">
							Facebook
						</button>
					</div>
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
