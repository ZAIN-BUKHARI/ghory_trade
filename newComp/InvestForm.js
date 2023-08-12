import React from 'react'

const InvestForm = () => {
  return (
    <>
    <form class="Invest">
  <span class="Invest-title">Subscribe to our newsletter.</span>
  <p class="Invest-description">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
  <div>
    <input placeholder="Enter your email" type="email" name="email" id="email-address"/>
    <button type="submit">Subscribe</button>
  </div>
</form>
    </>
  )
}

export default InvestForm