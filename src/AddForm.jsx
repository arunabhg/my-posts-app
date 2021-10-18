import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './actions/postActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

function AddForm(props) {
	// const [show, setShow] = useState(false);
	const [newTitle, setNewTitle] = useState('');
	const [newDescription, setNewDescription] = useState('');

	const dispatch = useDispatch();

	const addNewPost = (e) => {
		e.preventDefault();

		const createdPost = {
			title: newTitle,
			body: newDescription,
			id: getRandom(100),
			userId: getRandom(10)
		};

		dispatch(createPost(createdPost));

		setNewTitle('');
		setNewDescription('');

		// setShow(false);
	};

	// const updateExisting = (e) => {
	// 	e.preventDefault();

	// 	const updatedPost = {
	// 		title: updatedTitle,
	// 		body: updatedDescription,
	// 		id: id
	// 	}

	// 	dispatch(updatePost(updatedPost));

	// }

	// Generate a random number less than 'num*2'
	function getRandom(num) {
		return Math.floor(Math.random() * num + (num - 1));
	}

	return (
		<Form onSubmit={addNewPost}>
			<Form.Group className='mb-3' controlId='ControlInput1'>
				<Form.Label>Post Title</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter post title'
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='ControlInput2'>
				<Form.Label>Post Description</Form.Label>
				<Form.Control
					as='textarea'
					rows={3}
					placeholder='Enter post description'
					value={newDescription}
					onChange={(e) => setNewDescription(e.target.value)}
				/>
			</Form.Group>
			<div className='d-grid'>
				<Button variant='primary' type='submit' size='lg'>
					Save Changes
				</Button>
			</div>
		</Form>
	);
}

export default AddForm;