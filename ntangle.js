"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "ntangle",
			"path": "ntangle/ntangle.js",
			"file": "ntangle.js",
			"module": "ntangle",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ntangle.git",
			"test": "ntangle-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Merge instance with catcher based flow.

		Default entangle delay limit of 10 seconds and can be overriden by exposing
			`ENTANGLE_DELAY_LIMIT` global environment variable.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"inface": "inface",
			"letgo": "letgo",
			"mrkd": "mrkd",
			"passd": "passd",
			"protype": "protype",
			"shft": "shft",
			"snapd": "snapd",
			"truly": "truly"
		}
	@end-include
*/

const falzy = require( "falzy" );
const inface = require( "inface" );
const letgo = require( "letgo" );
const mrkd = require( "mrkd" );
const passd = require( "passd" );
const protype = require( "protype" );
const shft = require( "shft" );
const snapd = require( "snapd" );
const truly = require( "truly" );

//: @server:
const ENTANGLE_DELAY_LIMIT = process.env.ENTANGLE_DELAY_LIMIT || 1000 * 10;
//: @end-server



const CALLED_ONCE = Symbol( "called-once" );

const ntangle = function ntangle( instance, callback, parameter ){
	/*;
		@meta-configuration:
			{
				"instance:required": "object",
				"callback:required": "function",
				"parameter": "..."
			}
		@end-meta-configuration
	*/

	if( falzy( instance ) || !protype( instance, OBJECT ) ){
		throw new Error( "invalid instance" );
	}

	if( truly( callback ) &&
		( !protype( callback, FUNCTION ) ||
		!mrkd( CALLED_ONCE, callback, true ) ) )
	{
		throw new Error( "invalid callback" );
	}

	if( truly( callback ) ){
		parameter = shft( arguments, 2 );

		let later = snapd.bind( instance )( function later( parameter ){
			try{
				return callback.apply( this, parameter );

			}finally{
				callback = undefined;
			}
		}, ENTANGLE_DELAY_LIMIT, parameter );

		/*;
			This add passed method to callback.
		*/
		passd.bind( instance )( callback, function stop( ){
			try{
				later.stop( );

			}finally{
				later = undefined;
			}
		}, parameter );

		return inface( instance, letgo.bind( instance )( later ) )

	}else{
		return inface( instance, letgo.bind( instance )( ) );
	}
};

module.exports = ntangle;
