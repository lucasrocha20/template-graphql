import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql"

export default new GraphQLObjectType({
  name: "SessionType",
  fields: {
    user: {
      type: new GraphQLObjectType({
        name: "User",
        fields: {
          id: {
            type: GraphQLString
          },
          name: {
            type: GraphQLString
          },
          email: {
            type: GraphQLString
          },
        }
      }),
    }, 
    token: {
      type: GraphQLString
    }
  }
})