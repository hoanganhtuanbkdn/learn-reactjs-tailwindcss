/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLabel, ChangeStatus, DeleteTodo } from '../store/actions';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import FormAddTodo from './FormAddTodo';
function App() {
	const todos = useSelector((state) => state.todos);
	const menuActive = useSelector((state) => state.menuActive);

	const listTodos = todos.filter((todo) => {
		if (menuActive === 'All') return true;
		return todo.type === menuActive;
	});

	const dispatch = useDispatch();

	const onDeleteTodo = (item) => {
		if (confirm('Bạn có muốn xóa công việc này?')) {
			dispatch(DeleteTodo(item));
		}
	};

	const onChangeStatus = (id, newStatus) => {
		dispatch(ChangeStatus(id, newStatus));
	};

	const onChangeLabel = (id, newLabel) => {
		dispatch(ChangeLabel(id, newLabel));
	};

	return (
		<div className="w-[700px] flex flex-col px-10 overflow-hidden">
			<h1 className="text-3xl font-bold">All Tasks</h1>
			<FormAddTodo />
			<div className="mt-5 space-y-4 overflow-y-scroll h-full ">
				{listTodos.map((item, index) => (
					<Item
						key={item.id}
						index={index}
						item={item}
						onDeleteTodo={onDeleteTodo}
						onChangeStatus={onChangeStatus}
						onChangeLabel={onChangeLabel}
					/>
				))}
			</div>
		</div>
	);
}

const Item = ({ item, index, onDeleteTodo, onChangeStatus, onChangeLabel }) => {
	const [isEditing, setIsEditing] = useState(false);

	// Thay đổi trạng thái của todo ( hoàn thành và chưa hoàn thành)
	const onToggle = () => {
		onChangeStatus(item.id, !item.finish);
	};

	// Thay đổi nội dung label sẽ thay đổi dữ liệu đang lưu ở redux
	const onChangeTodoLabel = (event) => {
		const newLabel = event.target.value;
		onChangeLabel(item.id, newLabel);
	};

	// Mở input để thay đổi label
	const onToggleEdit = () => {
		setIsEditing(!isEditing);
	};

	// Nhấn enter sẽ kết thúc edit label
	const onKeyDown = (e) => {
		if (e.key === 'Enter') {
			setIsEditing(false);
		}
	};
	return (
		<div className="flex flex-row items-center gap-4 h-10 hover:bg-[#F3F3F3] py1 px-3 rounded-lg">
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
				{isEditing ? (
					<input
						className="border border-green-800 px-2 rounded-md"
						value={item.label}
						onChange={onChangeTodoLabel}
						onKeyDown={onKeyDown}
					/>
				) : (
					<div className="flex flex-row gap-10 items-center">
						<p className={item.finish && 'line-through'}>
							{item.label}
						</p>
						<p className="text-xs bg-green-200 p-1 rounded-md">
							{item.type}
						</p>
					</div>
				)}
			</div>
			<button
				className="hover:bg-gray-200 p-2 rounded-lg "
				onClick={onToggleEdit}
			>
				<FaRegEdit />
			</button>
			<button
				className="hover:bg-gray-200 p-2 rounded-lg "
				onClick={() => onDeleteTodo(item)}
			>
				<FaRegTrashAlt />
			</button>
		</div>
	);
};

export default App;
