import { useRouter } from 'next/router'
import React from 'react'

const Instruction = () => {
  const router = useRouter()
  return (
    <>
    <div className='Policy-body'>
    <div class="wrapper flex_align_justify">
   <div class="tc_wrap">
       <div class="tabs_list">
         <ul>
           <li data-tc="tab_item_1"  class="active">Terms of use</li>
         </ul>
       </div>
       <div class="tabs_content">
          <div class="tab_head">
            <h2>U-Plan Instruction</h2>
          </div>
          <div class="tab_body">
            <div class="tab_item tab_item_1">
                <h3>Terms of use</h3>
                <p className='instruction-paragraph'>
                First, ensure you subscribe to our YouTube channel using different accounts. Watch our videos daily according to your chosen plan, which may require 5, 8, 10 or 14 hours per day. We monitor your daily progress through the Work Composer application. To participate in this plan, you must download the Work Composer app. We'll provide you with a Work Composer account for login. Begin your daily tasks, and we'll keep tabs on your progress. Failing to complete tasks may result in a daily fine deducted from your earnings.
                </p>
            </div>
            
          </div>
          <div class="tab_foot flex_align_justify">
            <button class="decline" onClick={()=>{router.push('/plans')}} >
              Decline
            </button>
            <button class="agree" onClick={()=>{router.push('/youtubeplan')}} >
              Agree
            </button>
          </div>
       </div>
   </div>
</div>
</div>
    </>
  )
}

export default Instruction