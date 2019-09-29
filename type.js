/*
	类型判断：
	基本是四种方法：
	1.typeof (可以返回undefined, boolean, number, string, object, function), null和Object都返回‘object’
	2.constructor
	3.instanceof
	4.Object.prototype.toString
	对于数组类型，还有 Array.isArray 可以用于判断~
*/

var class2type = {};
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
    // 一箭双雕
    //在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]
    if (obj == null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

// 有了 type 函数后，我们可以对常用的判断直接封装，比如 isFunction:
function isFunction(obj) {
    return type(obj) === "function";
}

//jQuery 判断数组类型，旧版本是通过判断 Array.isArray 方法是否存在，如果存在就使用该方法，不存在就使用 type 函数。
var isArray = Array.isArray || function( obj ) {
    return type(obj) === "array";
}

class2type = {};
'Boolean String Number Function Array Date RegExp Object Error'.split(' ').map(function(item, index, array){
	class2type['[Object ' + item + ']'] = item.toLowerCase();
})

function type(obj) {
	if(obj == null){
		return obj + '';
	}

	return typeof obj === 'object' || typeof obj === 'function' ?
			class2type[Object.prototype.toString.call(obj)] ||  'obj': typeof obj;
}