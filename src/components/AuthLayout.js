import React from 'react';
import { Outlet } from 'react-router-dom';
import SideRight from '../assets/images/side-right.png';

export default function Layout() {
	return (
		<div className=" bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen">
			<div className="grid grid-cols-2 ">
				<Outlet />
				<img
					src={SideRight}
					className="w-[704px] max-width-[100%]"
					alt=""
				/>
			</div>
		</div>
	);
}
