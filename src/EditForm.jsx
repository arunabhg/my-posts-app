import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from './actions/postActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

function EditForm(props) {
	const dispatch = useDispatch();
	//const post = useSelector((state) => state.post.posts);
	const { id } = props.editpost;
	console.log(`id: ${id}`);
	//const [show, setShow] = useState(false);
	const [title, setTitle] = useState(props.editpost.title);
	const [description, setDescription] = useState(props.editpost.body);

	//const { postsData } = props;
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	// useEffect(() => {
	// 	if (post) {
	// 		setTitle(post.title);
	// 		setDescription(post.body);
	// 	}
	// }, [post]);

	// const loadPost = () => {
	// 	dispatch(getPosts(props.postId));
	// };

	const submitForm = (e) => {
		e.preventDefault();

		const updatedPost = {
			id: id,
			title: title,
			body: description
		};

		dispatch(editPost(updatedPost));

		setTitle('');
		setDescription('');

		// setShow(false);
	};

	return (
		<>
			<Form onSubmit={submitForm}>
				<Form.Group className='mb-3' controlId='ControlInput1'>
					<Form.Label>Post Title</Form.Label>
					<Form.Control type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='ControlInput2'>
					<Form.Label>Post Description</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</Form.Group>
				<div className='d-grid'>
					<Button variant='primary' type='submit' size='lg'>
						Update Changes
					</Button>
				</div>
			</Form>
		</>
	);
}

export default EditForm;
