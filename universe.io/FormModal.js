import React,{ useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext';
const FormModal = () => {
    const {setPaymentRequestModal} = useContext(ThemeContext)
  return (
    <>
    <div className='FormModal'>
    <div class="card">
    <div class="card__title">withdraw Request<span onClick={()=>{setPaymentRequestModal(false)}} className='Form-modal-cross'>X</span></div>
    <p class="card__content">After submit your request will go to the admin and it will release your assests to your selected payment method.
    </p>
    <div class="card__form">
        <input placeholder="Your Amount" type="text"/>
        <div className='form-modal-select'>

        <select 
                  name="select"
                  onChange={(e) => {
                    setwallet(e.target.value);
                  }}
                  className="PlanForm-select modal-select"
                >
                  <option value={"TRC20"}>TRC20</option>
                  <option value={"JAZZCASH"}>JAZZCASH</option>
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  <option value={"RASS"}>RASS</option>
                </select>
        <input placeholder="Your Wallet Address or Number" type="text"/>
                    </div>
        <button class="sign-up"> Submit Request</button>
    </div>
</div>
    </div>
    </>
  )
}

export default FormModal