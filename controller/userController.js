const User = require('../models/user');

module.exports.signup_get = (req, res) => {
    res.json({message: "New user signup process"})
}

module.exports.signup_post = async (req, res) => {
    const { displayName, email, password} = req.body
    
    try {
        const user = await User.create({ displayName, email, password })
        user.save();
        res.json(user);
    }
    catch(err) {
        console.log(err);
        res.json({error: "Signup failed"})
    }
}

module.exports.login_get = (req, res) => {
    res.json({message: "user log in successfully"})
}

module.exports.login_post = (req, res) => {
    res.json({message: "user log in successfully"})
}

module.exports.question_get = (req, res) => {
    res.json({message: "Post question"})
}

module.exports.question_post = (req, res) => {
    res.json({message: "Post question to db"})
}
