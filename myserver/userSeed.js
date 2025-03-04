const User = require('./models/User.js');
const bcrypt = require('bcrypt');
const connectToDatabase = require( './db/db.js');

const userRegister = async ()=>{
    connectToDatabase();
    try{
        const hashedPassword = await bcrypt.hash("admin",10)
        const newUser = new User({
            name:"Admin",
            password:hashedPassword,
            email: "admin@gmail.com" ,
            role:"admin"
        })
        await newUser.save()
    }catch(error){
        console.log(error);
    }
}
userRegister();