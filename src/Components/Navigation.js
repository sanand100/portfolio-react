import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Link from 'react-scroll';
import './Navigation.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Navigation(props) {
	let navigate = useNavigate();
	// function handleScroll(e) {
	// 	e.preventDefault();
	// 	const main = this.main.current;
	// 	window.scrollTo({
	// 		top: main.offsetTop,
	// 		left: 0,
	// 		behavior: 'instant',
	// 	});
	// }
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
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='nav-options'>
					<LinkContainer to='/Home'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/AboutMe'>
						<Nav.Link>About Me</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/Projects'>
						<Nav.Link>Projects</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/WorkExperience'>
						<Nav.Link>Work Experience</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/ContactMe'>
						<Nav.Link>Contact Me</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		// <Navbar collapseOnSelect variant='light' expand='md' className='nav-text'>
		// 	{/* <Navbar.Brand>Shraddha Anand</Navbar.Brand> */}
		// 	<Navbar.Toggle aria-controls='responsive-navbar-nav' />
		// 	<Navbar.Collapse id='responsive-navbar-nav'>
		// 		<Nav className='nav-link-container'>
		// 			<Link
		// 				onClick={handleScroll}
		// 				to='about'
		// 				activeClass='active'
		// 				spy={true}
		// 				smooth={true}>
		// 				Home
		// 			</Link>

		// 			{/* <Link
		// 				onClick={() =>
		// 					scroller.scrollTo('aboutme', {
		// 						smooth: true,
		// 						offset: -70,
		// 						duration: 500,
		// 					})
		// 				}>
		// 				About Me
		// 			</Link> */}

		// 			<Link>Projects</Link>

		// 			<Link>Work Experience</Link>

		// 			<Link>Contact Me</Link>
		// 		</Nav>
		// 	</Navbar.Collapse>
		// </Navbar>
	);
}

export default Navigation;
