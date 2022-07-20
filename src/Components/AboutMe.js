import React from 'react';
import '../Components/AboutMe.css';
function AboutMe(props) {
	return (
		<div className='container' id='aboutme'>
			<h2 className='aboutme-header'>A bit about me</h2>
			<p className='aboutme-p'>
				Hi! My name is Shraddha Anand and I am a software engineer with a
				background in Mathematics, Statistics, and Economics.
			</p>
			<p className='aboutme-p'>
				I graduated from Wellesley College in 2021 with a Bachelors of Arts in
				Mathematics and Economics
			</p>
		</div>
	);
}

export default AboutMe;
