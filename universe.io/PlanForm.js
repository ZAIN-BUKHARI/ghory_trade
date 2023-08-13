import React from 'react'

const PlanForm = () => {
  return (
    <>
    <div className='Plan'>
    <form action="" class="container">
  <div class="input-container">
      <div class="input-content">
          <div class="input-dist">
           <span id="SubscribeTXT">Subscription</span>
              <div class="input-type">
                  <input placeholder="Email" required="" type="text" class="input-is"/>  
                  <input placeholder="Password" required="" type="text" class="input-is"/>  
                  <input placeholder="Password" required="" type="text" class="input-is"/>  
                  <input placeholder="Password" required="" type="text" class="input-is"/>  
                  <input placeholder="Password" required="" type="text" class="input-is"/>  
                  <input placeholder="Password" required="" type="text" class="input-is"/>  
              </div>
              <button>Subscribe</button>
          </div>
      </div>
  </div>
</form>
    </div>

    </>
  )
}

export default PlanForm