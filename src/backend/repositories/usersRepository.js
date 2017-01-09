const fs = require('fs-extra');

const usersRepository = {
    getById (id) {
        const users = fs.readJsonSync('./data/users.json', 'utf8');

        const user = users.find((user) => {
            return user.id === id;
        });

        return user;
    },

    getByUsernameAndPassword (username, password) {
        const users = fs.readJsonSync('./data/users.json', 'utf8');

        const user = users.find((user) => {
            return user.username === username && user.password === password;
        });

        return user;
    }
};

module.exports = usersRepository;
