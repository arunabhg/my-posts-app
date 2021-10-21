import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deletePost } from './actions/postActions';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ModalForm from './ModalForm';

const Posts = () => {
	const postsList = useSelector((state) => state.post.posts);
	//console.log(postsList);
	let dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [create, setCreate] = useState(false);
	const [post, setPost] = useState();

	const handleShow = (post) => {
		setPost(post);
		setShow(true);
	};
	const handleClose = () => setShow(false);

	return (
		<>
			{postsList &&
				postsList.map((post) => (
					<div className='Post' key={post.title}>
						<div className='post-body'>
							<img src={`https://picsum.photos/300/300?random&t=${post.id}`} alt='random photos' />
							<h1>{post.title}</h1>
							<p>{post.body}</p>
						</div>
						<div className='control-buttons'>
							<Button variant='outline-info' onClick={() => handleShow(post)}>
								Edit
							</Button>
							<Button variant='outline-danger' onClick={() => dispatch(deletePost(post.id))}>
								Delete
							</Button>
						</div>
					</div>
				))}

			<ModalForm show={show} close={handleClose} isCreate={create} post={post} />
		</>
	);
};

export default Posts;
