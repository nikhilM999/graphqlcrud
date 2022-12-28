const {ApolloServer}=require("apollo-server");
const {typeDefs}=require("./schema/Type-Defs");
const {resolvers}=require("./schema/resolvers");



const server=new ApolloServer({typeDefs, resolvers});


server.listen().then(({url})=>{
    console.log(url);
    console.log(`server has started and url:${url}`);
})