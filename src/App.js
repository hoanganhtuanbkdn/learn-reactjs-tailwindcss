/* eslint-disable no-restricted-globals */
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTodo,
	changeLabel,
	changeStatus,
	deleteTodo,
} from './store/todoSlice';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

function App() {
	const [label, setLabel] = useState('');
	const [category, setCategory] = useState('');

	const { todos } = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	// Nhấn button tạo sẽ tạo 1 công việc mới
	const onAddNewTodo = () => {
		dispatch(
			addTodo({
				label: label,
				category: category,
				id: Date.now(),
				completed: false,
			})
		);
	};

	const onDeleteTodo = (item) => {
		if (confirm('Bạn có muốn xóa công việc này?')) {
			dispatch(deleteTodo(item));
		}
	};

	const onChangeStatus = (newTodo) => {
		dispatch(changeStatus(newTodo));
	};

	const onChangeLabel = (newTodo) => {
		dispatch(changeLabel(newTodo));
	};

	return (
		<div className=" bg-[#EA5959] h-screen w-screen flex items-center justify-center">
			<div className="w-[983px] h-[502px] flex flex-col bg-white rounded-lg shadow-md py-5 px-10 overflow-hidden">
				<h1 className="text-3xl font-bold">All Tasks</h1>
				<div className="flex flex-row gap-4">
					<input
						className="bg-[#F3F3F3] flex flex-1 h-[46px] rounded-lg px-4 mt-5"
						placeholder="Label "
						value={label}
						onChange={(e) => setLabel(e.target.value)}
					/>
					<input
						className="bg-[#F3F3F3] flex flex-1 h-[46px] rounded-lg px-4 mt-5"
						placeholder="Category "
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</div>
				<button
					className="p-3 mt-4 bg-red-200 rounded-lg w-[200px]"
					onClick={onAddNewTodo}
				>
					Add new Todo
				</button>
				<div className="h-full mt-5 space-y-4 overflow-y-scroll ">
					{todos.map((item, index) => (
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
		</div>
	);
}

const Item = ({ item, index, onDeleteTodo, onChangeStatus, onChangeLabel }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [label, setLabel] = useState(item.label);
	const [category, setCategory] = useState(item.category);

	// Thay đổi trạng thái của todo ( hoàn thành và chưa hoàn thành)
	const onToggle = () => {
		onChangeStatus({ id: item.id, newStatus: !item.completed });
	};

	// Thay đổi nội dung label sẽ thay đổi dữ liệu đang lưu ở redux
	const onChangeTodo = () => {
		onChangeLabel({
			id: item.id,
			label: label,
			category: category,
		});
		setIsEditing(false);
	};

	// Mở input để thay đổi label
	const onToggleEdit = () => {
		setIsEditing(!isEditing);
	};

	return (
		<div className="flex flex-row items-center gap-4 h-10 hover:bg-[#F3F3F3] py1 px-3 rounded-lg">
			<p className="text-xs">{index + 1}.</p>
			<button
				className="h-[28px] w-[28px] rounded-lg border border-[#EA5959] flex items-center justify-center"
				onClick={onToggle}
			>
				{item.completed && (
					<div className="bg-[#EA5959] rounded-md	 w-5 h-5" />
				)}
			</button>
			<div className="flex flex-row flex-1 gap-10">
				{isEditing ? (
					<input
						className="px-2 border border-green-800 rounded-md"
						value={label}
						onChange={(e) => setLabel(e.target.value)}
					/>
				) : (
					<p className={item.completed && 'line-through'}>
						{item.label}
					</p>
				)}
				{isEditing ? (
					<input
						className="px-2 border border-green-800 rounded-md"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				) : (
					<p className={item.completed && 'line-through'}>
						{item.category}
					</p>
				)}

				{isEditing && (
					<button onClick={onChangeTodo} className="p-2 bg-green-200">
						Save
					</button>
				)}
			</div>
			<button
				className="p-2 rounded-lg hover:bg-gray-200 "
				onClick={onToggleEdit}
			>
				<FaRegEdit />
			</button>
			<button
				className="p-2 rounded-lg hover:bg-gray-200 "
				onClick={() => onDeleteTodo(item)}
			>
				<FaRegTrashAlt />
			</button>
		</div>
	);
};

export default App;
