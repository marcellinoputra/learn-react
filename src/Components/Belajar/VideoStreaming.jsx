import React, { useRef } from 'react';

export default function VideoStreaming() {
  const refVideo = useRef(null);

  const startStreaming = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    refVideo.current.srcObject = stream;
  };

  const stopStreaming = () => {
    refVideo.current.srcObject = null;
  };

  return (
    <>
      <button onClick={startStreaming}>Mulai Streaming</button>
      <button onClick={stopStreaming}>Stop Streaming</button>
      <video ref={refVideo} autoPlay playsInline></video>
    </>
  );
}
