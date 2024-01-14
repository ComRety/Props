import TaskList from './TaskList';

export default function Main({ activete, state, deleteList, edit, tab }) {
  return (
    <main>
      <TaskList activete={activete} state={state} deleteList={deleteList} edit={edit} tab={tab} />
    </main>
  );
}
