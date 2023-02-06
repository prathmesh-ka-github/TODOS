import React from 'react'

const Mucho = () => {
  return (
    <div className='main-container'>
        <div className='all-lists'>
          <h2>My lists.</h2>
          <ul>
            <li className='active'>Youtube</li>
            <li>Work</li>
            <li>Grocery</li>
          </ul>

          <form action="">
            <button className="btn-new-list">+</button>
            <input type="text" className='new-list'
            placeholder='New list'/>
          </form>
        </div>

        <div className='todo-list-container'>
          <div className="todo-header">
            <h2 className="list-title">Youtube</h2>
            <p className="task-count">3 task remaining</p>
          </div>
          <div className="todo-body">
          {/* -------------------------lists here----------------------- */}
            <div className="tasks">
              <div className="task">
                <input type="checkbox" name="" id="task1"/>
                <label for="task1">
                  <span className="custom-checkbox"></span>
                  Make a todos app's UI
                </label>
              </div>
            </div>

            <div className="tasks">
              <div className="task">
                <input type="checkbox" name="" id="task2" />
                <label for="task2">
                  <span className="custom-checkbox"></span>
                  Push the changes
                </label>
              </div>
            </div>

            <div className="tasks">
              <div className="task">
                <input type="checkbox" name="" id="task3" />
                <label for="task3">
                  <span className="custom-checkbox"></span>
                  Create a pull request
                </label>
              </div>
            </div>
{/*-------------------- ENTER INPUT FIELD ----------------------*/}
            <div className="new-task-create">
              <form action="">
                <button className="btn-new-list">+</button>
                <input type="text" className='new-list' 
                placeholder='New task' />
              </form>
            </div>

            <div className="delete-stuff">
              <button className="btn delete">Clear completed tasks</button>
              <button className="btn delete delete-btn">Delete list</button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Mucho