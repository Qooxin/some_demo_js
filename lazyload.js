var img = document.getElmentByTagName('img')
var num = img.length
let n = 0


function lazyload(event) {
	var seeHeight = document.documentElment.clientHeight;
	var scollTop = document.documentElment.scollTop || document.body.scollTop
	for(var i = n; i < num; i++) {
		if(img[i].scollTop < seeHeight + scollTop) {
			if(img[i].getAttribute('src') == 'default.jpg') {
				img[i].src = img[i].getAttribute('data-src')
			}
			n = i + 1
		}
	}
}

function throttle(fun, delay, time) {
	var timer, startTime = new Date()

	return function() {
		var context = this, args = this.arguments, curTime = new Date()
		clearTimeout(timer)
		if(time <= curTime - startTime) {
			fun.apply(context, args)
			startTime = curTime
		} else {
			timer = setTimeout(fun, delay)
		}
	}
}

window.addEventListener('scroll', throttle(lazyload, 500, 1000))