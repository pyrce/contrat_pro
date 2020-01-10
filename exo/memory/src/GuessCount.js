import React from 'react'

import './GuessCount.css'
import PropTypes from 'prop-types'

// La fonction GuessCount ici…


const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>
GuessCount.propTypes = {
  guesses: PropTypes.number.isRequired,
}
export default GuessCount