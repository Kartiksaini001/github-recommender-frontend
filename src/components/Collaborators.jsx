import React from "react";

const users = [
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
  {
    username: "Kartiksaini001",
    name: "Kartik Saini",
    language: "JavaScript",
    contributions: "23",
    value: "39.69",
    link: "https://github.com/Kartiksaini001",
  },
];

const Collaborators = () => {
  return (
    <div className="p-8">
      <div className="text-center pb-6 text-3xl font-bold text-violet-700">
        Users who might collaborate for{" "}
        <span className="bg-gradient-to-tr from-red-400 to-yellow-400 bg-clip-text text-transparent">
          dinosaur-game
        </span>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {users.map(
          ({ username, name, language, contributions, value, link }) => (
            <div className="bg-white rounded-xl p-4 border-t-4 border-rose-400 flex flex-col shadow-md">
              <div>
                <div className="font-bold text-xl pb-1">{username}</div>
              </div>
              <div className="py-3 flex flex-col gap-y-2">
                <div>
                  name: <b>{name}</b>
                </div>
                <div>
                  Language: <b>{language}</b>
                </div>
                <div>
                  Past Contributions: <b>{contributions}</b>
                </div>
                <div>
                  Similarity: <b>{value}</b>
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-rose-500 px-3 py-2 text-white"
                >
                  Visit User
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Collaborators;
