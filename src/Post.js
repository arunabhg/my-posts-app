import React from 'react';
import './App.css';

function Post({ title, body, postId }) {
	return (
		<div className='Post'>
			<img src={`https://picsum.photos/300/300?random&t=${postId}`} alt='random photos' />
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
}

export default Post;
