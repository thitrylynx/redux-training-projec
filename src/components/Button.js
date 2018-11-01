import React from 'react'
import PropTypes from 'prop-types'

export class Button extends React.Component {
  render() {
    const { years, changeYear } = this.props

    return (
      <p>
        {years.map(currentYear => {
          return (
            <button key={currentYear} className="btn" onClick={changeYear}>
              {currentYear}
            </button>
          )
        })}
      </p>
    )
  }
}

Button.propTypes = {
  years: PropTypes.array.isRequired,
  changeYear: PropTypes.func.isRequired,
}
