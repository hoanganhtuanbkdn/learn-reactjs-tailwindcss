import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeMenu } from '../store/actions';
export const ListMenu = ['All', 'Working', 'Learning', 'Life'];
export default function Menu() {
	const dispatch = useDispatch();
	const menuActive = useSelector((state) => state.menuActive);

	const onChangeMenu = (newActiveMenu) => {
		dispatch(ChangeMenu(newActiveMenu));
	};
	return (
		<div className="flex flex-1 h-full flex-col pt-10 pr-4 gap-1">
			{ListMenu.map((menu) => (
				<button
					key={menu}
					className={`py-4 text-left px-4 hover:bg-[#F3F3F3] ${
						menu === menuActive && 'bg-[#F3F3F3]'
					}`}
					onClick={() => onChangeMenu(menu)}
				>
					<p className="font-bold text-md uppercase">{menu}</p>
				</button>
			))}
		</div>
	);
}
