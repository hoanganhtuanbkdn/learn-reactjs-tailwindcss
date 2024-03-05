import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../store/actions';
import { ListMenu } from './Menu';

export default function FormAddTodo() {
	const [label, setLabel] = useState();
	const [type, setType] = useState('Working');
	const dispatch = useDispatch();

	// Nhấn button Add sẽ tạo 1 công việc mới
	const onAddNewTodo = () => {
		// Kiểm tra label, nếu trống sẽ không submit
		if (!label) return;
		dispatch(
			AddTodo({
				label,
				type,
				id: Date.now(),
				finish: false,
			})
		);
		// Sau khi tạo thành công cần reset nội dung của label và type
		setLabel('');
		setType('Working');
	};

	// Nhấn enter sẽ tạo 1 công việc mới
	const onKeyDown = (e) => {
		// Kiểm tra label, nếu trống sẽ không submit

		if (!label) return;
		if (e.key === 'Enter') {
			onAddNewTodo();
		}
	};
	return (
		<div className="flex flex-row items-center gap-3 mt-5">
			<input
				className="bg-[#F3F3F3] flex-1 h-[46px] rounded-lg px-4 "
				placeholder="Task label "
				value={label}
				onChange={(e) => setLabel(e.target.value)}
				onKeyDown={onKeyDown}
			/>
			<select
				className="bg-[#F3F3F3] flex-1 h-[46px] rounded-lg px-4 "
				value={type}
				onChange={(e) => setType(e.target.value)}
			>
				{ListMenu.map((menu) => (
					<option key={menu} value={menu}>
						{menu}
					</option>
				))}
			</select>
			<button
				onClick={onAddNewTodo}
				className="h-[46px] w-[100px] bg-green-100 rounded-lg "
			>
				<p>Add Todo</p>
			</button>
		</div>
	);
}
