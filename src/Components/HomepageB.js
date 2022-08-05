import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Components/HomepageB.css';

function HomepageB(props) {
	return (
		<Container className='container'>
			<Row className='homepage-row'>
				<Col>
					{/* <div className='container homepage-container'> */}
					<div className='profile-pic-container'>
						<img
							className='profile-pic'
							src={require('../assets/IDPhoto.jpeg')}
							alt="website owner's image"
						/>
					</div>
					<h1 className='homepage-name'>Shraddha Anand</h1>
					<div className='line-div'></div>
					<p className='homepage-p'>Software Engineer</p>
					{/* </div> */}
				</Col>
			</Row>
			<Row className='homepage-row'>
				<Col>
					<div className='homepage-summary'>
						<ul>
							<li className='homepage-summary-main-headers'>Education</li>
							<ul className='homepage-summary-sub'>
								<li>
									Bachelors of Arts in Mathematics and Economics, Wellesley
									College (2021)
								</li>

								{/* <ul className='homepage-summary-sub-sub'>
									<li>Bachelors of Arts in Mathematics and Economics</li>
								</ul> */}
								<li>
									Cross-registered student, Massachusetts Institute of
									Technology (2021)
								</li>
								{/* <ul className='homepage-summary-sub-sub'>
									<li>Cross-registered student</li>
								</ul> */}
							</ul>
							<li className='homepage-summary-main-headers'>
								Programming Languages
							</li>
							<ul className='homepage-summary-sub'>
								<li>
									<p>Java, Python, JavaScript, SQL, HTML, CSS, R, Stata</p>
								</li>
							</ul>
							<li className='homepage-summary-main-headers'>Software</li>
							<ul className='homepage-summary-sub'>
								<li>
									Spring Boot, React, Django, Mongoose, MongoDB, PostgreSQL,
									Node, Express, Git, GitHub
								</li>
							</ul>
						</ul>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default HomepageB;
