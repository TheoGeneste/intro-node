const conn = require("./database")

const login = (user) => {
    return new Promise((resolve, reject) => {
        let sql = `Select *
                   FROM credentials
                   WHERE login = '${user.login}' AND password = '${user.password}'`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    login,
}