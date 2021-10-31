import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './Modal.scss';

export const Modal = ({ onClick, onChange, onSubmit }) => (
  <>
    <div className='modal'>
      <Button className='modal__close-btn' onClick={onClick}>X</Button>
      <h2 className='modal__header'>Добавить задачу</h2>
      <form className='modal__form' onSubmit={onSubmit}>
        <textarea placeholder='Task name' onChange={onChange} />
        <input type='submit' value='Add task' />
      </form>
    </div>
  </>
);

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
