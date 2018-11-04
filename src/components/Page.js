import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

export class Page extends React.Component {
  changeYear = currentYear => {
    this.props.setYear(currentYear)
  }

  render() {
    const { year, photos, years } = this.props

    return (
      <div className="ib page">
        {years.map(currentYear => {
          return (
            <Button
              key={currentYear}
              currentYear={currentYear}
              changeYear={this.changeYear}
            />
          )
        })}
        <h3>{year} год</h3>
        <p>У тебя {photos.length} фото.</p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  years: PropTypes.array.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
}
