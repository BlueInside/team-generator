import shuffleArray from "./shuffleArray";

const assignRoles = (players, roles) => {
    const shuffledRoles = shuffleArray(roles); // Shuffle roles for randomness
    return players.map((player, index) => ({
        name: player,
        role: shuffledRoles[index % roles.length], // Assign roles cyclically
    }));
};


export default assignRoles;