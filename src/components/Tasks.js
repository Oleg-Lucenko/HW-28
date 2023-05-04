import React from 'react';
import Task from './Task.js';




const Tasks = (props) => {


    function taskNumber(arrElement) {
        return props.tasks.indexOf(arrElement) + 1;
    }

    return (
        <div className="tasks-container">
            {props.tasks.length === 0 && <p className='no-task-message'>No tasks yet</p>}
            {props.tasks.length > 0 &&
            props.tasks.map(task => (
                <Task tasks={props.tasks} task={task} number={taskNumber(task)} text={task.text} taskStatus={props.taskStatus} removeTask={props.removeTask} key={taskNumber(task)}/>
            )
            )}

        </div>

    );
};

export default Tasks;