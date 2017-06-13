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
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var inface = require("inface");
var letgo = require("letgo");
var mrkd = require("mrkd");
var passd = require("passd");
var protype = require("protype");
var shft = require("shft");
var snapd = require("snapd");
var truly = require("truly");



//: @client:
var ENTANGLE_DELAY_LIMIT = window.ENTANGLE_DELAY_LIMIT || 1000 * 10;
//: @end-client

var CALLED_ONCE = (0, _symbol2.default)("called-once");

var ntangle = function ntangle(instance, callback, parameter) {
	/*;
                                                               	@meta-configuration:
                                                               		{
                                                               			"instance:required": "object",
                                                               			"callback:required": "function",
                                                               			"parameter": "..."
                                                               		}
                                                               	@end-meta-configuration
                                                               */

	if (falzy(instance) || !protype(instance, OBJECT)) {
		throw new Error("invalid instance");
	}

	if (truly(callback) && (
	!protype(callback, FUNCTION) ||
	!mrkd(CALLED_ONCE, callback, true)))
	{
		throw new Error("invalid callback");
	}

	if (truly(callback)) {
		parameter = shft(arguments, 2);

		var later = snapd.bind(instance)(function later(parameter) {
			try {
				return callback.apply(this, parameter);

			} finally {
				callback = undefined;
			}
		}, ENTANGLE_DELAY_LIMIT, parameter);

		/*;
                                       	This add passed method to callback.
                                       */
		passd.bind(instance)(callback, function stop() {
			try {
				later.stop();

			} finally {
				later = undefined;
			}
		}, parameter);

		return inface(instance, letgo.bind(instance)(later));

	} else {
		return inface(instance, letgo.bind(instance)());
	}
};

module.exports = ntangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50YW5nbGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJpbmZhY2UiLCJsZXRnbyIsIm1ya2QiLCJwYXNzZCIsInByb3R5cGUiLCJzaGZ0Iiwic25hcGQiLCJ0cnVseSIsIkVOVEFOR0xFX0RFTEFZX0xJTUlUIiwid2luZG93IiwiQ0FMTEVEX09OQ0UiLCJudGFuZ2xlIiwiaW5zdGFuY2UiLCJjYWxsYmFjayIsInBhcmFtZXRlciIsIk9CSkVDVCIsIkVycm9yIiwiRlVOQ1RJT04iLCJhcmd1bWVudHMiLCJsYXRlciIsImJpbmQiLCJhcHBseSIsInVuZGVmaW5lZCIsInN0b3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxVQUFVTCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVEsUUFBUVIsUUFBUyxPQUFULENBQWQ7Ozs7QUFJQTtBQUNBLElBQU1TLHVCQUF1QkMsT0FBT0Qsb0JBQVAsSUFBK0IsT0FBTyxFQUFuRTtBQUNBOztBQUVBLElBQU1FLGNBQWMsc0JBQVEsYUFBUixDQUFwQjs7QUFFQSxJQUFNQyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLFFBQWxCLEVBQTRCQyxRQUE1QixFQUFzQ0MsU0FBdEMsRUFBaUQ7QUFDaEU7Ozs7Ozs7Ozs7QUFVQSxLQUFJaEIsTUFBT2MsUUFBUCxLQUFxQixDQUFDUixRQUFTUSxRQUFULEVBQW1CRyxNQUFuQixDQUExQixFQUF1RDtBQUN0RCxRQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVQsTUFBT00sUUFBUDtBQUNELEVBQUNULFFBQVNTLFFBQVQsRUFBbUJJLFFBQW5CLENBQUQ7QUFDRixFQUFDZixLQUFNUSxXQUFOLEVBQW1CRyxRQUFuQixFQUE2QixJQUE3QixDQUZFLENBQUo7QUFHQTtBQUNDLFFBQU0sSUFBSUcsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJVCxNQUFPTSxRQUFQLENBQUosRUFBdUI7QUFDdEJDLGNBQVlULEtBQU1hLFNBQU4sRUFBaUIsQ0FBakIsQ0FBWjs7QUFFQSxNQUFJQyxRQUFRYixNQUFNYyxJQUFOLENBQVlSLFFBQVosRUFBd0IsU0FBU08sS0FBVCxDQUFnQkwsU0FBaEIsRUFBMkI7QUFDOUQsT0FBRztBQUNGLFdBQU9ELFNBQVNRLEtBQVQsQ0FBZ0IsSUFBaEIsRUFBc0JQLFNBQXRCLENBQVA7O0FBRUEsSUFIRCxTQUdRO0FBQ1BELGVBQVdTLFNBQVg7QUFDQTtBQUNELEdBUFcsRUFPVGQsb0JBUFMsRUFPYU0sU0FQYixDQUFaOztBQVNBOzs7QUFHQVgsUUFBTWlCLElBQU4sQ0FBWVIsUUFBWixFQUF3QkMsUUFBeEIsRUFBa0MsU0FBU1UsSUFBVCxHQUFnQjtBQUNqRCxPQUFHO0FBQ0ZKLFVBQU1JLElBQU47O0FBRUEsSUFIRCxTQUdRO0FBQ1BKLFlBQVFHLFNBQVI7QUFDQTtBQUNELEdBUEQsRUFPR1IsU0FQSDs7QUFTQSxTQUFPZCxPQUFRWSxRQUFSLEVBQWtCWCxNQUFNbUIsSUFBTixDQUFZUixRQUFaLEVBQXdCTyxLQUF4QixDQUFsQixDQUFQOztBQUVBLEVBMUJELE1BMEJLO0FBQ0osU0FBT25CLE9BQVFZLFFBQVIsRUFBa0JYLE1BQU1tQixJQUFOLENBQVlSLFFBQVosR0FBbEIsQ0FBUDtBQUNBO0FBQ0QsQ0FuREQ7O0FBcURBWSxPQUFPQyxPQUFQLEdBQWlCZCxPQUFqQiIsImZpbGUiOiJudGFuZ2xlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm50YW5nbGVcIixcblx0XHRcdFwicGF0aFwiOiBcIm50YW5nbGUvbnRhbmdsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibnRhbmdsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJudGFuZ2xlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udGFuZ2xlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibnRhbmdsZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1lcmdlIGluc3RhbmNlIHdpdGggY2F0Y2hlciBiYXNlZCBmbG93LlxuXG5cdFx0RGVmYXVsdCBlbnRhbmdsZSBkZWxheSBsaW1pdCBvZiAxMCBzZWNvbmRzIGFuZCBjYW4gYmUgb3ZlcnJpZGVuIGJ5IGV4cG9zaW5nXG5cdFx0XHRgRU5UQU5HTEVfREVMQVlfTElNSVRgIGdsb2JhbCBlbnZpcm9ubWVudCB2YXJpYWJsZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJpbmZhY2VcIjogXCJpbmZhY2VcIixcblx0XHRcdFwibGV0Z29cIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxuXHRcdFx0XCJwYXNzZFwiOiBcInBhc3NkXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInNuYXBkXCI6IFwic25hcGRcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBpbmZhY2UgPSByZXF1aXJlKCBcImluZmFjZVwiICk7XG5jb25zdCBsZXRnbyA9IHJlcXVpcmUoIFwibGV0Z29cIiApO1xuY29uc3QgbXJrZCA9IHJlcXVpcmUoIFwibXJrZFwiICk7XG5jb25zdCBwYXNzZCA9IHJlcXVpcmUoIFwicGFzc2RcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHNuYXBkID0gcmVxdWlyZSggXCJzbmFwZFwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBFTlRBTkdMRV9ERUxBWV9MSU1JVCA9IHdpbmRvdy5FTlRBTkdMRV9ERUxBWV9MSU1JVCB8fCAxMDAwICogMTA7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgQ0FMTEVEX09OQ0UgPSBTeW1ib2woIFwiY2FsbGVkLW9uY2VcIiApO1xuXG5jb25zdCBudGFuZ2xlID0gZnVuY3Rpb24gbnRhbmdsZSggaW5zdGFuY2UsIGNhbGxiYWNrLCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBpbnN0YW5jZSApIHx8ICFwcm90eXBlKCBpbnN0YW5jZSwgT0JKRUNUICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBpbnN0YW5jZVwiICk7XG5cdH1cblxuXHRpZiggdHJ1bHkoIGNhbGxiYWNrICkgJiZcblx0XHQoICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSB8fFxuXHRcdCFtcmtkKCBDQUxMRURfT05DRSwgY2FsbGJhY2ssIHRydWUgKSApIClcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0fVxuXG5cdGlmKCB0cnVseSggY2FsbGJhY2sgKSApe1xuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMiApO1xuXG5cdFx0bGV0IGxhdGVyID0gc25hcGQuYmluZCggaW5zdGFuY2UgKSggZnVuY3Rpb24gbGF0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2suYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXG5cdFx0XHR9ZmluYWxseXtcblx0XHRcdFx0Y2FsbGJhY2sgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fSwgRU5UQU5HTEVfREVMQVlfTElNSVQsIHBhcmFtZXRlciApO1xuXG5cdFx0Lyo7XG5cdFx0XHRUaGlzIGFkZCBwYXNzZWQgbWV0aG9kIHRvIGNhbGxiYWNrLlxuXHRcdCovXG5cdFx0cGFzc2QuYmluZCggaW5zdGFuY2UgKSggY2FsbGJhY2ssIGZ1bmN0aW9uIHN0b3AoICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGxhdGVyLnN0b3AoICk7XG5cblx0XHRcdH1maW5hbGx5e1xuXHRcdFx0XHRsYXRlciA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9LCBwYXJhbWV0ZXIgKTtcblxuXHRcdHJldHVybiBpbmZhY2UoIGluc3RhbmNlLCBsZXRnby5iaW5kKCBpbnN0YW5jZSApKCBsYXRlciApIClcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gaW5mYWNlKCBpbnN0YW5jZSwgbGV0Z28uYmluZCggaW5zdGFuY2UgKSggKSApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG50YW5nbGU7XG4iXX0=
//# sourceMappingURL=ntangle.support.js.map
