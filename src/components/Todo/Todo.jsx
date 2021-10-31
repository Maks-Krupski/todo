import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import './Todo.scss';
import { filterTask, removeTask } from '../../actions/tasksActions';

const Todo = ({ value }) => {
  const dispatch = useDispatch();

  const handleTitleChange = (TaskId, taskValue) => {
    const filteredList = value.map((item, index) => {
      const result = { ...item };

      if ((index + 1) === TaskId) {
        result.title = taskValue;
      }

      return result;
    });

    dispatch(filterTask(filteredList));
  };

  const handleTaskRemove = (TaskId) => {
    const taskList = value.reduce((acc, item, index) => {
      if ((index + 1) !== TaskId) acc.push(item);

      return acc;
    }, []);

    dispatch(removeTask(taskList));
  };

  const listItems = value.map((item, index) => <TodoItem key={item.id.toString()} title={item.title} id={index + 1} onClickTitleChange={handleTitleChange} onClickTaskRemove={handleTaskRemove} />);

  return (
    <ul className='main__list'>
      <li className='list__item'>
        <span className='list__number'>#</span>
        <span className='list__name'>Task Name</span>
        <span className='list__status'>Status</span>
        <span className='list__edit'>Edit</span>
        <span className='list__remove'>Remove</span>
      </li>
      { listItems }
    </ul>
  );
};

Todo.propTypes = { value: PropTypes.arrayOf(PropTypes.object).isRequired };

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return ({ value: state.tasks });
};

const mapDispatchToProps = {
  filterTask,
  removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
