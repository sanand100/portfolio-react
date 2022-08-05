import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../Components/AboutMe.css';
function AboutMe(props) {
	return (
		<Container>
			<div className='aboutme-container container' id='aboutme'>
				<h2 className='aboutme-header'>About me</h2>
				<p className='aboutme-p'>
					Hi! My name is Shraddha Anand and I am a software engineer with a
					background in Mathematics, Statistics, and Economics. I am extremely
					passionate about building things which address real-life issues and
					answering interesting questions about the world using data.
				</p>
				<p className='aboutme-p'>
					I graduated from Wellesley College in 2021 with a Bachelors of Arts in
					Mathematics and Economics. After graduation, I worked as a research
					associate at Harvard Business School and am now excited to start a new
					career in software development!
				</p>
			</div>
		</Container>
	);
}

export default AboutMe;
