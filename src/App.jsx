import { useState } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import './style.css';

let id = 0;

function App() {
  const [tab, setTab] = useState('All');

  const [count, setCount] = useState(0);

  const [state, setState] = useState([]);

  const deleteList = (li) => {
    const newState = [...state];
    let newCount = count;
    for (let i = 0; i < newState.length; i += 1) {
      if (Number(li.id) === Number(newState[i].id)) {
        if (newState[i].active) {
          newCount -= 1;
        }
        newState.splice(i, 1);
      }
    }
    setState(newState);
    setCount(newCount);
  };

  const footer = (text) => {
    setTab(text);
  };

  const edit = (ids, value) => {
    const newState = [...state];
    for (let i = 0; i < newState.length; i += 1) {
      if (Number(ids) === i) {
        newState[i].value = value;
      }
    }
    setState(newState);
  };

  const addList = (value, data) => {
    const newState = [...state];
    let newCount = count;
    newState.push({ id, value, active: true, data });
    newCount += 1;
    setState(newState);
    setCount(newCount);
    id += 1;
  };

  const activete = (ids) => {
    const newState = [...state];
    let newCount = count;
    for (let i = 0; i < newState.length; i += 1) {
      if (Number(newState[i].id) === Number(ids)) {
        newState[i].active = !newState[i].active;
        if (!newState[i].active) {
          newCount -= 1;
        } else {
          newCount += 1;
        }
      }
    }
    setState(newState);
    setCount(newCount);
  };

  const deleteCompleted = () => {
    const newState = [...state];
    let countA = 0;
    for (let i = 0; i < newState.length; i += 1) {
      if (!newState[i].active) {
        countA += 1;
      }
    }
    while (countA > 0) {
      for (let i = 0; i < newState.length; i += 1) {
        if (!newState[i].active) {
          newState.splice(i, 1);
          countA -= 1;
          break;
        }
      }
    }
    setState(newState);
  };

  return (
    <section className="todoapp">
      <Header addList={addList} />
      <Main state={state} deleteList={deleteList} edit={edit} tab={tab} activete={activete} />
      <Footer count={count} tab={tab} footer={footer} deleteCompleted={deleteCompleted} />
    </section>
  );
}

export default App;
