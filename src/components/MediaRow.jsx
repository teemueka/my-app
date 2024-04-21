import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const MediaRow = ({ item, setSelectedItem }) => {
  const selectItem = () => {
    setSelectedItem(item);
  };

  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} style={{ maxWidth: '100px' }} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize.toLocaleString()} bytes</td>
      <td>{item.media_type}</td>
      <td>
        <Link to="/single" state={{item}}>Show</Link>      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired
};

export default MediaRow;
