import { formatDistanceToNow } from 'date-fns';
import { useRef } from 'react';

import classes from './main.module.css';

export default function ListItem({ activete, children, edit, deleteList, id, isActive }) {
  const input = useRef();

  function toggle(e) {
    activete(e.target.closest('li').id);
  }

  function editing(e) {
    e.closest('li').classList.toggle(classes.editing);
    input.current.value = children.value;
  }

  function edits(event) {
    event.preventDefault();
    edit(input.current.closest('li').id, input.current.value);
    event.target.closest('li').classList.toggle(classes.editing);
  }

  function deletes(e) {
    deleteList(e.target.closest('li'));
  }

  return (
    <li id={id} className={!isActive ? classes.completed : ''}>
      <div className={classes.view}>
        <input id="input" type="checkbox" defaultChecked={!isActive} className={classes.toggle} onClick={toggle} />
        <label htmlFor="input">
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
