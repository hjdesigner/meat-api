"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const users = [
    {
        id: '1',
        name: 'Peter Park',
        email: 'peter@marvel.com'
    },
    {
        id: '2',
        name: 'Bruce Wayne',
        email: 'bruce@dc.com'
    }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filterd = users.filter(user => user.id === id);
            let user = undefined;
            if (filterd.length > 0) {
                user = filterd[0];
            }
            resolve(user);
        });
    }
}
exports.User = User;
