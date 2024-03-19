import React from 'react'

const App = () => {
  return (
  <>
  {/* for light blue backgrounf i used main-div */}
    <div className="main-div">
      {/* for main white box of todo app we use center_div */}
      <div className="center_div">
        <br />
        <h1>ToDo list</h1>
        <br />
        <input type="text" placeholder ="Add a Items"/>
        <button>+</button>

        <ol>
          <li>
            buy apple
          </li>
        </ol>
      </div>
    </div>
    </>
  )
}

export default App
