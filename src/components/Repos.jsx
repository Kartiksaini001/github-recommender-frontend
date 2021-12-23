import React from "react";

const repos = [
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
  {
    name: "dinosaur-game",
    owner: "Kartiksaini001",
    language: "JavaScript",
    value: "10.23",
    link: "https://github.com/Kartiksaini001/Dinosaur-Game",
  },
];

const Repos = () => {
  return (
    <div className="p-8">
      <div className="text-center pb-6 text-3xl font-bold text-rose-500">
        Projects you might be interested in...
      </div>
      <div className="grid grid-cols-4 gap-6">
        {repos.map(({ name, owner, language, value, link }) => (
          <div className="bg-white rounded-xl p-4 border-t-4 border-rose-400 flex flex-col shadow-md">
            <div>
              <div className="font-bold text-xl pb-1">{name}</div>
            </div>
            <div className="py-3 flex flex-col gap-y-2">
              <div>
                Owner: <b>{owner}</b>
              </div>
              <div>
                Language: <b>{language}</b>
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
                Visit Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repos;
