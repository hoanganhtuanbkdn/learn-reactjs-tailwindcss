import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../store/actions';
import { ListMenu } from './Menu';

export default function FormAddTodo() {
	const [label, setLabel] = useState();
	const [type, setType] = useState('Working');
	const dispatch = useDispatch();

	// Nhấn enter sẽ tạo 1 công việc mới
	const onAddNewTodo = () => {
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
	return (
		<div className="flex flex-row gap-3 items-center mt-5">
			<input
				className="bg-[#F3F3F3] flex-1 h-[46px] rounded-lg px-4 "
				placeholder="Task label "
				value={label}
				onChange={(e) => setLabel(e.target.value)}
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
