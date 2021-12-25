import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Collaborators = () => {
  const location = useLocation();
  const {
    owner: { login: owner },
    name: repo,
  } = location.state.data;
  console.log(owner, repo);

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get(`https://collab-hub-grs.herokuapp.com/repos/${owner}/${repo}`)
      .then((res) => {
        console.log(res.data);
        const data = Object.keys(res.data.collaborators).map((key) => [
          key,
          res.data.collaborators[key],
        ]);
        setUsers(data);
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
          <div className="text-center pb-6 text-3xl font-bold text-violet-700">
            Users who might collaborate for{" "}
            <span className="bg-gradient-to-tr from-red-400 to-yellow-400 bg-clip-text text-transparent">
              {repo}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
            {users?.map((user, key) => (
              <div
                key={key}
                className="bg-white rounded-xl p-4 border-t-4 border-rose-400 flex flex-col shadow-md"
              >
                <div>
                  <div className="font-bold text-xl pb-1">{user[0]}</div>
                </div>
                <div className="py-3 flex flex-col gap-y-2">
                  <div>
                    Name: <b>{user[1][0] ? user[1][0] : "NULL"}</b>
                  </div>
                  <div>
                    Followers: <b>{user[1][1] ? user[1][1] : "NULL"}</b>
                  </div>
                  <div>
                    Bio: <b>{user[1][2] ? user[1][2] : "NULL"}</b>
                  </div>
                </div>
                <div className="flex flex-row-reverse mt-auto">
                  <a
                    href={`https://github.com/${user[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-rose-500 px-3 py-2 text-white hover:bg-rose-600 hover:outline hover:outline-4 hover:outline-rose-300 active:bg-rose-700"
                  >
                    Visit User
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

export default Collaborators;
