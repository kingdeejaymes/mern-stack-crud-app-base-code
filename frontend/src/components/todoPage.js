import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'
import AddTask from './todoAdd';
import TaskDataService from '../services/task.service';

const ToDoPage = props => {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])
  //const location = useLocation();

  const btnClass = !showAddTask ? 'btn btn-primary' : 'btn btn-danger';
  const btnTxt = !showAddTask ? 'Add Task' : 'Close';

  // On Load of Screen, retrieve initial data from DB
  // Then became a listener function to update screen 
  // and load data from BE if anythin changes
  useEffect(() => {

    TaskDataService.getAll()
      .then(response => {
        console.log('TASKS LIST retrieved from BE ===> ', response.data);
        // update list of FE tasks
        setTasks(response.data);
      })
      .catch(e => {
        console.log('GET ALL TASK ERROR ===> ', e);
      });
  }, []);


  // Add Task
  const addTask = async (task) => {

    TaskDataService.createTask(task)
      .then(response => {
        console.log(response.data);
        // append newly created task to the list
        setTasks([...tasks, response.data]);
      })
      .catch(e => {
        console.log('CREATE TASK ERROR ===> ', e);
      });
  }

  // Delete Task
  const deleteTask = async (id) => {

    if (window.confirm("Are you sure you want to delete?")) {
      TaskDataService.deleteTask(id)
      .then(response => {

        if (response.status === 200) {
          // remove the deleted task in the FE list based on ID
          setTasks(tasks.filter((task) => task._id !== id));
          alert(response.data.message);
        }
      })
      .catch(e => {
        console.log('DELETE TASK ERROR ===> ', e);
        alert(e);
      });
    }
  }
  
  return (
    <div >
      <div className="row">
        <div className="col-9">
          <header className="header">
            <h2>This is based on &nbsp;
              <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8" rel="noreferrer" target="_blank">
                Traversy Media Tutorial
              </a>
            </h2>
          </header>
        </div>
        <div className="col-3">
          <button
              style={{marginRight: '30px'}}
              type="button"
              onClick={() => setShowAddTask(!showAddTask)}
              className= { btnClass }
            >
              {btnTxt}
            </button>
        </div>
      </div>
      

      <div className="container">
        <div className="row" style={{ marginTop: '25px'}}>
          { showAddTask && <AddTask onAdd={addTask} />}
        </div>
      </div>
      <div style={{ marginTop: "30px"}}>
        { tasks.length > 0 ? (

          tasks.map((task, index) => (
            // <div
            //   className={`task ${task.reminder && 'reminder'}`}
            //   onDoubleClick={() => onToggle(task.id)}
            // >
            <div className="card text-white bg-dark mb-3" >
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <div className="row">
                  <div className="col-11">
                    <h4 class="card-title">{task.task_name}{' '}</h4>
                  </div>
                  <div className="col-1 justify-content-end">
                    <FaTimes
                      style={{ cursor: 'pointer' }}
                      onClick={() => deleteTask(task._id)}
                    />
                  </div>
                </div>
                <p>{task.day_and_time}</p>
              </div>
            </div>
            // <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
          ))
          
        ) : ( 'No tasks to show')
        }
      </div>
    </div>
  );
};

export default ToDoPage;