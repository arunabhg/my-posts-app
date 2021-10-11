import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalForm(props) {
	const [show, setShow] = useState(false);
	const [postTitle, setPostTitle] = useState('');
	const [postDescription, setPostDescription] = useState('');
	const [posts, setPosts] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const onPostFormSubmit = (e) => {
		e.preventDefault();

		let newPostId = props.postsData[props.postsData.length - 1].id + 1;
		// console.log(`id: ${newPostId}`);
		let newUserId =
			(props.postsData.length - 1) % 10
				? props.postsData[props.postsData.length - 1].userId + 1
				: props.postsData[props.postsData.length - 1].userId;
		// console.log(`user id: ${newUserId}`);

		const updatedPosts = [
			{
				id: newPostId,
				userId: newUserId,
				title: postTitle,
				body: postDescription
			},
			...props.postsData
		];

		setPosts(updatedPosts);

		setPostTitle('');
		setPostDescription('');

		handleClose();

		props.handleSubmit(updatedPosts);
	};

	return (
		<>
			<Modal show={props.show} onHide={props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create Post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={onPostFormSubmit}>
						<Form.Group className='mb-3' controlId='ControlInput1'>
							<Form.Label>Post Title</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter post title'
								value={postTitle}
								onChange={(e) => setPostTitle(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='ControlInput2'>
							<Form.Label>Post Description</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter post description'
								value={postDescription}
								onChange={(e) => setPostDescription(e.target.value)}
							/>
						</Form.Group>
						<Button variant='primary' type='submit'>
							Save Changes
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalForm;
