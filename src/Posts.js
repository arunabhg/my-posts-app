import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';

function Posts(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const loadPosts = async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await res.json();
			// set json data in local storage initially
			localStorage.setItem('data', JSON.stringify(data));
			setPosts(data);
		};

		// Check if data exists in local storage
		if (localStorage.getItem('data')) {
			// set the state from localstorage
			setPosts(JSON.parse(localStorage.getItem('data')));
		} else {
			// if no data exists in local storage, call api
			loadPosts();
		}
	}, []);

	return (
		<div className='App'>
			<h1 className='title'>{props.pageTitle}</h1>
			<h1>{props.postTitle}</h1>
			<div className='Posts'>
				{posts.map((post) => (
					<div key={post.id} className='PostContent'>
						<Post postId={post.id} title={post.title} body={post.body} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Posts;
