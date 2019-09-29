Function.prototype.bind = Function.prototype.bind || function(context){
	if(! this typeof Function){
		throw new Error('....');
	}
	var self = this;
	var args = Array.prototype.slice.call(arguments, 1);

	var f = function(){};

	var fBind = function(){
		var bindArgus = Array.prototype.slice.call(arguments);
		return self.apply(this instanceof f? this: context, args.concat(bindArgus));
	}

	f.prototype = this.prototype;
	fBind.prototype = new f();
	return fBind;
}

//es5
Function.prototype.call = Function.prototype.call || function(context){
	context = context || window;
	context.fun = this;

	var args = [];
	for(var i = 1; i < arguments.length; i++){
		args.push('arguments[' + i + ']');
	}
	var result = eval('context.fun(' + args + ')');

	delete context.fun;
	return result;
}
//es6
Function.prototype.call = Function.prototype.call || function(context){
	context = context || window;
	context.fun = this;

	var args = Array.prototype.slice.call(arguments, 1);
	var result = context.fun(...args);

	delete context.fun;
	return result;
}


//es5
Function.prototype.apply = Function.prototype.apply || function(context, arr){
	context = context || window;
	context.fun = this;

	var result;
	if(!arr){
		result = context.fun();
	} else {
		args = []
		for(var i = 0; i < arr.length; i++){
			args.push('arguments[' + i + ']');
		}
		result = eval('context.fun(' + args + ')');
	}
	delete context.fun;
	return result;
}

//es6
Function.prototype.apply = Function.prototype.apply || function(context, arr){
	context = context || window;
	context.fun = this;
	var result = context.fun(...arr);
	delete context.fun;
	return result;
}

function newObject() {
	var obj = new object();
	Constructor = Array.prototype.shift.call(arguments);
	obj.__proto__ = Constructor.prototype;
	var ret = Constructor.apply(obj,arguments); 
	return ret instanceof Object ? ret : obj;  
}

function objectCreate(o) {
	function f(){};
	f.prototype = o;
	return new f();
}