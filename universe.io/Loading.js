import { useRouter } from 'next/router'
import React from 'react'
const Loading = () => {
  const router=useRouter()
  if(!router.asPath.includes('admin')){
    return (
      <>
      <style>
          {`
          .Loader-Main{
            background-color: #29323c;
            position: absolute;
            top: 50%;
            z-index: 2;
            left: 50%;
          }
          .spinner {
              position: relative;
              width: 60px;
              height: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              margin-left: -75px;
            }
            
            .spinner span {
              position: absolute;
              top: 50%;
              left: var(--left);
              width: 35px;
              height: 7px;
              background: #ffff;
              animation: dominos 1s ease infinite;
              box-shadow: 2px 2px 3px 0px black;
            }
            
            .spinner span:nth-child(1) {
              --left: 80px;
              animation-delay: 0.125s;
            }
            
            .spinner span:nth-child(2) {
              --left: 70px;
              animation-delay: 0.3s;
            }
            
            .spinner span:nth-child(3) {
              left: 60px;
              animation-delay: 0.425s;
            }
            
            .spinner span:nth-child(4) {
              animation-delay: 0.54s;
              left: 50px;
            }
            
            .spinner span:nth-child(5) {
              animation-delay: 0.665s;
              left: 40px;
            }
            
            .spinner span:nth-child(6) {
              animation-delay: 0.79s;
              left: 30px;
            }
            
            .spinner span:nth-child(7) {
              animation-delay: 0.915s;
              left: 20px;
            }
            
            .spinner span:nth-child(8) {
              left: 10px;
            }
            
            @keyframes dominos {
              50% {
                opacity: 0.7;
              }
            
              75% {
                -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
              }
            
              80% {
                opacity: 1;
              }
            }
            .color{
            }
            `}
      </style>
      <div className='Loader-Main'>
      <div className="spinner ">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
      </div>
      </>
    )
  }else{
    return (
      <>
      <style>
          {`
          .Loader-Main{
            background-color: black;
            position: absolute;
            top: 50%;
            z-index: 2;
            left: 50%;
          }
          .spinner {
              position: relative;
              width: 60px;
              height: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              margin-left: -75px;
            }
            
            .spinner span {
              position: absolute;
              top: 50%;
              left: var(--left);
              width: 35px;
              height: 7px;
              background: black;
              animation: dominos 1s ease infinite;
              box-shadow: 2px 2px 3px 0px black;
            }
            
            .spinner span:nth-child(1) {
              --left: 80px;
              animation-delay: 0.125s;
            }
            
            .spinner span:nth-child(2) {
              --left: 70px;
              animation-delay: 0.3s;
            }
            
            .spinner span:nth-child(3) {
              left: 60px;
              animation-delay: 0.425s;
            }
            
            .spinner span:nth-child(4) {
              animation-delay: 0.54s;
              left: 50px;
            }
            
            .spinner span:nth-child(5) {
              animation-delay: 0.665s;
              left: 40px;
            }
            
            .spinner span:nth-child(6) {
              animation-delay: 0.79s;
              left: 30px;
            }
            
            .spinner span:nth-child(7) {
              animation-delay: 0.915s;
              left: 20px;
            }
            
            .spinner span:nth-child(8) {
              left: 10px;
            }
            
            @keyframes dominos {
              50% {
                opacity: 0.7;
              }
            
              75% {
                -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
              }
            
              80% {
                opacity: 1;
              }
            }
            .color{
            }
            `}
      </style>
      <div className='Loader-Main'>
      <div className="spinner ">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
      </div>
      </>
    )

  }
  
}

export default Loading