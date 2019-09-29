//version 1 shallow copy
function extend() {
	var target = arguments[0];
	for(var i = 1; i < arguments.length; i++){
		if(arguments[i] !== null) {
			for(name in arguments[i]) {
				if(arguments[i][name] !== undefined){
					target[name] = arguments[i][name];
				}
			}
		}
	}
	return target;
}

//version 2 deep copy
function extend() {
	var deep = false;
	var i = 1;
	var target = arguments[0] || {};
	if(typeof target === 'boolean') {
		deep = true;
		target = arguments[1] || {};
		i++;
	}
	if(typeof target !== 'object'){
		return {};
	}

	var option, source, copy;
	for(; i < arguments.length; i++) {
		option = arguments[i];
		if(option !== null ){
			for(name in option){
				source = target[name];
				copy = option[name];
				if(deep && copy && typeof copy === 'object'){
					target[name] = extend(true, source, copy)
				} else if(copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}
}