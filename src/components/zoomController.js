import React, { useState } from 'react';
import { Textarea } from './textarea';
import { Previewer } from './previewer';

export const ZoomController = ({ input, setInput }) => {

  const [zoomTextarea, setZoomTextarea] = useState(false);
  const [zoomPreviewer, setZoomPrewiever] = useState(false);

  return (
    <>
      {!zoomPreviewer &&
        <Textarea
          input={input}
          setInput={setInput}
          zoom={zoomTextarea}
          setZoom={setZoomTextarea} />
      }

      {!zoomTextarea &&
        <Previewer
          input={input}
          zoom={zoomPreviewer}
          setZoom={setZoomPrewiever} />
      }
    </>
  );
}