import TaskList from './TaskList';

export default function Main({ activete, state, deleteTask, edit, tab }) {
  let newState = [];
  if (tab === 'All') {
    newState = state.map((item) => item);
  } else if (tab === 'Active') {
    newState = state.filter((item) => {
      if (item.active) {
        return true;
      }
      return false;
    });
  } else if (tab === 'Completed') {
    newState = state.filter((item) => {
      if (!item.active) {
        return true;
      }
      return false;
    });
  }
  return (
    <section className="main">
      <TaskList activete={activete} state={newState} deleteTask={deleteTask} edit={edit} tab={tab} />
    </section>
  );
}
