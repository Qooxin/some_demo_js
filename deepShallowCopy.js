/*
	数组的浅拷贝
	如果是数组，我们可以利用数组的一些方法比如：slice、concat 返回一个新数组的特性来实现拷贝。
*/
var arr = ['old', 1, true, null, undefined];

var new_arr = arr.concat();// var new_arr = arr.slice();

new_arr[0] = 'new';

console.log(arr) // ["old", 1, true, null, undefined]
console.log(new_arr) // ["new", 1, true, null, undefined]


/*
	那如何深拷贝一个数组呢？这里介绍一个技巧，不仅适用于数组还适用于对象！那就是：

	但是不能拷贝函数
*/
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
var new_arr = JSON.parse( JSON.stringify(arr) );


/*
	对象或数组的浅拷贝实现：
	如何在遍历一个对象的所有属性时忽略掉继承属性，注意这里 for...in  循环只会遍历可枚举属性，所以不应该基于这个循环中没有不可枚举的属性而得出 hasOwnProperty 是严格限制于可枚举项目的
	for...in 遍历的可枚举属性包括继承属性
	所以后面跟着obj.hasOwnProperty判断是不是自身属性
*/
var shallowCopy = function(obj) {
	if(typeof obj !== 'object') return;

	var newObj = obj instanceof Array? [] : {};

	for(var key in obj) {
		if(obj.hasOwnProperty(key)){
			newObj[key] = obj[key];
		}
	}

	return newObj;
}


/*
	对象或数组的深拷贝实现：
*/

var deepCopy = function(obj) {
	if(typeof obj !== 'object') return;
	var newObj = obj instanceof Array ? [] : {};
	for(key in obj){
		if(obj.hasOwnProperty(key)) {
			newObj[key] = typeof newObj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
		}
	}
	return newObj;
}
