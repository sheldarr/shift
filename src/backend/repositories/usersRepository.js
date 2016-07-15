const fs = require('fs');
const winston = require('winston');

const usersRepository = {
    getById (id) {
        const data = fs.readFileSync('./var/data/users.json', 'utf8');

        const users = JSON.parse(data);

        const user = users.find((user) => {
            return user.id === id;
        });

        return user;
    },

    getByUsernameAndPassword (username, password) {
        const data = fs.readFileSync('./var/data/users.json', 'utf8');

        const users = JSON.parse(data);

        const user = users.find((user) => {
            return user.username === username && user.password === password;
        });

        return user;
    }
};

module.exports = usersRepository;
