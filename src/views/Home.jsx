import MediaRow from "../components/MediaRow.jsx";
import {useMedia} from "../hooks/ApiHooks.js";
import SingleView from "../components/SingleView.jsx";
import {useState} from "react";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(
    null,
  );

  const { mediaArray } = useMedia();

  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <table>
        <tbody>
        {mediaArray.map((mediaItem) => (
          <MediaRow
            key={mediaItem.media_id}
            item={mediaItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
