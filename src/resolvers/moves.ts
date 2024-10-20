import { Moves, Move} from "../db/connect";

export const MovesResolver = {
    Query: {
        moves: async () => {
            try {
                const moves = Moves();
                return {
                    total: moves.length,
                    moves: moves 
                }
            } catch (error) {
                throw error;
            }
        },
        move: (args: { id: string }) => {
            return Move(args);
        }
    }
}