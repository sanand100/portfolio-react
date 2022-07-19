import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

function Footer(props) {
	return (
		<div className='social-media-icons-container'>
			<div className='social-media-icons'>
				<SocialIcon
					className='social-icon'
					url='https://www.linkedin.com/in/shraddha-anand-680982237/'
					bgColor='#FFFFFF'
					network='linkedin'
					target='_blank'
				/>

				<SocialIcon
					className='social-icon'
					url='https://github.com/sanand100'
					bgColor='#FFFFFF'
					network='github'
					target='_blank'
				/>
			</div>
		</div>
	);
}

export default Footer;