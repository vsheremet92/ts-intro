"use strict";
const test = require("./test");
//console.log(uuid.v4({}))
test.test({
    name: "vasya",
    age: 19,
    married: false,
    address: {
        city: 'Dnipro'
    }
});
test.test({
    name: "petya",
    age: 17,
    married: false,
    address: {
        city: 'Dnipro'
    }
});
//console.log(test.map);
