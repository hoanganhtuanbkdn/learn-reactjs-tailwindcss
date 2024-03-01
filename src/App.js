/* eslint-disable no-restricted-globals */
import { useRef, useState } from 'react';
import TrashIco from './assets/images/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, ChangeStatus, DeleteTodo } from './store/actions';

function App() {
	const inputRef = useRef();
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const onAddNewTodo = (e) => {
		if (!e.target.value) return;
		if (e.key === 'Enter') {
			dispatch(
				AddTodo({
					label: e.target.value,
					id: Date.now(),
					finish: false,
				})
			);
			inputRef.current.value = '';
		}
	};

	const onDeleteTodo = (item) => {
		if (confirm('Do you want remove this task')) {
			dispatch(DeleteTodo(item));
		}
	};

	const onChangeStatus = (id, newStatus) => {
		dispatch(ChangeStatus(id, newStatus));
	};
	return (
		<div className=" bg-[#EA5959] h-screen w-screen flex items-center justify-center">
			<div className="w-[983px] h-[502px] flex flex-col bg-white rounded-lg shadow-md py-5 px-10 overflow-hidden">
				<h1 className="text-3xl font-bold">All Tasks</h1>
				<div>
					<input
						className="bg-[#F3F3F3] w-full h-[46px] rounded-lg px-4 mt-5"
						placeholder="Add a new task "
						ref={inputRef}
						onKeyDown={(e) => onAddNewTodo(e)}
					/>
				</div>
				<div className="mt-5 space-y-4 overflow-y-scroll h-full ">
					{todos.map((item, index) => (
						<Item
							key={item.id}
							index={index}
							item={item}
							onDeleteTodo={onDeleteTodo}
							onChangeStatus={onChangeStatus}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

const Item = ({ item, index, onDeleteTodo, onChangeStatus }) => {
	const onToggle = () => {
		onChangeStatus(item.id, !item.finish);
	};
	return (
		<div className="flex flex-row items-center gap-4">
			<p className="text-xs">{index + 1}.</p>
			<button
				className="h-[28px] w-[28px] rounded-lg border border-[#EA5959] flex items-center justify-center"
				onClick={onToggle}
			>
				{item.finish && (
					<div className="bg-[#EA5959] rounded-md	 w-5 h-5" />
				)}
			</button>
			<div className="flex-1">
				<p className={item.finish && 'line-through'}>{item.label}</p>
			</div>
			<button
				className="hover:bg-gray-200 p-2 rounded-lg"
				onClick={() => onDeleteTodo(item)}
			>
				<img src={TrashIco} alt="" />
			</button>
		</div>
	);
};

export default App;
