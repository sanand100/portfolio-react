import React from 'react';
import './Homepage.css';
// import profilePic

function Homepage(props) {
	return (
		<div className='homepage-container container' id='homepage'>
			<div className='profile-pic-container'>
				<img
					className='profile-pic'
					src={require('../assets/IDPhoto.jpeg')}
					alt="website owner's image"
				/>
			</div>
			<h1 className='homepage-name'>Shraddha Anand</h1>
			<div className='line-div'></div>
			<p className='homepage-p'>
				{/* I am a software engineer with a background in Math, Data Science, and
				Economics{' '} */}
				Software Engineer
			</p>
			{/* <button className='btn'>My Resume</button>
			<button className='btn'>My Projects</button> */}
			<div className='homepage-summary'>
				<ul>
					<li className='homepage-summary-main-headers'>Education</li>
					<ul className='homepage-summary-sub'>
						<li>Wellesley College (2021)</li>

						<ul className='homepage-summary-sub-sub'>
							<li>Bachelors of Arts in Mathematics and Economics</li>
						</ul>
						<li>Massachusetts Institute of Technology (2021)</li>
						<ul className='homepage-summary-sub-sub'>
							<li>Cross-registered student</li>
						</ul>
					</ul>
					<li className='homepage-summary-main-headers'>
						Programming Languages
					</li>
					<ul className='homepage-summary-sub'>
						<li>
							<p>
								Javascript, Python, HTML, CSS, React, Django, MongoDB, Mongoose,
								Express, NodeJs, API, AJAX, Git, GitHub
							</p>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
}

export default Homepage;
