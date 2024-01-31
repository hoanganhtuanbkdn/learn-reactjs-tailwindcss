import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
export default function Layout() {
	return (
		<div className=" bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen">
			<div className="container mx-auto">
				<Header />
				<Outlet />
			</div>
		</div>
	);
}
