import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLNonNull
} from "graphql"

import UserType from "./UserType"
import { getUsers, saveUser, deleteUser } from "./UserLoader"

export const queries = {
  users: {
    type: GraphQLList(UserType),
    resolve: getUsers
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
  deleteUser: {
    type: UserType,
    resolve: deleteUser,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    }
  }
}