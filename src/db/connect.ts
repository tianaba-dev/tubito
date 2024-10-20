var data = require("./moves")

export const Moves = () => {
    return data.moves;
}

export const Move = (args: { id: string }) => {
    return data.moves.find((move: { id: string }) => move.id === args.id);
}