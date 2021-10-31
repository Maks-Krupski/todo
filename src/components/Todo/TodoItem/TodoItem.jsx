import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button/Button';
import { Status } from '../../Status/Status';
import { Icon } from '../../Icon/Icon';
import './TodoItem.scss';

export const TodoItem = ({ title, id, onClickTitleChange, onClickTaskRemove }) => {
  const [isChanging, setChangingState] = useState(false);
  const [inputValue, setinputValue] = useState(title);
  const btn = useRef(null);

  const handleInputValueChange = (event) => {
    setinputValue(event.target.value);
  };

  const handleEdit = () => {
    if (isChanging) {
      onClickTitleChange(id, inputValue);

      setChangingState(false);
    } else { setChangingState(true); }
  };

  const handleExitEdit = (event) => {
    if (event.relatedTarget !== btn.current) {
      setChangingState(false);
      onClickTitleChange(id, inputValue);
    } else { event.target.focus(); }
  };

  return (
    <li className='list__item'>
      <span className='list__number'>{id}</span>
      {
        isChanging
          ? (
            <span className='list__name'>
              <input type='text' value={inputValue} onChange={handleInputValueChange} autoFocus onBlur={handleExitEdit} />
            </span>
          )
          : <span className='list__name'>{title}</span>
      }
      <span className='list__status'>
        <Status />
      </span>
      <span className='list__edit'>
        {
          isChanging
            ? (
              <Button className='edit__btn' ref={btn} onClick={handleEdit}>
                <Icon type='correct' />
              </Button>
            )
            : (
              <Button className='edit__btn' onClick={handleEdit}>
                <Icon type='edit' />
              </Button>
            )
        }

      </span>
      <span className='list__remove'>
        <Button className='remove__btn' onClick={() => onClickTaskRemove(id)}>
          <Icon type='delete' />
        </Button>
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClickTitleChange: PropTypes.func.isRequired,
  onClickTaskRemove: PropTypes.func.isRequired,
};
