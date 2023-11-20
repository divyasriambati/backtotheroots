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
            <a className="listItems" href="https://example.com/payment?amount=10">
              $10
            </a>
            <a className="listItems" href="https://example.com/payment?amount=10">
              $20
            </a>
            <a className="listItems" href="https://example.com/payment?amount=10">
              $30
            </a>
            <a className="listItems" href="https://example.com/payment?amount=10">
              $50
            </a>
            <a className="listItems" href="https://example.com/payment?amount=10">
              $75
            </a>
            <a className="listItems" href="https://example.com/payment?amount=10">
              $100
            </a>
            <a className="listItems" href="https://example.com/payment?amount=10">
              $150
            </a>
            <a className="listItems" href="https://example.com/payment?amount=10">
              $200
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
