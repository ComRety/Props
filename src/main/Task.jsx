import { formatDistanceToNow } from 'date-fns';
import { useRef } from 'react';

import classes from './main.module.css';

export default function Task({ editStateList, editState, activete, children, edit, deleteTask, id, isActive }) {
  const input = useRef();

  function toggle() {
    activete(id);
  }

  function editing() {
    editStateList(id);
    input.current.value = children.value;
  }

  function edits(event) {
    event.preventDefault();
    if (input.current.value.trim().length !== 0) {
      edit(id, input.current.value);
      editStateList(id);
    } else {
      edit(id, children.value);
      editStateList(id);
    }
  }

  function deletes() {
    deleteTask(id);
  }

  return (
    <li id={id} className={`${!isActive ? classes.completed : ''} ${!editState ? classes.editing : ''}`}>
      <div className={classes.view}>
        <input
          id={`one${String(id)}`}
          type="checkbox"
          defaultChecked={!isActive}
          className={classes.toggle}
          onClick={toggle}
        />
        <label htmlFor={`one${String(id)}`}>
          <span className={classes.description}>{children.value}</span>
          <span className={classes.created}>{`created ${formatDistanceToNow(children.data, {
            addSuffix: true,
            includeSeconds: true,
          })}`}</span>
        </label>
        <button
          type="button"
          className={`${classes.icon} ${classes['icon-edit']}`}
          onClick={editing}
          aria-label="Редактировать"
        />
        <button
          type="button"
          className={`${classes['icon-destroy']} ${classes.icon}`}
          onClick={deletes}
          aria-label="Удалить"
        />
      </div>
      <form onSubmit={edits}>
        <input ref={input} type="text" className={classes.edit} />
      </form>
    </li>
  );
}
