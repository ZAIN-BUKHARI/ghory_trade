import React from 'react'

const Loading = () => {
//   return (
//     <>
//     <style>
//         {`
//         .Loader-Main{
//           background-color: #29323c;
//           position: absolute;
//           top: 50%;
//           z-index: 2;
//           left: 50%;
//         }
//         .spinner {
//             position: relative;
//             width: 60px;
//             height: 60px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             border-radius: 50%;
//             margin-left: -75px;
//           }
          
//           .spinner span {
//             position: absolute;
//             top: 50%;
//             left: var(--left);
//             width: 35px;
//             height: 7px;
//             background: #ffff;
//             animation: dominos 1s ease infinite;
//             box-shadow: 2px 2px 3px 0px black;
//           }
          
//           .spinner span:nth-child(1) {
//             --left: 80px;
//             animation-delay: 0.125s;
//           }
          
//           .spinner span:nth-child(2) {
//             --left: 70px;
//             animation-delay: 0.3s;
//           }
          
//           .spinner span:nth-child(3) {
//             left: 60px;
//             animation-delay: 0.425s;
//           }
          
//           .spinner span:nth-child(4) {
//             animation-delay: 0.54s;
//             left: 50px;
//           }
          
//           .spinner span:nth-child(5) {
//             animation-delay: 0.665s;
//             left: 40px;
//           }
          
//           .spinner span:nth-child(6) {
//             animation-delay: 0.79s;
//             left: 30px;
//           }
          
//           .spinner span:nth-child(7) {
//             animation-delay: 0.915s;
//             left: 20px;
//           }
          
//           .spinner span:nth-child(8) {
//             left: 10px;
//           }
          
//           @keyframes dominos {
//             50% {
//               opacity: 0.7;
//             }
          
//             75% {
//               -webkit-transform: rotate(90deg);
//               transform: rotate(90deg);
//             }
          
//             80% {
//               opacity: 1;
//             }
//           }
//           .color{
//           }
//           `}
//     </style>
//     <div className='Loader-Main'>
//     <div class="spinner ">
//   <span></span>
//   <span></span>
//   <span></span>
//   <span></span>
//   <span></span>
//   <span></span>
//   <span></span>
//   <span></span>
// </div>
//     </div>
//     </>
//   )
  return (
    <>
    <style>{`
    .pl {
      display: block;
      width: 9.375em;
      height: 9.375em;
    }
    
    .pl__arrows,
    .pl__ring-rotate,
    .pl__ring-stroke,
    .pl__tick {
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    
    .pl__arrows {
      animation-name: arrows42;
      transform: rotate(45deg);
      transform-origin: 16px 52px;
    }
    
    .pl__ring-rotate,
    .pl__ring-stroke {
      transform-origin: 80px 80px;
    }
    
    .pl__ring-rotate {
      animation-name: ringRotate42;
    }
    
    .pl__ring-stroke {
      animation-name: ringStroke42;
      transform: rotate(-45deg);
    }
    
    .pl__tick {
      animation-name: tick42;
    }
    
    .pl__tick:nth-child(2) {
      animation-delay: -1.75s;
    }
    
    .pl__tick:nth-child(3) {
      animation-delay: -1.5s;
    }
    
    .pl__tick:nth-child(4) {
      animation-delay: -1.25s;
    }
    
    .pl__tick:nth-child(5) {
      animation-delay: -1s;
    }
    
    .pl__tick:nth-child(6) {
      animation-delay: -0.75s;
    }
    
    .pl__tick:nth-child(7) {
      animation-delay: -0.5s;
    }
    
    .pl__tick:nth-child(8) {
      animation-delay: -0.25s;
    }
    
    /* Animations */
    @keyframes arrows42 {
      from {
        transform: rotate(45deg);
      }
    
      to {
        transform: rotate(405deg);
      }
    }
    
    @keyframes ringRotate42 {
      from {
        transform: rotate(0);
      }
    
      to {
        transform: rotate(720deg);
      }
    }
    
    @keyframes ringStroke42 {
      from,
      to {
        stroke-dashoffset: 452;
        transform: rotate(-45deg);
      }
    
      50% {
        stroke-dashoffset: 169.5;
        transform: rotate(-180deg);
      }
    }
    
    @keyframes tick42 {
      from,
      3%,
      47%,
      to {
        stroke-dashoffset: -12;
      }
    
      14%,
      36% {
        stroke-dashoffset: 0;
      }
    }
    `}</style>
    <svg class="pl" viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#000"></stop>
					<stop offset="100%" stop-color="#fff"></stop>
				</linearGradient>
				<mask id="mask1">
					<rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
				</mask>
				<mask id="mask2">
					<rect x="28" y="28" width="104" height="104" fill="url(#grad)"></rect>
				</mask>
			</defs>
			
			<g>
				<g class="pl__ring-rotate">
					<circle class="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(223,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
				</g>
			</g>
			<g mask="url(#mask1)">
				<g class="pl__ring-rotate">
					<circle class="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(193,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
				</g>
			</g>
			
			<g>
				<g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
				</g>
			</g>
			<g mask="url(#mask1)">
				<g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
					<polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
				</g>
			</g>
			
			<g>
				<g transform="translate(64,28)">
					<g class="pl__arrows" transform="rotate(45,16,52)">
						<path fill="hsl(3,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
						<path fill="hsl(223,10%,90%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
					</g>
				</g>
			</g>
			<g mask="url(#mask2)">
				<g transform="translate(64,28)">
					<g class="pl__arrows" transform="rotate(45,16,52)">
						<path fill="hsl(333,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
						<path fill="hsl(223,90%,80%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
					</g>
				</g>
			</g>
		</svg>
    </>
  )
}

export default Loading