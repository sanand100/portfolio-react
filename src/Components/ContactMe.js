import React from 'react';
import Form from 'react-bootstrap/Form';
import './ContactMe.css';

function ContactMe(props) {
	return (
		<div className='container'>
			<Form className='form-container'>
				<h1>Contact me!</h1>
				<Form.Group className='form-text' controlId='form.Name'>
					<Form.Label className='form-label'>Your Name</Form.Label>
					<Form.Control className='form-control' type='text' placeholder='Enter name' />
				</Form.Group>
				<Form.Group className='form-text' controlId='form.Email'>
					<Form.Label className='form-label'>Your Email address</Form.Label>
					<Form.Control className='form-control' type='email' placeholder='name@example.com' />
				</Form.Group>
				<Form.Group className='form-text' controlId='form.Textarea'>
					<Form.Label className='form-label'>Your Message</Form.Label>
					<Form.Control className='form-control' as='textarea' rows={4} />
				</Form.Group>

				<button className='btn'>Send your message</button>
			</Form>
		</div>
	);
}

export default ContactMe;
