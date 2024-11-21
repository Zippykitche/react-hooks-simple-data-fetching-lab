// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [showImage, setShowImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
            setShowImage(data.message);
            setIsLoaded(true);
        });
    }, []);

    return (
        <div>
          {!isLoaded ? (
            <p>Loading...</p>
          ) : (
            <img src={showImage} alt="A Random Dog" />
          )}
        </div>
      );
}

export default App;