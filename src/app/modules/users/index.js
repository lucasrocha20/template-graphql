import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLNonNull
} from "graphql"

import UserType from "./UserType"
import { getUsers, saveUser } from '../../controllers/UserLoader';

import authMiddleware from '../../middlewares/auth';

export const queries = {
  users: {
    type: GraphQLList(UserType),
    resolve: async (parent, args, context) => {
        await authMiddleware(context.token)
        return getUsers()
    }
  }
}

export const userMutations = {
  saveUser: {
    type: UserType,
    resolve: saveUser,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "UserInput",
          fields: {
            name: {
              type: GraphQLString
            },
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
  },
}