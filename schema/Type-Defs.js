const {gql}=require("apollo-server");

const typeDefs = gql`
type User {
   id:ID!
   name:String!
   username:String!
   age:Int!
   nationality:String!
   friends:[User]
   favouriteMovies:[Movies!]!
}

type Movies {
      id: ID!
      name: String!
      yearOfPublication: Int!
      isInTheaters: Boolean

}

type Query {
users:[User!]!
user(id:ID!):User!
movies:[Movies!]!
movie(name:String!):Movies!
}

input CreateUserInput{
   name:String!
   username:String!
   age:Int!
   nationality:String!
   
}

input UpdateuserInput{
id:ID!
newname:String!
newusername:String!
}


type Mutation {
createuser(input:CreateUserInput!):User
updateuser(input:UpdateuserInput!):User
deleteuser(id:ID!):User
}

`;

module.exports={typeDefs};