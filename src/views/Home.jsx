import MediaRow from '../components/MediaRow';
import UserData from '../components/UserData';
import {useMedia} from '../hooks/ApiHooks';

const Home = () => {

  const {mediaArray} = useMedia();

  return (
    <>

      <UserData />


      <h2>My Media</h2>
      <table>
        <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Owner</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created</th>
          <th>Size</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {mediaArray.map((item) => (
          <MediaRow
            key={item.media_id}
            item={item}
          />
        ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
