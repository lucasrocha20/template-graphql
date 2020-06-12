import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLNonNull
} from "graphql"

import SessionType from "./SessionType"
import { sessionUser } from '../../controllers/SessionLoader';

export const sessionMutations = {
  sessionUser: {
    type: SessionType,
    resolve: 
      sessionUser,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "SessionInput",
          fields: {
            email: {
              type: GraphQLString
            },
            password: {
              type: GraphQLString
            },
          }
        })
      }
    }
  }
}