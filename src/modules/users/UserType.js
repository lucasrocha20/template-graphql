import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql"

export default new GraphQLObjectType({
  name: "UserType",
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
    password_hash: {
      type: GraphQLString
    }
  }
})