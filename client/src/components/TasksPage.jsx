import React from 'react'
import AddTaskForm from './AddTaskForm'
import BottomPanel from './BottomPanel'
import TasksPlace from './TasksPlace'

export default function TaskPage(props) {
    return (
        <div>
            <AddTaskForm />
            <TasksPlace localState={props.localState} />
            <BottomPanel />
        </div>
    )
}
