import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// import Photo from '../Components/Photos';

const baseUrl = 'https://jsonplaceholder.typicode.com/photos';

export default function GetPhotos() {
  const [photos, setPhotos] = useState([]);

  //   useEffect(() => {
  //     getPhotos();
  //   }, []);

  const getPhotos = () => {
    axios({
      method: 'GET',
      url: `${baseUrl}`,
    }).then((result) => {
      setPhotos(result.data);
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => getPhotos()}>Lihat Foto</button>
      </div>
      <div>
        {photos.map((photo, i) => {
          return (
            <div key={i}>
              {/* <Photo title={photo.title} />
              <Photo thumbnailUrl={photo.thumbnailUrl} /> */}
              {photo.url}
            </div>
          );
        })}
      </div>
    </div>
  );
}
