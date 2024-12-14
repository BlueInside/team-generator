import { useState } from 'react';
import PlayerInput from './TeamGenerator/PlayerInput';

const Main = () => {
  const [teamSize, setTeamSize] = useState(1);
  const [randomRoles, setRandomRoles] = useState(false);
  const [randomChampions, setRandomChampions] = useState(false);
  const [playerUsernames, setPlayerUsernames] = useState([]);
  const [playerCount, setPlayerCount] = useState(4);

  const handlePlayerUsernameChange = (index, username) => {
    const updatedUsernames = [...playerUsernames];
    updatedUsernames[index] = username;
    setPlayerUsernames(updatedUsernames);
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        {/* Team Size */}
        <div className="flex items-center space-x-4">
          <label htmlFor="teams" className="text-lg font-medium text-gray-700">
            Number of teams:
          </label>
          <input
            id="teams"
            type="number"
            value={teamSize}
            min={1}
            max={2}
            onChange={(e) => {
              setTeamSize(Number(e.target.value));
            }}
            className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
          />
        </div>

        {/* Random Roles */}
        <div className="flex items-center space-x-4">
          <label htmlFor="roles" className="text-lg font-medium text-gray-700">
            Random Roles:
          </label>
          <select
            id="roles"
            value={randomRoles}
            onChange={(e) => setRandomRoles(e.target.value === 'true')}
            className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>

        {/* Random Champions */}
        <div className="flex items-center space-x-4">
          <label
            htmlFor="champions"
            className="text-lg font-medium text-gray-700"
          >
            Random Champions:
          </label>
          <select
            id="champions"
            value={randomChampions}
            onChange={(e) => setRandomChampions(e.target.value === 'true')}
            className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>

        {/* Player Count */}
        <div className="flex flex-col items-center space-y-2">
          <label
            htmlFor="players"
            className="text-lg font-medium text-gray-700"
          >
            Number of Players: {playerCount}
          </label>
          <input
            id="players"
            type="range"
            min={2}
            max={teamSize === 1 ? 5 : 10}
            value={playerCount}
            onChange={(e) => {
              setPlayerCount(Number(e.target.value));
            }}
            className="w-64"
          />
        </div>
      </div>

      <div className="w-full max-w-md">
        <PlayerInput
          playerUsernames={playerUsernames}
          playerCount={playerCount}
          handlePlayerUsernameChange={handlePlayerUsernameChange}
        />
      </div>
    </main>
  );
};

export default Main;
