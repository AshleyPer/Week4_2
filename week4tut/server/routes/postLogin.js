var fs = require('fs');

module.exports = function(req, res){
    var u = req.body.username;
    var p = req.body.pwd;
    c = u + p;

    console.log(c);

    fs.readFile('../server/data/users.json', 'utf8', function(err, data){
        if(err) throw err;

        let userArray = JSON.parse(data);
        console.log(u, p)
        let i = userArray.user.findIndex(user => (user.username.toLowerCase() == u.toLowerCase() && (user.password == p)))
        //console.log(userArray.user)
        if(i == -1 || userArray.user[i].valid == false){
            console.log(i, userArray.user[i])
            res.send({"ok" : false});
        }else{
            console.log('test')
            //console.log("userArray=", userArray.user[i],"i=", i);
            res.send({
                "ok" : true, 
                "username": userArray.user[i].username, 
                "birthdate": userArray.user[i].birthdate,
                "age": userArray.user[i].age,
                "email": userArray.user[i].email,
                "valid": userArray.user[i].valid
            });
        }

    })
}