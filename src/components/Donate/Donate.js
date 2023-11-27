import React, { useState } from 'react'
import './Donate.css'

export default function Donate() {
  const [showAccordion, setShowAccordion] = useState(false)

  const handleRecurringClick = () => {
    setShowAccordion(true)
  }

  const handleOneTimeClick = () => {
    window.open('https://donate.stripe.com/8wM8yEgQDe4x5mE8ww', '_blank')
  }
  return (
    <div className="donateSection">
      <h1>Donate</h1>
      <div>
        <button className="donateButton" onClick={handleRecurringClick}>
          Recurring Payment
        </button>
        <button className="donateButton" onClick={handleOneTimeClick}>
          One-time Payment
        </button>
      </div>

      {showAccordion && (
        <div className="listitems">
          <h2 className='subHeader'>Choose a recurring donation amount:</h2>
          <div className='listItemContainer'>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/dR6cOU1VJ1hL6qI6oq">
              $11
            </a>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/5kAg161VJaSlcP6bIL">
              $21
            </a>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/fZeg169ob6C54iA8wF">
              $30
            </a>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/9AQaGMdEr7G94iAcMQ">
              $50
            </a>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/14kg16eIv8Kd6qI4go">
              $75
            </a>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/fZebKQeIvgcFg1i28d">
              $100
            </a>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/6oE2agasf3pTg1i006">
              $150
            </a>
            <a className="listItems" target='_blank' href="https://buy.stripe.com/14k028dErbWpbL2dQX">
              $200
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
