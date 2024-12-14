const fillMissingPlayers = (usernames, requiredPlayers) => {
    const filledPlayers = [...usernames];
    while (filledPlayers.length < requiredPlayers) {
        filledPlayers.push(`Random ${filledPlayers.length + 1}`);
    }
    return filledPlayers;
};

export default fillMissingPlayers;