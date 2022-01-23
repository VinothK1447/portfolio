import React from 'react'
import './scss/FooterNav.scss'

const Navbar = (props) => {
	return (
		<nav className={'footer-nav'}>
			<div className={'footer-nav-cols'}>
				<div className={'footer-col'}>
					<a href='#experience'>
						<div className={'icon experience-icon'}></div>
						<div>Experience</div>
					</a>
				</div>
				<div className={'footer-col'}>
					<a href='#projects'>
						<div className={'icon projects-icon'}></div>
						<div>Projects</div>
					</a>
				</div>
				<div className={'footer-col'}>
					<a href='#skills'>
						<div className={'icon skills-icon'}></div>
						<div>Skills</div>
					</a>
				</div>
				<div className={'footer-col'}>
					<a href='#academics'>
						<div className={'icon academics-icon'}></div>
						<div>Academics</div>
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
