import React, { useState, useEffect } from "react";

function FinalsAct1() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10" //lilimit lang sa 10
        );
        const data = await response.json();
        setPhotos(data);
        console.log("Fetched Photos:", data);
      } catch (error) {
        console.error("Error Fetching Photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-300">
      <h2 className="text-2xl font-bold mb-20">Finals Activity 1</h2>

      <div className="grid grid-cols-5 gap-6 w-full max-w-6xl">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white flex flex-col">
            <div className="bg-gray-200 px-3">Album ID: {photo.albumId}</div>

            <div className="p-4 flex-1">
              <p className="text-sm mb-2">ID: {photo.id}</p>

              <div className="text-sm break-words">
                <p>
                  <strong>URL:</strong> {photo.url}
                </p>
                <p>
                  <strong>Thumbnail:</strong> {photo.thumbnailUrl}
                </p>
              </div>
            </div>

            <div className="bg-gray-200 px-4 py-3 border-t border-gray-200">
              <h3 className="text-md font-semibold">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinalsAct1;
