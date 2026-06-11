const bcrypt = require("bcryptjs");
const User = require("../models/User");

function HashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(password, salt);
    return hashpassword
};

function comparePassword(password, hashpassword) {

    return bcrypt.compareSync(password, hashpassword);
}

async function register(userDetails) {
    userDetails.password = await HashPassword(userDetails.password);
    try {
        await User.create(userDetails);
        console.log("user registered successfully");
        return { status: true, msg: "user registered successfully" };
    }
    catch (err) {
        console.log("error in registration", err.message);
        return { status: false, msg: err.message };
    }
};

async function login(email, password) {
    const u = await User.findOne({ email });
    if (!u) {
        return { status: false, msg: "email Not Found" }
    };

    const ok = comparePassword(password, u.password);

    if (!ok) {
        return { status: false, msg: "Incorrect Password" }
    };

    return { status: true, user: u, msg: "loging sucessfully" }

};
module.exports = {
    HashPassword,
    comparePassword,
    register,
    login
};