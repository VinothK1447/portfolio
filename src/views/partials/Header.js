import React from 'react'
import './scss/Header.scss'

const Header = (props) => {
	return (
		<>
			<div className={'header'}>
				<div className={'header-text'}>
					{props.name}
				</div>
				<div className={''}>
					{props.currentRole}
				</div>
				<div className={''}>
					{props.description}
				</div>
			</div>
		</>
	)
}

export default Header
