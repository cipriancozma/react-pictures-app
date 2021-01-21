import React, { createRef, useEffect, useState } from "react";

const ImageCard = ({ image }) => {
    const [ span, setSpan ] = useState(0);
  const imageRef = createRef();

  const setSpans = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 250 + 1);

    setSpan(spans);
}

  useEffect(() => {

    setSpans();

  }, [imageRef]);


  return (
    <div style={{ gridRowEnd: `span ${span}`}}>
      <img onLoad={setSpans} ref={imageRef} alt={`${image.alt_description}`} src={`${image.urls.regular}`} />
    </div>
  );
};

export default ImageCard;
