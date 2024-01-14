import ListItem from './ListItem';
import classes from './main.module.css';

let key = 0;

export default function TaskList({ tab, state, activete, edit, deleteList }) {
  if (tab === 'All') {
    return (
      <ul className={classes['todo-list']}>
        {state.map((item) => {
          key += 1;
          return (
            <ListItem
              isActive={item.active}
              activete={activete}
              key={key}
              edit={edit}
              deleteList={deleteList}
              id={item.id}
            >
              {{ value: item.value, data: item.data }}
            </ListItem>
          );
        })}
      </ul>
    );
  }
  if (tab === 'Active') {
    return (
      <ul className={classes['todo-list']}>
        {state.map((item) => {
          key += 1;
          if (item.active) {
            return (
              <ListItem
                isActive={item.active}
                activete={activete}
                key={key}
                edit={edit}
                deleteList={deleteList}
                id={item.id}
              >
                {{ value: item.value, data: item.data }}
              </ListItem>
            );
          }
          return null;
        })}
      </ul>
    );
  }
  if (tab === 'Completed') {
    return (
      <ul className={classes['todo-list']}>
        {state.map((item) => {
          key += 1;
          if (!item.active) {
            return (
              <ListItem
                isActive={item.active}
                activete={activete}
                key={key}
                edit={edit}
                deleteList={deleteList}
                id={item.id}
              >
                {{ value: item.value, data: item.data }}
              </ListItem>
            );
          }
          return null;
        })}
      </ul>
    );
  }
}
