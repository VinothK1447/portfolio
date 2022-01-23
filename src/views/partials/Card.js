import React from 'react'
import classNames from 'classnames'
import './scss/Card.scss'

const Card = (props) => {
	return (
		<>
			{props.experience && (
				<div className={'card'}>
					{props.experience.map((exp, idx) => (
						<div className={'section-block'} key={`exp-${idx}`}>
							<div className={'bold-head'}>{exp.company}</div>
							<div className={'sub-head'}>{exp.role}</div>
							<div className={'sub-text'}>
								{exp.from} &mdash; {exp.to}
							</div>
						</div>
					))}
				</div>
			)}
			{props.projects && (
				<div className={'card'}>
					{props.projects.map((comp, idx) => (
						<div className={'projects-ct'} key={`comp-${idx}`}>
							<div className={'projects-ct-info'}>
								{comp.logo}
								{comp.company}
							</div>
							<div className={'projects-ct-details'}>
								{comp.projects &&
									comp.projects.map((project, indx) => (
										<div className={'projects-ct-details-project'} key={`project-${idx}-${indx}`}>
											<div className={'project-name'}>{project.name}</div>
											<div className={'project-techstack'}>{project.techStack}</div>
											{project.url && (
												<div className={'project-url'}>
													<a href={project.url} rel='noreferrer' target='_blank'>
														{project.url}
													</a>
												</div>
											)}
											{project.description && <div className={'project-desc'}>{project.description}</div>}
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			)}
			{props.skills && (
				<div className={'card'}>
					{props.skills.map((item, idx) => (
						<React.Fragment key={`skill-${idx}`}>
							<div className={'skills-ct'}>
								<div className={'skills-ct-category'}>{item.category === 'skills' ? 'Knowledge Cloud' : 'Professional Achievements'}</div>
								<div className={'skills-ct-section'}>
									{item.details &&
										item.details.map((skill, indx) => {
											let Tag = item.category === 'skills' ? 'span' : 'div'
											let clsName = item.category === 'skills' ? classNames(skill.type) : classNames('achievement-row')
											return (
												<React.Fragment key={`skill-${idx}-${indx}`}>
													<Tag className={clsName}>{skill.name}</Tag>
												</React.Fragment>
											)
										})}
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
			)}
			{props.info && (
				<div className={'card'}>
					{props.info.map((item, idx) => (
						<React.Fragment key={`info-${idx}`}>
							<div className={''}>
								<div className={''}>{item.displayText}</div>
								<div className={''}>
									{item.details &&
										item.details.map((detail, indx) => (
											<React.Fragment key={`info-${idx}-${indx}`}>
												<div className={''}>
													{detail.icon && <i class={detail.icon} />} {detail.displayText}
												</div>
												{detail.institution && <div className={''}>{detail.institution}</div>}
												{detail.university && <div className={''}>{detail.university}</div>}
												{detail.url && <div className={''}>{detail.url}</div>}
											</React.Fragment>
										))}
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
			)}
		</>
	)
}

export default Card
