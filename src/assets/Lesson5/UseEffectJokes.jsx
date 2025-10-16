import React, { useState, useEffect } from "react";

function UseEffectJokes() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();
        setJoke(data);
        console.log("Fetched Joke:", data);
      } catch (error) {
        console.error("Error Fetching Joke:", error);
      }
    };

    fetchJoke();

    //cleanup
    return () => {
      console.log(" Joke Component unmounted. Cleanup done.");
    };
  }, []);

  return (
    <div>
      <h2>Here's a Random Joke</h2>
      {joke && (
        <>
          <p>
            <strong>{joke.setup}</strong>
          </p>
          <p>{joke.punchline}</p>
        </>
      )}
    </div>
  );
}

export default UseEffectJokes;
