import { useState } from 'react';
import { Button } from '../Button/Button';
import './Status.scss';

export const Status = () => {
  const [status, changeStatus] = useState('Todo');
  const [value, changeValue] = useState('todo__btn');

  const handleStatusChange = () => {
    if (status === 'Todo') {
      changeStatus('In Progress');
      changeValue('inProgress__btn');
    } else if (status === 'In Progress') {
      changeStatus('Complete');
      changeValue('complete__btn');
    } else {
      changeStatus('Todo');
      changeValue('todo__btn');
    }
  };

  return <Button className={value} onClick={handleStatusChange}>{status || ''}</Button>;
};
