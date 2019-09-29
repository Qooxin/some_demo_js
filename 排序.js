//冒泡排序
function bubbleSort(arr) {
	let temp 
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length - 1 - i; j++) {
			if(arr[j] > arr[j + 1]){
				temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}

//选择排序
function selectSort(arr) {
	let temp
	for(let i = 0; i < arr.length - 1; i++) {
		let minIndex = i
		for(let j = i + 1; j < arr.length; j++ ) {
			if(arr[minIndex] > arr[j]) {
				minIndex = j
			}
		}
		if(minIndex !== i) {
			temp = arr[i]
			arr[i] = arr[minIndex]
			arr[minIndex] = temp
		}
	}
	return arr
}

//插入排序
function insertSort(arr) {
	for(let i = 1; i < arr.length; i++){
		let j = i - 1
		let key = arr[i]
		while(j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j]
			j--
		}
		arr[j + 1] = key
	}
	return arr
}

//shell排序(增量的插入排序)
function shellSort(arr) {
	for(let gap = Math.floor(arr.length/2); gap > 0 ; gap = Math.floor(gap/2)) {
		for(let i = gap; i < arr.length; i++) {
			let j = i - gap
			let key = arr[i]
			while(j >= 0 && arr[j] > key) {
				arr[j + gap] = arr[j]
				j -= gap
			}
			arr[j + gap] =key
		}
	}
	return arr
}

//归并排序
function mergeSort(arr) {
	if(arr.length < 2) {
		return arr
	}
	let middle = Math.floor(arr.length/2)
	let left = arr.slice(0, middle)
	let right = arr.slice(middle)
	return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
	let result = []
	while(left.length && right.length){
		if(left[0] <= right[0]) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	while(left.length) {
		result.push(left.shift())
	}
	while(right.length) {
		result.push(right.shift())
	}
	return result
}

//快速排序
function quickSort(arr) {
	if(arr.length < 2)  return arr
	let pivotIndex = Math.floor(arr.length/2)
	let pivot = arr.splice(pivotIndex,1)[0]
	let left = []
	let right = []
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] <= pivot) left.push(arr[i])
		else right.push(arr[i])	
	}
	return quickSort(left).concat(pivot, quickSort(right))

}

//堆排序
function heapSort(arr) {
	for(let i = Math.floor(arr.length/2) - 1; i >= 0; i--) {
		jusitifyHeap(arr, i, arr.length)
	}
	for(let i = arr.length - 1; i > 0; i--) {
		swap(arr, 0, i)
		jusitifyHeap(arr, 0, i - 1)
	}
	return arr
}
function jusitifyHeap(arr, index, length) {
	for(let i = index * 2 + 1; i < length; i = i * 2 + 1 ){
		if(i + 1 < length && arr[i + 1] > arr[i]){
			i++
		}
		if(arr[i] > arr[index]) {
			swap(arr, i, index)
			index = i
		} else {
			break
		}
	}
}
function swap(arr, i, j) {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(Sort(arr))
