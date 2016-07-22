/*
* Write a function that adds all it's arguments. There can be n arguments.
* Function fn should be implemented such that fn(2, 3, 4) == fn(2)(3)(4)
*/


// function sum(x) {
// 	var aux = function(y) {
// 		return sum(x + y);
// 	};

// 	aux.valueOf = aux.toString = function() {
// 		return x;
// 	};

// 	return aux;
// } 

// var total = sum(1)(2)(3)(10)(5)(7); //6

// console.log('total: ' + total);
// console.log('type: ' + typeof total);


(function() {
	'use strict';

	var myObj = {};
	myObj['a'] = 123;
	Object.defineProperty(myObj, 'b', {
		value: 'foo',
		enumerable: true,
		configurable: true,
		writable: true
	});

	for(let key in myObj) {
		console.log(myObj[key]);
	}

	// console.log( Object.getOwnPropertyDescriptor(myObj, 'a') );
	// console.log( Object.getOwnPropertyDescriptor(myObj, 'b') );

	Object.preventExtensions( myObj );
	delete myObj.b;

	// myObj.b = 'bar';
	console.log('\nAfter Deletion:');
	for(let key in myObj) {

		console.log(myObj[key]);
	}

	Object.seal( myObj ) 	// Object.preventExtensions() + configurable:false
	Object.freeze( myObj ) 	// Object.seal() + writable:false

})();