import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Todo from '../../components/Todo/Todo';
import { addTask, getTasksThunk } from '../../actions/tasksActions';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import './App.scss';

const App = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksThunk());
  }, []);

  const handleSetIsModalShow = () => {
    setIsModalShow(!isModalShow);
  };

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (inputValue) {
      dispatch(addTask(inputValue));
      event.preventDefault();
      handleSetIsModalShow();
    } else {
      event.preventDefault();
      handleSetIsModalShow();
    }
  };

  return (
    <div className='App'>
      <header className='App__header'>
        <h1 className='header__title'>TODO List Demo App</h1>
        <p className='header__text'>Do it now</p>
      </header>
      <main className='App__main'>
        <Button className='main__btn' onClick={handleSetIsModalShow}>
          Add Task
        </Button>
        <Todo />
        {
          isModalShow && <Modal onClick={handleSetIsModalShow} onChange={handleChange} onSubmit={handleSubmit} />
        }
      </main>
    </div>
  );
};

const mapDispatchToProps = {
  addTask,
  getTasksThunk,
};

export default connect(null, mapDispatchToProps)(App);
