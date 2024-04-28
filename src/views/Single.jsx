import { useLocation } from 'react-router-dom';

const Single = () => {
  const { state } = useLocation();
  const item = state?.item;

  const renderMediaContent = () => {
    if (item && item.media_type.includes("image")) {
      return <img src={item.filename} alt={item.title} style={{ width: "100%" }} />;
    } else if (item && item.media_type.includes("video")) {
      return (
        <video controls style={{ width: "100%" }}>
          <source src={item.filename} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <dialog open={!!item} style={{ position: "fixed", top: 0, left: 0, margin: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)" }}>
      <article style={{ position: "relative", margin: "10vh auto", padding: "20px", background: "white", borderRadius: "8px", width: "80%", maxWidth: "600px" }}>
        <h3>{item?.title}</h3>
        <p>{item?.description}</p>
        {renderMediaContent()}
        <button onClick={() => window.history.back()} style={{ position: "absolute", top: "10px", right: "10px" }}>Close</button>
      </article>
    </dialog>
  );
};

export default Single;
