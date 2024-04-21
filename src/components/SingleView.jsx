import React from 'react';

const SingleView = ({selectedItem, setSelectedItem }) => {
  const renderMediaContent = () => {
    if (selectedItem.media_type.includes("image")) {
      return <img src={selectedItem.filename} alt={selectedItem.title} style={{ width: "100%" }} />;
    } else if (selectedItem.media_type.includes("video")) {
      return (
        <video controls style={{ width: "100%" }}>
          <source src={selectedItem.filename} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <dialog open={!!selectedItem} style={{ position: "fixed", top: 0, left: 0, margin: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)" }}>
      <article style={{ position: "relative", margin: "10vh auto", padding: "20px", background: "white", borderRadius: "8px", width: "80%", maxWidth: "600px" }}>
        <h3>{selectedItem?.title}</h3>
        <p>{selectedItem?.description}</p>
        {selectedItem && renderMediaContent()}
        <button onClick={handleClose} style={{ position: "absolute", top: "10px", right: "10px" }}>Close</button>
      </article>
    </dialog>
  );
};

export default SingleView;
