"use strict";
var o = {
    name: "vasya",
    age: 19,
    married: false,
    address: {
        city: 'Dnipro'
    }
};
exports.map = {};
function test(user) {
    if (user !== null) {
        let g = user;
    }
    exports.map[user.name] = user;
    console.log(g);
}
exports.test = test;
