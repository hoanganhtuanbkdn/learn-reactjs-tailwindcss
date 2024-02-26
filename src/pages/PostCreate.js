import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostCreate() {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [photo, setPhoto] = useState('');

	const onSubmit = () => {
		if (!name) {
			return alert('Name is required');
		}

		if (!photo) {
			return alert('Photo is required');
		}

		fetch(`http://localhost:4000/posts`, {
			method: 'POST',
			body: JSON.stringify({
				name,
				photo,
			}),
		})
			.then((raw) => raw.json())
			.then((response) => {
				if (response) {
					alert('Create Post Successful');
					navigate('/admin/posts');
				}
			})
			.catch((error) => {
				return alert(error.message);
			});
	};

	return (
		<div className="flex items-center justify-center">
			<form className="w-[420px] min-h-[580px] p-[40px] ">
				<input
					className="w-full h-10 border border-gray-300 rounded px-[14px]"
					placeholder="Name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<input
					className="w-full h-10 mt-4 border border-gray-300 rounded px-[14px]"
					placeholder="Photo"
					value={photo}
					onChange={(event) => setPhoto(event.target.value)}
				/>

				<button
					className="w-full h-10 bg-[#42A7C3] rounded mt-[32px]"
					type="button"
					onClick={onSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
}
