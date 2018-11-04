import React from 'react'
import PropTypes from 'prop-types'

export class Button extends React.Component {
  render() {
    const { currentYear, changeYear } = this.props
    return (
      <button
        className="btn"
        onClick={() => {
          changeYear(currentYear)
        }}
      >
        {currentYear}
      </button>
    )
  }
}

Button.propTypes = {
  currentYear: PropTypes.number.isRequired,
  changeYear: PropTypes.func.isRequired,
}
