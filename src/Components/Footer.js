import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

function Footer(props) {
	return (
		<div className='social-media-icons-container'>
			<p className='footer-getintouch'>Get in touch!</p>
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
				<SocialIcon
					className='social-icon'
					url='https://mailhide.io/e/PrcEGwC0'
					bgColor='#FFFFFF'
					network='email'
					target='_blank'
				/>
			</div>
			<p className='footer-credit'>Designed and Created by Shraddha Anand</p>
		</div>
	);
}

export default Footer;
