const moment = require('moment');

function foo() {
	console.log(moment().add(5, 'minutes'));
}

foo();
