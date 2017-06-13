
const assert = require( "assert" );
const ntangle = require( "./ntangle.js" );

let callback = function callback( ){
	assert.deepEqual( Array.from( arguments ), [ 1, 2, 3 ], "should be deeply equal" );

	console.log( "ok" );
};

const CALLED_ONCE = Symbol( "called-once" );

callback[ CALLED_ONCE ] = CALLED_ONCE;

class Orange {
	constructor( ){
		this.color = "orange";
	}

	getColor( ){
		return this.color;
	}
}

let orange = new Orange( );

orange = ntangle( orange, callback, 1, 2, 3 );

assert.equal( orange instanceof Orange, true, "should be true" );

callback.passed( );

console.log( "ok" );
