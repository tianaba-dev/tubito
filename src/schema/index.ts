import {mergeTypeDefs} from "@graphql-tools/merge"

import { movesGQLSchema } from "./moves"

export const mergedGQLSchema = mergeTypeDefs([movesGQLSchema])
