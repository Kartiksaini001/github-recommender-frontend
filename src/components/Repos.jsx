import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Repos = () => {
  const location = useLocation();
  const username = location.state.data;
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    axios
      .get(`https://collab-hub-grs.herokuapp.com/users/${username}`)
      .then((res) => {
        console.log(res.data);
        setRepos(res.data.repos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="p-8">
      {loading ? (
        <>
          <div className="w-10 h-10 border-t-4 rounded-full border-rose-500 animate-spin"></div>
        </>
      ) : (
        <>
          <div className="text-center pb-6 text-3xl font-bold text-rose-500">
            Projects you might be interested in...
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
            {repos?.map((repo, key) => (
              <div
                key={key}
                className="bg-white rounded-xl p-4 border-t-4 border-rose-400 flex flex-col shadow-md"
              >
                <div>
                  <div className="font-bold text-xl pb-1">{repo[0]}</div>
                </div>
                <div className="py-3 flex flex-col gap-y-2">
                  <div>
                    Owner: <b>{repo[1]}</b>
                  </div>
                </div>
                <div className="flex flex-row-reverse mt-auto">
                  <a
                    href={`https://github.com/${repo[1]}/${repo[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-rose-500 px-3 py-2 text-white hover:bg-rose-600 hover:outline hover:outline-4 hover:outline-rose-300 active:bg-rose-700"
                  >
                    Visit Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Repos;
