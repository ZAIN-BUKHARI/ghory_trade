import React from "react"
const LightButtonPlayer = (props) => {
    const push=()=>{
      props.func()
    }
    return (
      <>
      <style jsx>
          {
              `
              button {
                  --glow-color: rgb(217, 176, 255);
                  --glow-spread-color: rgba(191, 123, 255, 0.781);
                  --enhanced-glow-color: rgb(231, 206, 255);
                  --btn-color: rgb(100, 61, 136);
                  // border: .25em solid var(--glow-color);
                  border: .25em solid #ffdb1a;
                  padding: 1em 3em;
                  color: #ffdb1a;
                  font-size: 15px;
                  font-weight: bold;
                  background-color: #121212;
                  border-radius: 1em;
                  outline: none;
                  box-shadow: 0 0 1em .25em #ffdb1a,
                         0 0 4em 1em #ffdb1a,
                         inset 0 0 .75em .25em #ffdb1a;
                  text-shadow: 0 0 .5em #ffdb1a;
                  position: relative;
                  transition: all 0.3s;
                  margin-bottom:300px;
                 }
                 
                 button::after {
                  pointer-events: none;
                  content: "";
                  position: absolute;
                  top: 120%;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  background-color: #ffdb1a;
                  filter: blur(2em);
                  opacity: .7;
                  transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
                 }
                 
                 button:hover {
                  color: #121212;
                  background-color: #ffdb1a;
                  box-shadow: 0 0 1em .25em #ffdb1a,
                         0 0 4em 2em #ffdb1a,
                         inset 0 0 .75em .25em #ffdb1a;
                 }
                 
                 button:active {
                  box-shadow: 0 0 0.6em .25em #ffdb1a,
                         0 0 2.5em 2em #ffdb1a,
                         inset 0 0 .5em .25em #ffdb1a;
                 }
              `
          }
      </style>
      <button onClick={push} disabled={props.DisableButton}> {props.title}
  </button>
      </>
    )
  }

export default LightButtonPlayer