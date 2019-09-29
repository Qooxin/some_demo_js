//version 1
function unique(array){
	var res = [];
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < res.length; j++) {
			if(array[i] === res[j]) break;
		}
		if(j === res.length) res.push(array[i]);
	}
	return res;
}
var array = [1, 1, '1', '1'];
console.log(unique(array)); 

//version 2 with indexOf
function unique(array){
	var res = [];
	for(var i = 0; i < array.length; i++){
		var curr = array[i];
		if(res.indexOf(curr) == -1) {
			res.push(curr);
		}
	}
	return res;
}

//version 3 with sorting
var array = [1, 1, '1'];
function unqiue(array){
	var res = [];
	var sorttedArray = array.concat().sort();
	for(var i = 0; i < sorttedArray.length; i++){
		if(!i || sorttedArray[i] !== sorttedArray[i-1]){
			res.push(sorttedArray[i]);
		}
	}
	return res;
}
console.log(unique(array));

//version 4 unique API
function unique(array, isSorted){
	var res = [];
	if(isSorted){
		for(var i = 0; i < arr.length; i++) {
			if(!i || sorttedArray[i] !== sorttedArray[i-1]){
				res.push(sorttedArray[i]);
			}
		}
	} else {
		for(var i = 0; i < array.length; i++){
			var curr = array[i];
			if(res.indexOf(curr) != -1) {
				res.push(curr);
			}
		}
	}
	return res;
}

//version 5 with filter
function unqiue(array){
	var res = array.filter(function(item,index,array){
		return array.indexOf(item) === index;
	});
	return res;
}

//version 6 with filter and sorting
function unqiue(array){
	var res = array.concat.sort().filter(function(item, index,array){
		return index === 0 || item != array[index-1];
	});
	return res;
}

//version 7 with object.[item] = true
function unqiue(array){
	var res = array.filter(function(item, index, array){
		var obj = {};
		retrun obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item + item] = true;
	})
	return res;
}

function unqiue(array){
	var res = array.filter(function(item, index, array){
		var obj = {};
		retrun obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true;
	})
	return res;
}

// version 8 with es6
function unqiue(array){
	return [... new Set(array)];
}

//indexOf 底层还是使用 === 进行判断
var str1 = '1';
var str2 = new String('1');

console.log(str1 == str2); // true
console.log(str1 === str2); // false

console.log(null == null); // true
console.log(null === null); // true

console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(/a/ == /a/); // false
console.log(/a/ === /a/); // false

console.log({} == {}); // false
console.log({} === {}); // false