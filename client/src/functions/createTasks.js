import Task from '../components/Task';

export function tasksFromData(tasksArray) {
  if (!tasksArray) return 'No tasks'
  return tasksArray.map((taskObject) => {
    if (taskObject.completed) {
      return (
        <Task
          id={taskObject.id}
          className='complete'
          text={taskObject.text}
        />
      );
    } else {
      return (
        <Task
          id={taskObject.id}
          className=''
          text={taskObject.text}
        />
      );
    }
  });
}
