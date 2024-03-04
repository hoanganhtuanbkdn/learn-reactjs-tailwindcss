/* eslint-disable no-restricted-globals */
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListTodo from './components/ListTodo';
import Menu from './components/Menu';
function App() {
	const inputRef = useRef();
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<div className=" bg-[#EA5959] h-screen w-screen flex items-center justify-center">
			<div className="w-[983px] h-[502px] flex flex-row bg-white rounded-lg shadow-md p-5 overflow-hidden divide-x-2 divide-[#F3F3F3]">
				<Menu />
				<ListTodo />
			</div>
		</div>
	);
}

export default App;
