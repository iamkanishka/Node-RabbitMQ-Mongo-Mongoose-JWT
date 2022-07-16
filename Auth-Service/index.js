const express = require('express');
const app = express();
const PORT = process.env.PORT_ONE || 7070;
const mongoose = require('mongoose');
const User = require('./user.schema')
const jwt = require("jsonwebtoken")
app.use(express.json());


//Connecting With Productservice Database 
//Note:- Please Update the mongoURL as it suits you with Local or the MongoDB Atlas URL
mongoose.connect("mongodb://localhost:27017/authservice", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the databasedatabase(AuthService)");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



/**
 * Signin Users with Providing teh JWT Token
 * @param {email} String Email of the User 
 * @param {password} String Password of the User
 */
app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user == null) {
            return res.json({ message: "User Donest Exist" });
        } else {
            if (user.password !== password) {
                return res.json({ message: "Incorrect Password" });
            }

            const payload = { email, name: req.body.name }
            jwt.sign(payload, "secret", (err, token) => {
                if (err) return console.log(err);
                else {
                    return res.send({ token: token });
                }
            })
        }

    } catch (err) {
        console.log('Error', err);
    }
});


/**
 * Creates/Registers User 
 * @param {email} String Name of the User 
 * @param {password} String Name of the User
 * @param {name} Name Name of the User
 */
app.post('/auth/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return req.json({ message: 'User Already Exist' });
        } else {
            const newUser = new User({ email, name, password });
            newUser.save()
            return res.send(newUser)
        }
    } catch (err) {
        console.log('Error', err);
    }
});


/**
 * Listens the server at Proviced Port 7070
 */
app.listen(PORT, () => {
    console.log(`Auth-Service at ${PORT}`);
})