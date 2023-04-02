import React from 'react'

export default function Card() {
  return (
    <div>
      <div>
          <div>
            <img/>
          </div>
          <div className="cardBody">
            <div className="cardName">
              <h2>Name</h2>
            </div>
            <div>
              <h2>Price</h2>
              <p><span>500,000</span> FCFA</p>
            </div>
          </div>
      </div>
    </div>
  )
}
