import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task_name, setText] = useState('')
  const [day_and_time, setDay] = useState('')
  const [reminder, setReminder] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()

    if (!task_name) {
      alert('Please add a task');
      return;
    }

    onAdd({ task_name, day_and_time, reminder });

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <div className="card">
        <div className="card-body">
            <div className="row justify-content-md-center">
                <div className="d-flex justify-content-center">
                    <h4 className="card-title ">Add Task</h4>
                </div>
            </div>
            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <form className='add-form' onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="form-label mt-4">Task </label>
                    <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        required
                        value={task_name}
                        placeholder="Add Task"
                        onChange={(e) => setText(e.target.value)}
                        />
                    <label for="floatingInput">Add Task</label>
                    </div>
                    <label className="form-label mt-4">Day & Time </label>
                    <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        required
                        value={day_and_time}
                        placeholder="Add Day & Time"
                        onChange={(e) => setDay(e.target.value)}
                        />
                    <label for="floatingInput">Add Day & Time</label>
                    </div>
                    <label className="form-label mt-4">Reminder </label>
                    <div className="form-floating mb-3">
                    <input
                        type="checkbox"
                        checked={reminder}
                        value={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-3"></div>
                    <div className="col-3 d-flex justify-content-md-center">
                        <input type='submit' value='Save Task' className='btn btn-success' />
                    </div>
                    <div className="col-3"></div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTask