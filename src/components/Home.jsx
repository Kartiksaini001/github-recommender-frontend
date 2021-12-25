import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form1 = ({ setUsername }) => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    axios
      .get(`https://api.github.com/users/${e.target["username"].value}`)
      .then(() => {
        setUsername(e.target["username"].value);
      })
      .catch((err) => {
        setError(
          err.response.data.message + ". Enter a valid username and retry"
        );
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 bg-white p-8 rounded-xl"
    >
      <label htmlFor="username">Enter your Github username:</label>
      <input
        required
        type="text"
        name="username"
        id="username"
        placeholder="e.g. Kartiksaini001"
        className="bg-indigo-100 w-60 md:w-72 rounded-lg outline-none px-3 py-2 ring-2 ring-indigo-300 focus:ring-indigo-400 focus:bg-indigo-50 caret-indigo-500"
      />
      {error && <div className="text-sm text-red-600">{error}</div>}
      <input
        type="submit"
        value="Find Me"
        className="bg-purple-500 rounded-lg px-3 py-2 text-white mt-4 cursor-pointer hover:bg-purple-600 hover:outline hover:outline-4 hover:outline-purple-300 active:bg-purple-700"
      />
    </form>
  );
};

const Form2 = ({ username }) => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const findCollabs = (e) => {
    e.preventDefault();
    setError(null);
    axios
      .get(`https://api.github.com/repos/${username}/${e.target["repo"].value}`)
      .then(({ data }) => {
        navigate("collaborators", {
          replace: true,
          state: { data },
        });
      })
      .catch((err) => {
        setError(err.response.data.message + ". Enter a valid repo and retry");
      });
  };

  const findProjects = () => {
    navigate("repos", {
      replace: true,
      state: { data: username },
    });
  };

  return (
    <div className="flex flex-col gap-y-4 bg-white p-8 rounded-xl">
      <div className="text-center font-bold text-xl text-rose-500">
        Hello {username}
      </div>
      <form onSubmit={findCollabs} className="flex flex-col gap-y-4">
        <label htmlFor="repo">Enter your Github repo:</label>
        <input
          required
          type="text"
          name="repo"
          id="repo"
          placeholder="e.g. Dinosaur-Game"
          className="bg-indigo-100 w-60 md:w-72 rounded-lg outline-none px-3 py-2 ring-2 ring-indigo-300 focus:ring-indigo-400 focus:bg-indigo-50 caret-indigo-500"
        />
        {error && <div className="text-sm text-red-600">{error}</div>}
        <input
          type="submit"
          value="Find Collaborators"
          className="bg-purple-500 rounded-lg px-3 py-2 text-white mt-4 cursor-pointer hover:bg-purple-600 hover:outline hover:outline-4 hover:outline-purple-300 active:bg-purple-700"
        />
        <div className="text-center">Or</div>
      </form>
      <button
        onClick={findProjects}
        className="bg-purple-500 rounded-lg px-3 py-2 text-white hover:bg-purple-600 hover:outline hover:outline-4 hover:outline-purple-300 active:bg-purple-700"
      >
        Find Projects
      </button>
    </div>
  );
};

const Home = () => {
  const [username, setUsername] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 mt-8 md:mt-24 lg:mx-24">
      <div className="flex justify-center flex-col gap-y-8">
        <div className="text-4xl md:text-5xl font-bold text-purple-500 drop-shadow-lg">
          Github
          <br />
          Recommender
          <br />
          System
        </div>
        <div className="text-xl text-rose-500 drop-shadow">
          Search for projects to work on or find collaborators for your project.
        </div>
      </div>
      <div className="flex justify-center items-center">
        {username ? (
          <Form2 username={username} />
        ) : (
          <Form1 setUsername={setUsername} />
        )}
      </div>
    </div>
  );
};

export default Home;
