/*
	防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，
	那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!
*/

function debounce(func, await, immediate) {
	var timeout;

	var debounced = function() {
		var context = this;
		var args = arguments;

		if(timeout) clearTimeout(timeout);
		if(immediate){
			var runNow = !timeout;
			timeout = setTimeout(function(){
				timeout = null;
			}, await);
			if(runNow) func.apply(context,args);
		} else {
			timeout = setTimeout(function(){
				func.apply(context,args)
			},await);	
		}

	}

	debounced.cancel = function(){
		clearTimeout(timeout);
		timeout = undefined;
	}

	return debounced;
}
