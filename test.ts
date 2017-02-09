interface User {
	name: string
	age: number
	married?: boolean
	address: Address
}

interface Address {
	city: string
}

interface UserGroup {
	name: string
}

var o: User = {
	name: "vasya",
	age: 19,
	married: false,
	address: {
		city: 'Dnipro'
	}
};

interface Map {
	[key: string]: User
}

export let map:Map = {}

export function test(user: User) {
	if (user) {
		var g: UserGroup = user;
	}
	map[user.name] = user;
	console.log(g);
}
