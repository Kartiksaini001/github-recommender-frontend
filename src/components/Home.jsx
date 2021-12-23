import React from "react";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 gap-x-8 p-8 h-96 mt-24 mx-24">
      <div className="flex items-center">
        <div className="text-6xl font-bold text-purple-500">
          Github
          <br />
          Recommender
          <br />
          System
        </div>
      </div>
      <div className="flex justify-center items-center">
        <form
          action="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 bg-white p-8 rounded-xl"
        >
          <label htmlFor="username">Enter your Github username:</label>
          <input
            required
            type="text"
            name="username"
            id="username"
            className="bg-indigo-100 w-72 rounded-lg outline-none px-3 py-2 ring-2 ring-indigo-300 focus:ring-indigo-400 focus:bg-indigo-50 caret-indigo-500"
          />
          <input
            type="submit"
            value="Find Me"
            className="bg-purple-500 rounded-lg px-3 py-2 text-white mt-4 hover:bg-purple-600 hover:outline hover:outline-4 hover:outline-purple-300 active:bg-purple-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
