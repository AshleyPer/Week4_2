import { User } from "../Users";

let user1 = new User("a1234", "20/02/1965", 54, "email@com.au", "1234", false);
let user2 = new User("userxxxxx", "20/02/1985", 38, "userxxemail@com.au", "xxxxxxxx", false);
let user3 = new User("ashley", "22/02/1996", 27, "ashley@mail.com.au", "12345", true);

let users = [user1, user2, user3];

console.log(users.length)

module.exports = {
    route: (app,path)=>{
    // app - passes in the express object needed for the route.
    // path - passes in a path object needed to find the file. The path module is part of node and needs to be required in the server.js file

        //if the user requests the root of the site
        app.get('/api/auth' , function(req, res){
            //Find the file to be used as the root of the site
            let filepath = path.resolve('');
            //send this file back to the client
            res.sendFile(filepath);
        });
    }
} 