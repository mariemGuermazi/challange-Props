import React from 'react'
import PropTypes from 'prop-types'
export const Profile = (props) => {
    const handleName = () => alert (`this is ${props.fullName}`)
    console.log(props)
    return (
        <div>
            {props.children}
            <h1>{props.fullName}</h1>
            <h1>{props.Bio}</h1>
            <h1>{props.Profission}</h1>
            <button onClick= {handleName}>click me</button>
        </div>
    )
}
Profile.defaultProps ={
    fullName: "fullname"
}
Profile.propTypes ={
    fullName: PropTypes.string
}