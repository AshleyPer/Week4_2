var fs = require('fs');

module.exports = function(request, res){
    var u = request.body.username;
    let userobj = {
        "username" : request.body.username,
        "birthdate" : request.body.userbirthdate,
        "age" : request.body.userage,
        "email" : request.body.email,
        "password" : request.body.password,
        "valid" : true
    }
    let uArray = [];
    fs.readFile('../server/data/users.json', 'utf8', function(err, data){
        if(err) throw err; 
        uArray = JSON.parse(data);
        let i = uArray.user.findIndex(user =>((user.username.toLowerCase() == u.toLowerCase())));
        if(i !== -1){
            res.send({"ok" : false});
        }else{
            uArray.user.push(userobj);
            //console.log(userobj);
            uArrayjson = JSON.stringify(uArray);    
            fs.writeFile('../server/data/users.json', uArrayjson, 'utf-8', function(err){
                if(err) throw err;
                res.send({
                    "ok" : true, 
                    "username": userobj.username, 
                    "birthdate": userobj.birthdate,
                    "age": userobj.age,
                    "email": userobj.email,
                    "valid": userobj.valid
                });
            })
        }
    })
}
