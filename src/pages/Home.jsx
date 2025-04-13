import React, { useState, useEffect } from "react";

function Home() {
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    const name = window.prompt("Please enter your name:");
    if (name && name.trim() !== "") {
      setUsername(name);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171c48] text-[#24feee] p-4">
      <h1 className="text-4xl font-bold mb-4">Hello, {username}!</h1>
      <p className="text-lg text-center">
        Welcome to our website
      </p>
    </div>
  );
}

export default Home;
