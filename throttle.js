/*
	节流的原理很简单：

	如果你持续触发事件，每隔一段时间，只执行一次事件。

	根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
	我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

	关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。
*/

/*
	1.基于时间戳
*/
function throttle(func, await){
	var previous = 0;

	return function(){
		var context = this;
		var args = arguments;
		var now = +new Date();//转时间戳
		if(now - previous > await){
			previous = now;
			func.apply(context,args);
		}
	}
}

/*
	2.基于计时器
*/
function throttle(func, await){
	var timeout;

	return function(){
		var context = this;
		var args = arguments;
		if(!timeout){
			timeout = setTimeout(function(){
				timeout = null;
				func.apply(context,arguments);
			},await);
		}
	}
}

/*
	所以比较两个方法：
	第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
	第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件
*/

/*
	方法三：优化
	鼠标移入能立刻执行，停止触发的时候还能再执行一次。
*/

function throttle(func, await){
	var previous = 0;
	var timer;

	return function(){
		var context = this;
		var args = arguments;
		var now = +new Date();
		var remaining = await - (now - previous);

		if(remaining <= 0) {
			// if(timer){
			// 	clearTimeout(timer);
			// 	timer = null;
			// }
			func.apply(context, args);
			previous = now;
		} else {
			timer = setTimeout(function(){
				timer = null;
				previous = +new Date();
				func.apply(context,args);
			}, remaining);
		}
	}
}

throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
}