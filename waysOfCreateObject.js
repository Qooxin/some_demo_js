/*
	1.工厂模式：对象无法识别，所有实例指向同一原型
*/
function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };

    return o;
}
var person1 = createPerson('kevin');


/*
	2.构造函数模式：
	pros： 实例可以识别为一个特定的类型
	cons： 每次创建实例时，每个方法都要被创建一次
*/
function Person(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    };
}
var person1 = new Person('kevin');


/*
	3.构造函数优化模式：
	pros： 解决了每个方法都要被重新创建的问题
	cons： 方法变为全局函数
*/
function Person(name) {
    this.name = name;
    this.getName = getName;
}
function getName() {
    console.log(this.name);
}
var person1 = new Person('kevin');

/*
	4.原型模式：
	pros： 方法不会重建
	cons： 1. 所有的属性和方法都共享 2. 不能初始化参数
*/
function Person(name) {

}
Person.prototype.name = 'keivn';
Person.prototype.getName = function () {
    console.log(this.name);
};
var person1 = new Person();

/*
	5.组合模式：
	pros： 该共享的共享，该私有的私有，使用最广泛的方式
	cons： 有的人就是希望全部都写在一起，即更好的封装性
*/
function Person(name) {
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    getName: function () {
        console.log(this.name);
    }
};
var person1 = new Person();

/*
	6.动态原型模式：
	注意：使用动态原型模式时，不能用对象字面量重写原型
*/
function Person(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person.prototype.getName = function () {
            console.log(this.name);
        }
    }
}
var person1 = new Person();

/*
	7.寄生构造函数模式：
	创建的实例使用 instanceof 都无法指向构造函数
*/
function Person(name) {
    var o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };
    return o;
}
var person1 = new Person('kevin');
console.log(person1 instanceof Person) // false
console.log(person1 instanceof Object)  // true

/*
	8.稳妥构造函数模式：
	所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。

	与寄生构造函数模式有两点不同：

	新创建的实例方法不引用 this
	不使用 new 操作符调用构造函数
	稳妥对象最适合在一些安全的环境中。

	稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。
*/
function person(name){
    var o = new Object();
    o.sayName = function(){
        console.log(name);
    };
    return o;
}
var person1 = person('kevin');
person1.sayName(); // kevin
person1.name = "daisy";
person1.sayName(); // kevin
console.log(person1.name); // daisy
