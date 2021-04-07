import React from 'react'
import PropTypes from 'prop-types'
import Button from "../components/Button";
const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            {/* <h2 style={headingStyle}>{title}</h2> */}
            <h2>{title}</h2>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            {/* <Button color='blue' text='Hello' />
            <Button color='red' text='Hello' /> */}
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
//CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }
export default Header
