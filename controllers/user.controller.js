const User = require('../models/user.model');

exports.test = (req, res) => {
    res.json("Greetings from the Controller");
};

exports.userCreate = (req, res) => {
    let user = new User({
        username: req.body.username,
        age: req.body.age,
        mobileNumber: req.body.mobileNumber
    });
    user.save((err) => {
        if (err) {
            return res.send(400, err);
            // console.log("Error");
        }
        res.send("User Created Successfully");

    })
};

exports.userDetails = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.send(403);
        }
        res.send(user);
    })
};

exports.userUpdate = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
        if (err) {
            return res.send(403);
        }
        res.send("User Updated");
    })
};

exports.userDelete = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.send(403);
        }
        res.send("User Deleted Successfully");
    })
};