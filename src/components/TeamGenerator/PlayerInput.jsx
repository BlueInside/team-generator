import PropTypes from 'prop-types';

const PlayerInput = ({ playerCount }) => (
  <div className="space-y-2">
    {Array.from({ length: playerCount }).map((_, index) => (
      <input
        key={index}
        type="text"
        placeholder={`Player ${index + 1}`}
        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    ))}
  </div>
);

PlayerInput.propTypes = { playerCount: PropTypes.number };
export default PlayerInput;
