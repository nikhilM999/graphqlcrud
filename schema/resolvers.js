const {UserList, MovieList}=require("../Fakedata.js");
const _ = require("lodash");


const resolvers={

Query:{
users:()=>{
return UserList;
},

//get the data
user:(parent,args)=>{
  const id=args.id;
  const user=_.find(UserList,{id:Number(id)});
  return user;
},

movies:()=>{
    return MovieList;
},

movie:(parent,args)=>{
    const name=args.name;
    const moviename=_.find(MovieList,{name})
    return moviename;
}




},

User:{
    favouriteMovies:()=>{
        return _.filter(MovieList,(movie)=>{
            movie.yearOfPublication>2000 && movie.yearOfPublication<2020
        })
    }
},

Mutation :{ 
createuser:(parent,args)=>{
const user=args.input;
const lastid=UserList[UserList.length-1].id;
user.id=lastid+1;
User.push(user);
return user
},

updateuser:(parent,args)=>{
    const {id,newname,newusername}=args.input;
    let userUpdated;
    UserList.forEach((user)=>{
        if(user.id===Number(id)){
          user.name=newname;
          user.username=newusername;
          userUpdated=user;

        }
    })
    return userUpdated;
},

deleteuser:(parent,args)=>{
    const id=args.id;
    _.remove(UserList,(user)=>user.id===Number(id))
   return null;
}

}




};

module.exports={resolvers};