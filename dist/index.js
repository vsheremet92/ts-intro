"use strict";
const uuid = require("node-uuid");
const test = require("./test");
console.log(uuid.v4({}));
test.test({
    name: "vasya",
    age: 19,
    married: false,
    address: {
        city: 'Dnipro'
    }
});
