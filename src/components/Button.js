import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
        </div>
    )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.defaultProps = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}
export default Button
