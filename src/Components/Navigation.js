import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Link from 'react-scroll';
import './Navigation.css';
import { Navigate, useNavigate } from 'react-router-dom';
// import resume from '../assets/ShraddhaAnand_resume';

function Navigation(props) {
	let navigate = useNavigate();
	return (
		<Navbar collapseOnSelect variant='dark' expand='md' className='nav-text'>
			<Navbar.Brand
				onClick={() => {
					navigate('/home');
				}}
				className='brand'>
				Shraddha Anand
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav' className='navbar-collapse'>
				<Nav className='nav-options'>
					<LinkContainer to='/Home'>
						<Nav.Link className='nav-link'>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/AboutMe'>
						<Nav.Link className='nav-link'>About Me</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/Projects'>
						<Nav.Link className='nav-link'>Projects</Nav.Link>
					</LinkContainer>
					{/* <LinkContainer to='/'> */}
					{/* <Nav.Link className='nav-link'>Work Experience</Nav.Link> */}
					<a
						className='nav-link'
						href={require('../assets/ShraddhaAnand_Resume.pdf')}
						target='_blank'>
						{' '}
						Work Experience
					</a>
					{/* </LinkContainer> */}
					{/* <LinkContainer to='/ContactMe'>
						<Nav.Link className='nav-link'>Contact Me</Nav.Link>
					</LinkContainer> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
