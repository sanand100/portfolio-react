import React from 'react';
import '../Components/Projects.css';
import { Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects(props) {
	return (
		<div className='container projects-container'>
			<h2 className='projects-header'>My Projects</h2>
			<Container>
				<Row>
					<Col>
						<Card className='card' border='light'>
							<Card.Title className='card-title'>
								{' '}
								Ashary Akhuwat Foundation
							</Card.Title>
							<a
								href='https://ashary-akhuwat-foundation.netlify.app/'
								className='card-img'
								target='_blank'>
								<Card.Img
									border='light'
									id='aaf-img'
									variant='top'
									src={require('../assets/AAF.png')}
									alt='App home page with blocks of text'
								/>
							</a>
							<Card.Body>
								<ul>
									<li>
										Developed a dynamic frontend using React.js to attract
										donors and attendees for the organization’s charity art
										event.
									</li>
									<li>
										Using MongoDB, Express, Node, and React to design and build
										an in-app charity art auction platform.
									</li>
								</ul>

								<div className='tech-div'>
									<p className='tech-used-header'>Technologies Used:</p>
									<p>
										React, JavaScript, Bootstrap, HTML, CSS, MongoDB, Mongoose,
										Express, Node.js
									</p>
									<p>
										<a
											className='projects-a'
											target='_blank'
											href='https://github.com/orgs/Ashary-Akhuwat-Foundation/repositories'>
											Code
										</a>{' '}
										|{' '}
										<a
											className='projects-a'
											target='_blank'
											href='https://ashary-akhuwat-foundation.netlify.app/'>
											Website
										</a>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='card' border='light'>
							<Card.Title className='card-title'> Moving Co.</Card.Title>
							<a
								href='https://movingco.netlify.app/'
								className='card-img'
								target='_blank'>
								<Card.Img
									border='light'
									id='movingco-img'
									variant='top'
									src={require('../assets/MovingCo.png')}
									alt='App home page with blocks of text'
								/>
							</a>
							<Card.Body>
								<ul>
									<li>
										Designed and built a full stack social media application
										with a team of 3 SWEs. Users can read and post tips and
										tricks about moving on the app’s blog.
									</li>
									<li>
										Built full CRUD, REST API with JWT authentication using Java
										Spring Boot and PostgreSQL.
									</li>
								</ul>

								<div className='tech-div'>
									<p className='tech-used-header'>Technologies Used:</p>
									<p>
										Spring Boot, Java, React, JavaScript, Bootstrap, HTML, CSS,
										PostgreSQL
									</p>
									<p>
										<a
											className='projects-a'
											target='_blank'
											href='https://github.com/AnAppThatMovesYou'>
											Code
										</a>{' '}
										|{' '}
										<a
											className='projects-a'
											target='_blank'
											href='https://movingco.netlify.app/'>
											Website
										</a>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='card' border='light'>
							<Card.Title className='card-title'> Redoit</Card.Title>
							<a
								href='https://redoit.netlify.app/'
								className='card-img'
								target='_blank'>
								<Card.Img
									border='light'
									id='redoit-img'
									variant='top'
									src={require('../assets/Redoit.png')}
									alt='App home page with blocks of text'
								/>
							</a>
							<Card.Body>
								<ul>
									<li>
										As SCRUM Lead, led a team of 4 software engineers in
										creating a Full Stack (MERN) social media application that
										allows users to connect and share their thoughts by making
										posts, commenting on posts, and up/down voting posts.
									</li>
								</ul>
								<div className='tech-div'>
									<p className='tech-used-header'>Technologies Used:</p>
									<p>
										React, Javascript, Bootstrap, HTML, CSS, Heroku, MongoDB,
										Mongoose, Node, Express
									</p>
									<p>
										<a
											className='projects-a'
											target='_blank'
											href='https://github.com/re-do-it'>
											Code
										</a>{' '}
										|{' '}
										<a
											className='projects-a'
											target='_blank'
											href='https://redoit.netlify.app/'>
											Website
										</a>{' '}
										|{' '}
										<a
											className='projects-a'
											target='_blank'
											href='https://redoit-api.herokuapp.com/api/users'>
											Deployed Backend
										</a>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='card' border='light'>
							<Card.Title className='card-title'> TravelTips</Card.Title>
							<a
								href='https://celebrated-halva-710aaa.netlify.app/'
								className='card-img'
								target='_blank'>
								<Card.Img
									border='light'
									id='travel-tips-img'
									variant='top'
									src={require('../assets/TravelTips.png')}
									alt='app homepage with a search bar'
								/>
							</a>
							<Card.Body>
								<ul>
									<li>
										A web application where users can enter their travel
										destination and get information about the weather, local
										news, and hotels and restaurants in the area.
									</li>
								</ul>
								<div className='tech-div'>
									<p className='tech-used-header'>Technologies Used:</p>
									<p>React, JavaScript, HTML, CSS, 3rd Party APIs</p>
									<p>
										<a
											className='projects-a'
											target='_blank'
											href='https://github.com/sanand100/travel-tips'>
											Code
										</a>{' '}
										|{' '}
										<a
											className='projects-a'
											target='_blank'
											href='https://celebrated-halva-710aaa.netlify.app/'>
											Website
										</a>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='card' border='light'>
							<Card.Title className='card-title'>Personal Portfolio</Card.Title>
							<a
								href='https://shraddhaanand.netlify.app/'
								className='card-img'
								target='_blank'>
								<Card.Img
									border='light'
									id='redoit-img'
									variant='top'
									src={require('../assets/Portfolio.png')}
									alt='Personal portfolio homepage'
								/>
							</a>
							<Card.Body>
								<ul>
									<li>
										A website designed to showcase my projects and give details
										of my background.
									</li>
								</ul>
								<div className='tech-div'>
									<p className='tech-used-header'>Technologies Used:</p>
									<p>React, Javascript, Bootstrap, HTML, CSS,</p>

									<p>
										<a
											className='projects-a'
											target='_blank'
											href='https://github.com/sanand100/portfolio-react'>
											Code
										</a>{' '}
										|{' '}
										<a
											className='projects-a'
											target='_blank'
											href='https://shraddhaanand.netlify.app/'>
											Website
										</a>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
					{/* <Col>
						<Card className='card' border='light'>
							<Card.Title className='card-title'> Tamagotchi</Card.Title>
							<a href='' className='card-img' target='_blank'>
								<Card.Img
									id='tamagotchi-img'
									variant='top'
									src={require('../assets/tamagotchi-game-screenshot.png')}
									alt='landscape image with tamagotchi digital pet'
								/>
							</a>
							<Card.Body>
								<p>
									Created a Tamagotchi-style digital pet game where you aim to
									keep your pet alive by maintaining its hunger, boredom, and
									sleepiness under a given threshold. You can interact with your
									digital pet by feeding it, playing with it, and making sure it
									gets enough rest!
								</p>
								<div className='tech-div'>
									<p className='tech-used-header'>Technologies Used:</p>
									<p>JavaScript, HTML, CSS</p>

									<p>
										<a
											className='projects-a'
											target='_blank'
											href='https://github.com/sanand100/Tamagotchi/tree/dev'>
											Code
										</a>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='card' border='light'>
							<Card.Title className='card-title'> Dots Game</Card.Title>
							<a href='' className='card-img' target='_blank'>
								<Card.Img
									id='dots-img'
									variant='top'
									src={require('../assets/Dots.png')}
									alt=''
								/>
							</a>
							<Card.Body className='card-body'>
								<div className='content-div'>
									<p>
										Created an interactive game with 3 levels. In each of the
										levels, the player has to click on moving dots to reach the
										threshold score to move on to the next level.
									</p>
								</div>
								<div className='tech-div'>
									<p className='tech-used-header'>Technologies Used:</p>
									<p>JavaScript, HTML, CSS</p>

									<p>
										<a
											className='projects-a'
											target='_blank'
											href='https://github.com/sanand100/event-listener-demo'>
											Code
										</a>
									</p>
								</div>
							</Card.Body>
						</Card>
					</Col> */}
				</Row>
			</Container>
		</div>
	);
}

export default Projects;
