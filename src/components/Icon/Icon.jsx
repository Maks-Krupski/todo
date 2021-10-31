import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from './delete.svg'; // svg как компонент, просто картинка-   import DeleteIcon from './delete.svg';
import { ReactComponent as EditIcon } from './edit.svg';
import { ReactComponent as Correct } from './correct-mark.svg';

const TypeToIconMap = {
  delete: <DeleteIcon />,
  edit: <EditIcon />,
  correct: <Correct />,
};

export const Icon = ({ type }) => <div>{ TypeToIconMap[type] }</div>;

Icon.propTypes = { type: PropTypes.string };

Icon.defaultProps = { type: 'default' };
