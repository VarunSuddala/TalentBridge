const bcrypt = require("bcryptjs");


function HashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(password, salt);
    return hashpassword
};

function comparePassword(password, hashpassword) {

    return bcrypt.compareSync(password, hashpassword);
}

module.exports = {
    HashPassword,
    comparePassword
};