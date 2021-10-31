import { connect } from 'react-redux';
import { addTask, getTasksThunk } from '../../actions/tasksActions';
import App from './App';

const mapDispatchToProps = {
  addTask,
  getTasksThunk,
};

export const AppContainer = connect(null, mapDispatchToProps)(App);
