import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import Header from './views/partials/Header'
import Card from './views/partials/Card'
import './App.scss'
import Navbar from './views/partials/Navbar'
import users from './resources/data/users'

function App() {
	const [userData, setUserData] = useState()
	const [userName, setUserName] = useState(null)
	const [currentRole, setCurrentRole] = useState(null)
	const [description, setDescription] = useState(null)

	useLayoutEffect(() => {
		let path = window.location
		let _pathName = path.pathname
		let _splitArr = _pathName.split('/')
		let _userId = _splitArr[_splitArr.length - 1]
		let result = Promise.resolve({
			data: {
				userData: [users[_userId]]
			}
		})
		result
			.then((data) => {
				setUserData(data.data.userData[0])
			})
			.catch((err) => {
				setUserData(null)
			})
	}, [])

	useEffect(() => {
		if (userData) {
			document.title = `Portfolio - ${userData.name}`
			document.getElementById('favIcon').href = `./${userData.id}.ico`
			setUserName(userData.name)
			setCurrentRole(userData.currentRole)
			setDescription(userData.description)
		}
	}, [userData])
	return (
		<>
			<div className={'parallax-scroller'}>
				<Header name={userName} currentRole={currentRole} description={description} />
			</div>
			<div className={'parallax-scroller experience'} id={'experience'}>
				<div className={'parallax-img-text'}>Work Experience</div>
			</div>
			<div className={'content'}>
				<div className={'card-container'}>{userData && userData.experience && <Card experience={userData.experience} />}</div>
			</div>
			<div className={'parallax-scroller projects'} id={'projects'}>
				<div className={'parallax-img-text'}>Projects</div>
			</div>
			<div className={'content'}>
				<div className={'card-container'}>{userData && userData.projects && <Card projects={userData.projects} />}</div>
			</div>
			<div className={'parallax-scroller skills'} id={'skills'}>
				<div className={'parallax-img-text'}>Skills &amp; Achievements</div>
			</div>
			<div className={'content'}>
				<div className={'card-container'}>{userData && userData.skillsAndAchievements && <Card skills={userData.skillsAndAchievements} />}</div>
			</div>
			<div className={'parallax-scroller academics'} id={'academics'}>
				<div className={'parallax-img-text'}>Academics &amp; Contact Info</div>
			</div>
			<div className={'content'}>
				<div className={'card-container'}>{userData && userData.academicsAndContactInfo && <Card info={userData.academicsAndContactInfo} />}</div>
			</div>
			<Navbar />
		</>
	)
}

export default App
