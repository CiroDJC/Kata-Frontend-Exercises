import React from 'react'
import './BadgeComponent.css'

const BadgeComponent = ({ form }) => {
  return (
    <div className="Badge">
        <div className="Badge__header">
          <img src="#" alt="DevF" />
        </div>
        <div className="Badge__section-name">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="badge" />
          <h1>
            {form.firstName} <br/>
            {form.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{form.jobTitle}</h3>
          <div>@ {form.username}</div>
        </div>
        <div className="Badge__section-footer">
          #Devf
        </div>
      </div>
  )
}

export default BadgeComponent