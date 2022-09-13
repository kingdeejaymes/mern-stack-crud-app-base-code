// REF: https://www.bezkoder.com/node-js-mongodb-auth-jwt/

require('dotenv').config();
const User = require("../models/user.model.js");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signup = (req, res) => {

    console.log('req.body ===> ', req.body);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        else {
            let token = jwt.sign({ username: user.username }, process.env.SECRET, {
                expiresIn: 86400 // 24 hours
            });
            var sessionData = {};
            sessionData.id = user._id,
            sessionData.email = user.email,
            sessionData.username = user.username;
            sessionData.token = token;
            //sessionData.tokenExpiration = moment(new Date()).add(5, 'days').format('x'); // timestamp of plus 5 days before expiration
            res.status(200).send(sessionData);
        }
    });
};

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
        //.populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    token: null,
                    message: "Invalid Password!"
                });
            }
            let token = jwt.sign({ username: user.username }, process.env.SECRET, {
                expiresIn: 86400 // 24 hours
            });

            // var authorities = [];
            // for (let i = 0; i < user.roles.length; i++) {
            //     authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            // }

            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                //roles: authorities,
                token: token
            });
        });
};