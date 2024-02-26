import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
	const [listPosts, setListPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = () => {
		fetch('http://localhost:4000/posts')
			.then((raw) => raw.json())
			.then((response) => {
				setListPosts(response);
			})
			.catch((error) => {});
	};

	const onDelete = (postId) => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm('Do you want delete it ?')) {
			fetch('http://localhost:4000/posts/' + postId, {
				method: 'DELETE',
			})
				.then(() => {
					alert('Delete Post Successfully');
					getPosts();
				})
				.catch((e) => {
					alert(e.message);
				});
		}
	};
	return (
		<div>
			<div className="py-4 flex flex-row justify-between items-center">
				<h2>Admin / Posts</h2>
				<Link
					to="/admin/posts/create"
					className="bg-[#FA8443] rounded-lg h-[46px] px-4 text-white flex items-center justify-center	"
				>
					Create Post
				</Link>
			</div>
			<table class="table-auto w-full">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Photo</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className="">
					{listPosts.map((post) => (
						<tr>
							<td className="text-center">{post.id}</td>
							<td className="text-center">{post.name}</td>
							<td className="line-clamp-1 w-[300px]">
								{post.photo}
							</td>
							<td className="text-center space-x-4">
								<Link to={'/admin/posts/edit/' + post.id}>
									Edit
								</Link>
								<button onClick={() => onDelete(post.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
