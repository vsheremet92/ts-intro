interface Options {
	name: string
	age: number
	married?: boolean
	address: Address
}

interface Address {
	city: string
}

var o: Options = {
	name: "vasya",
	age: 19,
	married: false,
	address: {
		city: 'Dnipro'
	}
};


export function test(o: {
	name: string
}) {
	console.log(o);
}