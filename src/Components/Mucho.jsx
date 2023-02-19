import React, { useState } from 'react'

const Mucho = () => {
// JS
  const [inputList, setInputList] = useState("");
  const [Items,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };
// HTML output 
  return (
    <div className='main-container'>
      <div className='all-lists'>
        <h2>My lists.</h2>
        <ul id='todo-container' className='task-list'>
          <li className='list-name active'>Projects</li>
          <li className='list-name'>College</li>
          <li className='list-name'>Grocery</li>
        </ul>

        <form action="">
          <button className="btn-new-list">+</button>
          <input type="text" className='new-list' placeholder='New list' />
        </form>
      </div>

      <div className='todo-list-container'>
        <div className="todo-header">
          <h2 className="list-title">Youtube</h2>
          <p className="task-count">3 task remaining</p>
        </div>
        {/*-------------------- ENTER INPUT FIELD ----------------------*/}
        <div className="new-task-create">
            <button className="btn-new-list" onClick={listOfItems}>+</button>
            <input type="text" className='new-list' onChange={itemEvent} 
              value={inputList} placeholder='New task' />
        </div>


        {/* -------------------------lists here----------------------- */}
        <div className="todo-body">
          <div className="tasks">
          {
            Items.map((itemval) => {
              return <>
                <div className="task">
                  <input type="checkbox" />
                  <label>
                    <span className="custom-checkbox"></span>
                    {itemval}
                  </label>
                </div>
              </>
            })
            }
          </div>
        </div>
        <div className="delete-stuff">
          <button className="btn delete">Clear completed tasks</button>
          <button className="btn delete delete-btn">Delete list</button>
        </div>
      </div>
    </div>
  )
}

export default Mucho