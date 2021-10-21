import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from './actions/postActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalForm(props) {
	// console.log(props);
	const [show, setShow] = useState(props.show);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		const loadPosts = () => {
			if (typeof props.post !== 'undefined' && props.isCreate !== true) {
				setTitle(props.post.title);
				setDescription(props.post.body);
			}
		};
		loadPosts();
	}, [props.post, props.isCreate]);

	//Function to add or update form
	const addEditForm = (e) => {
		e.preventDefault();

		if (props.isCreate) {
			const createdPost = {
				title: title,
				body: description,
				id: getRandom(100),
				userId: getRandom(10)
			};

			dispatch(createPost(createdPost));
		} else {
			const updatedPost = {
				id: props.post.id,
				title: title,
				body: description
			};

			dispatch(updatePost(updatedPost));
		}

		setTitle('');
		setDescription('');

		setShow(false);
	};

	// Generate a random number less than 'num*2'
	function getRandom(num) {
		return Math.floor(Math.random() * num + (num - 1));
	}

	return (
		<>
			<Modal show={props.show} onHide={props.close}>
				<Modal.Header closeButton>
					<Modal.Title>{props.isCreate === true ? 'Create Post' : 'Edit Post'}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={addEditForm}>
						<Form.Group className='mb-3' controlId='ControlInput1'>
							<Form.Label>Post Title</Form.Label>
							<Form.Control
								type='text'
								placeholder={props.isCreate === true ? 'Enter post title' : ''}
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='ControlInput2'>
							<Form.Label>Post Description</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								placeholder={props.isCreate === true ? 'Enter post description' : ''}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Form.Group>
						<Button variant='primary' type='submit' onClick={props.close}>
							{props.isCreate === true ? 'Save Changes' : 'Update Changes'}
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalForm;
