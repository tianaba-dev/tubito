import { buildSchema } from "graphql";

export const movesGQLSchema = buildSchema(`
       type Move {
        id: ID!
        displayName: String!
        level: Int!
        demo: String
    }

    type Query {
        moves: movesListResponse!
        move(id: String!): Move!
    }

    type movesListResponse {
        total: Int!
        moves: [Move!]!
    }
`)