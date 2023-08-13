// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// const Slider = () => {
//     const [num,setnum]=useState(1);
//     useEffect(()=>{
//         function timer(){
//             setTimeout(() => {
//                 setnum(3)
//                 setTimeout(()=>{
//                     setnum(2)
//                 },6000)
                
//             }, 9000);
//         }
//         setInterval(()=>{
//             setnum(1)
//             timer()        
//         },12000)
//     },[])
//   return (
//     <>
//     <div class="slider">
//         <div class="list">
//             <div class="item">
//                 <img src={`go${num}.png`} alt=""/>
//             </div>
            
//         </div>
//         <div class="buttons">
//             <button id="prev"></button>
//             <button id="next"></button>
//         </div>
//         <ul class="dots">
//             <li class="active"></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//         </ul>
//     </div>
//     </>
//   )
// }

// export default Slider