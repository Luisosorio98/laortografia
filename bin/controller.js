const mongoose = require("mongoose");
const User = require("./models/User");

class controller {
    constructor() {
        this.connect();
    }
    async connect() {

        try {
            await mongoose.connect(
                "mongodb+srv://luisosorio98:osorio2019@cluster0-0mtsj.mongodb.net/Ortografia?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log('conectados a la base de datos!')
        } catch (e) {
            console.error(e)
        }
    }
    getUsers(res) {
        User.find({}, (err, users) => {
            if (err) throw err;
            res.send(users);
        })
    }
    postUsers(req, res) {
        let user = req.boddy.users;
        User.create(user, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }

}

exports.controller = new controller()