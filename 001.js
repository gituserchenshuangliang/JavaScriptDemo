'use strict';
/**
 * Cherry
 * 2020-3-8 
 * JavaScript
 * 前端学习
 * */

/*
js基本语法
JavaScript的语法和Java语言类似，每个语句以;结束，语句块用{...}。
但是，JavaScript并不强制要求在每个语句的结尾加;，
浏览器中负责执行JavaScript代码的引擎会自动在每个语句的结尾补上;。
JavaScript严格区分大小写，如果弄错了大小写，程序将报错或者运行不正常.

Number
JavaScript不区分整数和浮点数，统一用Number表示。

字符串
字符串是以单引号'或双引号"括起来的任意文本。

布尔值
&&运算是与运算，只有所有都为true，&&运算结果才是true；
||运算是或运算，只要其中有一个为true，||运算结果就是true；
!运算是非运算，它是一个单目运算符，把true变成false，false变成true；
function ts(a){
  //如果a没有被赋值，则使用10
  var x = a || 10 ;
  console.log(x);
}
ts();
ts(3);


比较运算符
JavaScript允许对任意数据类型做比较，要特别注意相等运算符==。JavaScript在设计时，有两种比较运算符：
第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。

NaN这个特殊的Number与所有其他值都不相等，包括它自己：
NaN === NaN; // false
唯一能判断NaN的方法是通过isNaN()函数：
isNaN(NaN); // true

null和undefined
null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。
在其他语言中，也有类似JavaScript的null的表示，例如Java也用null，Swift用nil，Python用None表示。
但是，在JavaScript中，还有一个和null类似的undefined，它表示“未定义”。
JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。
事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。
undefined仅仅在判断函数参数是否传递的情况下有用。

数组
数组是一组按顺序排列的集合，集合的每个值称为元素。
JavaScript的数组可以包括任意数据类型。[1, 2, 3.14, 'Hello', null, true];
另一种创建数组的方法是通过Array()函数实现：new Array(1, 2, 3); // 创建了数组[1, 2, 3]

对象
JavaScript的对象是一组由键-值组成的无序集合，例如：
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
JavaScript对象的键都是字符串类型，值可以是任意数据类型。
要获取一个对象的属性，我们用对象变量.属性名的方式：
person.name; // 'Bob'
person.zipcode; // null

变量
变量本身类型不固定的语言称之为动态语言（JavaScript），与之对应的是静态语言（Java）。
在JavaScript中，使用等号=对变量进行赋值。
可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，
但是要注意只能用var申明一次，和静态语言相比，动态语言更灵活，就是这个原因。

strict模式
使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内，
不使用var申明的变量则是全局变量，同名变量在不同的函数体内互不冲突。
在同一个页面的不同的JavaScript文件中，如果都不用var申明，
恰好都使用了变量i，将造成变量i互相影响，产生难以调试的错误结果。
为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，
在strict模式下运行的JavaScript代码，强制通过var申明变量，
未使用var申明变量就使用的，将导致运行错误。
启用strict模式的方法是在JavaScript代码的第一行写上：
'use strict';
x = 100;//未使用var申明的变量
console.log(x);
会出现ReferenceError: x is not defined错误。
*/

/*
多行字符串
由于多行字符串用\n写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 * ... * 表示：
反引号在键盘的ESC下方，数字键1的左边
var str = `第一行
第二行
第三行`;
console.log(str);

模板字符串
要把多个字符串连接起来，可以用+号连接,ES6新增了一种模板字符串：${变量名}，使用反引号``；
'use strict';
var name = 'Cherry';
var say = `Hello , ${name} !`;
console.log(say);
 */

/*
数组
JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
要取得Array的长度，直接访问length属性,直接给Array的length赋一个新的值会导致Array大小的变化。
索引超过了范围，同样会引起Array大小的变化，多出的数组长度用undefined填充，少掉的直接减去。
Array可以通过indexOf()来搜索一个指定的元素的位置。
slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array
push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉。
使用unshift()方法，shift()方法则把Array的第一个元素删掉。
sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序。
reverse()把整个Array的元素给掉个个，也就是反转。
concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array。
join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
forEach()遍历数据
arr.forEach(function(x){
   console.log(x);
});
 */

/*
对象
JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。
JavaScript用一个{...}表示一个对象，键值对以xxx: xxx形式申明，用,隔开。
访问方法:对象.属性或对象[属性]。
检测对象是否拥有某一属性，可以用in操作符。属性 in 对象 //true or false
判断一个属性是否是对象自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法。
*/

/*
条件判断
JavaScript使用if () { ... } else { ... }来进行条件判断。
多行条件判断使用if(){ ... } else if () { ... } else { ... }.

循环
JavaScript的循环有两种，一种是for循环，通过初始条件、结束条件和递增条件来循环执行语句块;
for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来。
for (var key in obj){} ,要过滤掉对象继承的属性，用hasOwnProperty()。
for ... in对Array的循环得到的是String而不是Number。
while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。
最后一种循环是do { ... } while()循环，它和while循环的唯一区别在于，
不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件。
*/

/*
Map和Set
JavaScript的默认对象表示方式{}可以视为其他语言中的Map或Dictionary的数据结构，即一组键值对。
但是JavaScript的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。
为了解决这个问题，最新的ES6规范引入了新的数据类型Map,使用set(key,value)赋值，get(key)取值。
var m = new Map([[1,'A'],[2,'B']]);
var n = m.get(1);
console.log(n);
Set和Map类似，也是一组key的集合，但不存储value。key不能重复。

Iterable
为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。
具有iterable类型的集合可以通过新的for ... of循环来遍历。
for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。
for ... in循环将把name包括在内，但Array的length属性却不包括在内。
for ... of循环则完全修复了这些问题，它只循环集合本身的元素。
更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
*/

/*
函数
JavaScript的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。
函数就是最基本的一种代码抽象的方式。定义函数关键字function，
如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。
由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，
虽然函数内部并不需要这些参数；传入的参数比定义的少也没有问题。
JavaScript关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
利用arguments，你可以获得调用者传入的所有参数。
function foo(a, b, ...rest){}
rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，
多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
//定义函数
function circle(r){
  //输出出入的所有参数
  for (const key in arguments) {
    if (arguments.hasOwnProperty(key)) {
      const element = arguments[key];
      console.log(element);
    }
  }
  if(typeof(r) == Number){
    return Math.PI*r*r;//返回值
  } else {
    throw 'Not a number!';
  }
}
var s  = circle(12,'A',3.5);//调用
console.log(s);

变量作用域与解构赋值
JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。
如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。

变量提升
JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部.
function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}
===>变量提升
function foo() {
    var y;
    var x = 'Hello, ' + y;
    console.log(x);
    y = 'Bob';
}

全局作用域
不在任何函数内定义的变量就具有全局作用域。
JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定成window的一个属性,函数也是如此。
'use strict';
var x = 'Cherry';
console.log(window.x);//直接访问全局变量x和访问window.x;window.foo()是完全一样的。

名字空间
全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，
或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。
// 唯一的全局变量GLOBAL:
var GLOBAL = {};
// 其他变量:
GLOBAL.name = 'Cherry';
GLOBAL.version = 1.0;
// 其他函数:
GLOBAL.foo = function () {
    return 'foo';
};

局部作用域
为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量.
'use strict';
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1;
}

常量
ES6标准引入了新的关键字const来定义常量,变量大写，const与let都具有块级作用域。
'use strict';
const NAME = 'Chdrry';
NAME = 3;

解构赋值
从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值,使用[]。
var [a,b,c] = ['Chen',1,[1,2,3,4]];
console.log(c);;
如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性，使用{}.
对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的。
var person = {
  name:'Cherry',
  age:30,
  sex:'male',
  score:{
    math:10,
    chinese:20,
    english:13
  }
};
// var {name,age, sex,score} = person;
// console.log(score);
var {name,age, sex,score:{math,english}} = person;
console.log(english);

解构赋值使用场景
1.快速获取当前页面的域名和路径：
var {hostname:domain, pathname:path} = location;
2.交换两个变量x和y的值，可以这么写，不再需要临时变量：
var x=1, y=2;
[x, y] = [y, x]
*/

/*
方法
在一个对象中绑定函数，称为这个对象的方法。
光健字：this that  装饰器：apply(),call()
*/

/*
高阶函数
高阶函数英文叫Higher-order function。
JavaScript的函数其实都指向某个变量.
既然变量可以指向函数，函数的参数能接收变量，
那么一个函数就可以接收另一个函数作为参数，
这种函数就称之为高阶函数。
function add(x, y, f) {
    return f(x) + f(y);
}
//Math.abs作为函数f传入add();
var x = add(-1,19,Math.abs);
console.log(x);

MAP(单项处理)
map()方法定义在Array中，我们调用Array的map()方法，map中传入自己的函数，返回新的Array。
var arr = ['chen','cherry','phinlps'];
var fun = function (s){
    return s.length + '===' + s;
}
var newArr = arr.map(fun);
console.log(newArr);

REDUCE(两项处理)
Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，
reduce()把结果继续和序列的下一个元素做累积计算，函数作为累加器,
reduce 为数组中的每一个元素依次执行回调函数。最终计算为一个值。

array.reduce(function(total,currentValue,currentIndex,arr){},initValue);
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4);
total : 初始值或计算结果返回值；
initValue : 初始值，可省略；

var arr = [12,23,34,12,45,32];
var sum = arr.reduce(function(one,two){
      return one + two ;
});
console.log(sum);
sum = 0;
arr.forEach(function (x) {
  sum += x
});
console.log(sum);
var count = arr.reduce(function(a,b){
      return a*100 + b ;
});
console.log(count);

var a = '00001326';
var b = a - 0;
var c = typeof(b);
var d = 'ChErrY';
var e = d.substring(0,1).toUpperCase() + d.substring(1,d.length+1).toLowerCase();

var arr = ['1','2','3'];
var r;
r = arr.map(function(s){
  return parseInt(s);
});

FIELTER过滤器
filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
//剔除数组中的偶数
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。
filter(function (element, index, self) {});
var arr = ["apple","orange","apple","orange","pear","orange"];
var x = arr.filter(function (element, index, self) {
  return self.indexOf(element) === index;
});

SORT排列
sort()方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。
sort(function(x,y){})

var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr); // [1, 2, 10, 20]

Array
对于数组，除了map()、reduce、filter()、sort()这些方法可以传入一个函数外，
Array对象还提供了很多非常实用的高阶函数。
every()方法可以判断数组的所有元素是否满足测试条件。
find()方法用于查找符合条件的第一个元素，如果找到了，返回这个元素，否则，返回undefined.
forEach()方法把每个元素依次作用于传入的函数，但不会返回新的数组。
*/

/*
闭包
闭包是可以自己拥有独立的环境与变量函数。闭包是指有权访问另一个函数作用域中的变量的函数。
如果一个函数访问了此函数的父级及父级以上的作用域变量，就可以称这个函数是一个闭包。
高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。
创建一个匿名闭包自调函数并立刻执行可以这么写：
(function (x) {
    return x * x;
})(3);
闭包有非常强大的功能,在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。

箭头函数
为什么叫Arrow Function？因为它的定义用的就是一个箭头
// 无参数:
() => 3.14：
//一个参数
x => x * x;
    ||
    ||
   \--/
    \/
function (x){
  return x*x;
}
var c = (x => x * x);
var b = c(3);
箭头函数相当于匿名函数，并且简化了函数定义。
// 两个参数:
(x, y) => x * x + y * y
// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

generator（生成器）
generator和函数不同的是，generator由function*定义（注意多出的*号），
并且，除了return语句，还可以用yield返回多次。
调用generator对象有两个方法：
第一个是不断地调用generator对象的next()方法,
next()方法会执行generator的代码，然后，每次遇到yield x;
就返回一个对象{value: x, done: true/false}，然后“暂停”。
返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。
第二个方法是直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done。
function* multiResult(x) {
  yield x + 1;
  yield x + 2;
  return x + 3;
}
//第一个方法，使用next()方法
var g = multiResult(1);
var b = g.next();
var c = g.next();
var d = g.next();
//第二个方法，使用for循环
for (var v of multiResult(3)) {
  console.log(v);
}
 */

/*
标准对象
在JavaScript的世界里，一切都是对象。用typeof操作符获取对象的类型，它总是返回一个字符串。
特别注意:null的类型是object，Array的类型也是object，
如果我们用typeof将无法区分出null、Array和通常意义上的object——{}。

包装对象
在JavaScript中，字符串也区分string类型和它的包装类型。包装对象用new创建：
var n = new Number(123); // 123,生成了新的包装类型
var b = new Boolean(true); // true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型
虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为object了！
所以，包装对象和原始值用===比较会返回false：
typeof new Number(123); // 'object'
new Number(123) === 123; // false
所以闲的蛋疼也不要使用包装对象！尤其是针对string类型！！！
没用用关键字new 定义Number()、Boolean和String()，则它们会被当做普通函数，
把任何类型的数据转换为number、boolean和string类型。
任何对象都有toString()方法，null和undefined就没有！

Date
在JavaScript中，Date对象用来表示日期和时间。
//当前时间
var a = new Date();
console.log(a.toString());
//指定时间
var d = new Date(2020, 3, 9, 10, 25, 30, 123);
console.log(d.toString());
//时间戳
var d = new Date(1435146562875);

RegExp正则表达式
// 正则表达式中的特殊字符
// 字符 含意
// \ 做为转意，即通常在"\"后面的字符不按原来意义解释，如/b/匹配字符"b"，
// 当b前面加了反斜杆后/\b/，转意为匹配一个单词的边界。
// 对正则表达式功能字符的还原，如"*"匹配它前面元字符0次或多次，
// ^ 匹配一个输入或一行的开头，/^a/匹配"an A"，而不匹配"An a"
// $ 匹配一个输入或一行的结尾，/a$/匹配"An a"，而不匹配"an A"
// * 匹配前面元字符0次或多次
// + 匹配前面元字符1次或多次
// ? 匹配前面元字符0次或1次
// (x) 匹配x保存x在名为$1...$9的变量中
// x|y 匹配x或y
// {n} 精确匹配n次
// {n,} 匹配n次以上
// {n,m} 匹配n-m次
// [xyz] 字符集(character set)，匹配这个集合中的任一一个字符(或元字符)
// [^xyz] 不匹配这个集合中的任何一个字符
// [\b] 匹配一个退格符
// \b 匹配一个单词的边界
// \B 匹配一个单词的非边界
// \cX 这儿，X是一个控制符，/\cM/匹配Ctrl-M
// \d 匹配一个字数字符，/\d/ = /[0-9]/
// \D 匹配一个非字数字符，/\D/ = /[^0-9]/
// \n 匹配一个换行符
// \r 匹配一个回车符
// \s 匹配一个空白字符，包括\n,\r,\f,\t,\v等
// \S 匹配一个非空白字符，等于/[^\n\f\r\t\v]/
// \t 匹配一个制表符
// \v 匹配一个重直制表符
// \w 匹配一个可以组成单词的字符(alphanumeric，这是我的意译，含数字)，包括下划线，
// \W 匹配一个不可以组成单词的字符，如[\W]匹配"$5.98"中的$，等于[^a-zA-Z0-9]。

JSON
JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。
为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。Json数据类型：
————————————————————————————————————————————
| number：和JavaScript的number完全一致；     ...
| boolean：就是JavaScript的true或false；     ...
| string：就是JavaScript的string；           ...
| null：就是JavaScript的null；               ...
| array：就是JavaScript的Array表示方式——[]；  ...
| object：就是JavaScript的{ ... }表示方式。  ...
————————————————————————————————————————————
序列化
stringify()方法序列化对象，第一个参数传入对象，
第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性。
JSON.stringify(obj, null, '  ');
var chen = {
   name : 'chen',
   age : 29,
   sex : 'male',
   hobby : 'program'
};
var str = JSON.stringify(chen,['name','hobby']);
第二个参数还可以传入函数，对象的每个键值对都会被函数先处理：
function converts(key,value){
 if(typeof value === 'string'){
   return value.toUpperCase();
 }
 return value;
}
var str2 = JSON.stringify(chen,converts,' ');
反序列化
拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变成一个JavaScript对象。
var str3 = '{"name":"chen","hobby":"program"}';
var chen1 = JSON.parse(str3);
*/

/*
面向对象编程
JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。
JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，
所谓继承关系不过是把一个对象的原型指向另一个对象而已。
var Student = {
  name : 'chen',
  age : 30,
  run: function () {
      console.log(this.name + ' is running...');
  }
};
//chen继承Sudent
var chen = Object.create(Student);
chen.name = 'Cherry';
chen.run();

面向对象编程
JavaScript对每个创建的对象都会设置一个原型，指向它的原型对象。
Array对象：var arr = [1, 2, 3];
其原型链是：arr ----> Array.prototype ----> Object.prototype ----> null
Function对象，函数也是一个对象，它的原型链是：
function foo() {return 0;}
foo ----> Function.prototype ----> Object.prototype ----> null
Function.prototype定义了apply()等方法，因此，所有函数都可以调用apply()方法。

构造函数
除了直接用{ ... }创建一个对象外，JavaScript还可以用一种构造函数的方法来创建对象。
使用Function来创建：
function Student(name) {
    this.name = name;
    this.say = function () {
        console.log('Hello, ' + this.name + '!');
    }
}
var chen = new Student('chen');
chen.say();
不使用new则为函数调用,它返回undefined。
用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身

原型继承
    继承实际上是类型的扩展。
class继承
    新的关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。
    用class定义对象的另一个巨大的好处是继承更方便了。
    想一想我们从Student派生一个PrimaryStudent需要编写的代码量。
    现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，
    直接通过extends来实现：
class Animal{
  constructor(name,kind,age){
    this.name = name;
    this.kind = kind;
    this.age = age;
  }
  eat(){
    console.log('eat');
  }
}
class Cat extends Animal{
  constructor(name,kind,age,sex){
    super(name,kind,age);
    this.sex = sex;
  }
  climb(){
    console.log(this.name + '爬樹！');
  }
}
var cat1 = new Cat('cherry','M',2,'F');
var a = cat1.name;
cat1.climb();
*/

/*
浏览器对象
    由于JavaScript的出现就是为了能在浏览器中运行，
    所以，浏览器自然是JavaScript开发者必须要关注的。
    JavaScript可以获取浏览器提供的很多对象，并进行操作。

window
    window对象不但充当全局作用域，而且表示浏览器窗口。
    window对象有innerWidth和innerHeight属性，
    可以获取浏览器窗口的内部宽度和高度内部宽高是指除去菜单栏、
    工具栏、边框等占位元素后，用于显示网页的净宽高。

navigator
navigator对象表示浏览器的信息，最常用的属性包括：
    navigator.appName：浏览器名称；
    navigator.appVersion：浏览器版本；
    navigator.language：浏览器设置的语言；
    navigator.platform：操作系统类型；
    navigator.userAgent：浏览器设定的User-Agent字符串。
navigator的信息可以很容易地被用户修改，所以JavaScript读取的值不一定是正确的。

screen
screen对象表示屏幕的信息，常用的属性有：
    screen.width：屏幕宽度，以像素为单位；
    screen.height：屏幕高度，以像素为单位；
    screen.colorDepth：返回颜色位数，如8、16、24。

location
location对象表示当前页面的URL信息。
    例如，一个完整的URL：http://www.example.com:8080/path/index.html?a=1&b=2#TOP
    location.href;  //完整的URL
    location.protocol; // 'http'
    location.host; // 'www.example.com'
    location.port; // '8080'
    location.pathname; // '/path/index.html'
    location.search; // '?a=1&b=2'
    location.hash; // 'TOP'

document
document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，
document对象就是整个DOM树的根节点。
用document对象提供的getElementById()和getElementsByTagName()
可以按ID获得一个DOM节点和按Tag名称获得一组DOM节点：
document对象还有一个cookie属性，可以获取当前页面的Cookie。
Cookie是由服务器发送的key-value标示符。
因为HTTP协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，
就可以用Cookie来区分。当一个用户成功登录后，服务器发送一个Cookie给浏览器，
例如user=ABC123XYZ(加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个Cookie，
服务器根据Cookie即可区分出用户。
由于JavaScript能读取到页面的Cookie，而用户的登录信息通常也存在Cookie中，
这就造成了巨大的安全隐患，为了解决这个问题，服务器在设置Cookie时可以使用httpOnly，
设定了httpOnly的Cookie将不能被JavaScript读取。
为了确保安全，服务器端在设置Cookie时，应该始终坚持使用httpOnly。
*/

/*
操作DOM
一、节点创建型API
    1.1 createElement
    1.2 createTextNode
    1.3 cloneNode
    1.4 createDocumentFragment

二、页面修改形API（包括删除和添加）（删）（改）
    2.1 appendChild(追加为子元素)
    2.2 insertBefore(插入前面)
    2.3 removeChild(删除子元素)
    2.4 replaceChild(替换子元素)

三 节点查询型API(查)
    3.1 document.getElementById
    3.2 document.getElementsByTagName
    3.3 document.getElementsByName
    3.4 document.getElementsByClassName
    3.5 document.querySelector和document.querySelectorAll
    3.6 elementFromPoint()

四 元素属性型操作（属性节点的操作）
    4.1 getAttribute() (获取属性)
    4.2 createAttribute() (创建属性)
    4.3 setAttribute() (设置属性)
    4.4 romoveAttribute() (删除属性)
    4.5 element.attributes（将属性生成数组对象）

更新DOM
可以直接修改节点的文本，方法有两种：
一种是修改innerHTML属性.
    var doc = document.getElementById('js');
    doc.innerHTML = 'Hello,Cherry!';
    doc.innerHTML = '<span style="color:red;">Hello,Cherry!</span>';
    doc.innerText =  'Hello,Cherry!';
    doc.textContent = "Hi ,Chen !";
    doc.style.color = 'yellow';
    doc.style.fontWeight
第二种是修改innerText或textContent属性，两者的区别在于读取属性时，
innerText不返回隐藏元素的文本，而textContent返回所有文本。
DOM节点的style属性对应所有的CSS，可以直接获取或设置。

插入DOM
如果这个DOM节点是空的，直接使用innerHTML = '<span>child</span>'就可以修改DOM节点的内容，
如果这个DOM节点不是空的，那就不能这么做，因为innerHTML会直接替换掉原来的所有子节点。
有两个办法可以插入新的节点。
    一个是使用appendChild添加DOM到后面；
    一个是使用insertBefore添加DOM到指定位置。
    var js = document.getElementById('js');
    var js1 = document.getElementById('js1');
    var h4 = document.getElementById('h4');
    js.appendChild(js1);
    js.insertBefore(js1,h4);

删除DOM
要删除一个节点，首先要获得该节点本身以及它的父节点，
调用父节点的removeChild把自己删掉：
var dom = document.getElementById('del');
dom.parentElement.removeChild(dom);

//删除li中的arrDel出现的项目
var parent = document.getElementById('test-list')
var child = parent.children;
var arrDel = ['Swift', 'ANSI C', 'DirectX'];
for(var i = 1 ; i < child.length ; i++){
    var n = child[i];
    var t = n.innerHTML;
    var x = arrDel.includes(t);
    if(x){
      parent.removeChild(n);
    }
}

操作表单
用JavaScript操作表单和操作DOM是类似的，因为表单本身也是DOM树。
HTML表单的输入控件主要有以下几种：
    文本框，对应的<input type="text">，用于输入文本；
    口令框，对应的<input type="password">，用于输入口令；
    单选框，对应的<input type="radio">，用于选择一项；
    复选框，对应的<input type="checkbox">，用于选择多项；
    下拉框，对应的<select>，用于选择一项；
    隐藏文本，对应的<input type="hidden">，用户不可见。

获取值，直接调用value；设置值和获取值类似。
HTML5新增了大量标准控件，常用的包括date、datetime、
datetime-local、color等，它们都使用<input>标签。
*/

/*
操作文件
表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data，
method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。

AJAX
在现代浏览器上写AJAX主要依靠XMLHttpRequest对象.
var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}
// 发送请求:
request.open('GET', '/api/categories');
request.send();

var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP');
}

通过检测window对象是否有XMLHttpRequest属性来确定浏览器是否支持标准的XMLHttpRequest。
当创建了XMLHttpRequest对象后，要先设置onreadystatechange的回调函数。
在回调函数中，通常我们只需通过readyState === 4判断请求是否完成，
如果已完成，再根据status === 200判断是否是一个成功的响应。
使用open()和send()，完成后续工作。

JavaScript请求外域URL。
    一是通过Flash插件发送HTTP请求；
    二是通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器，
    '/proxy?url=http://www.sina.com.cn'；
    第三种方式称为JSONP，它有个限制，只能用GET请求，并且要求返回JavaScript：
//JSONP加载跨域URL
function getPrice() {
  var
      js = document.createElement('script'),
      head = document.getElementsByTagName('head')[0];
  js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
  head.appendChild(js);
}
//回调数据
function refreshPrice(data) {
  var p = document.getElementById('msg');
  p.innerHTML = data['0000001'].name +': ' + 
                data['0000001'].price + '；\n' +
                data['1399001'].name + ': ' +
                data['1399001'].price;
}
//刷新数据
function refresh(){
  getPrice();
  refreshPrice();
}
就完成了跨域加载数据。

CORS
CORS全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。
Origin表示本域，也就是浏览器当前页面的域。
当JavaScript向外域（如sina.com）发起请求后，浏览器收到响应后，
首先检查Access-Control-Allow-Origin是否包含本域，如果是，
则此次跨域请求成功，如果不是，则请求失败，JavaScript将无法获取到响应的任何数据。
跨域能否成功，取决于对方服务器是否愿意给你设置一个正确的Access-Control-Allow-Origin，
决定权始终在对方手中。
    //本域 Origin: http://my.com
    OPTIONS /path/to/resource HTTP/1.1
    Host: bar.com
    Origin: http://my.com
    Access-Control-Request-Method: POST
    ||=============================================================
    //外域Access-Control-Allow-Origin: http://my.com ，允许本域访问。
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: http://my.com
    //服务器必须响应并明确指出允许的Method：
    Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS
    Access-Control-Max-Age: 86400

Promise对象
这种“承诺将来会执行”的对象在JavaScript中称为Promise对象。
===>promise.then(promise1).then(promise2).catch(promise3);
function add(i) {
  return new Promise(function(resolve,reject){
    console.log(i + '+' + i + '=' + (i + i));
    setTimeout(resolve,500,i+i);
  });
}
function multiply(j) {
  console.log(j + '*' + j + '=' + j * j);
  return new Promise(function(resolve,reject){
    setTimeout(resolve,500,j*j);
  });
}
var pr = new Promise(function(resolve,reject){
    resolve(4);
});
pr.then(add).then(multiply).then(add);
setTimeout可以看成一个模拟网络等异步执行的函数.

// Promise如何简化异步处理
function ajax(method, url, data) {
  var request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
      request.onreadystatechange = function () {
          if (request.readyState === 4) {
              if (request.status === 200) {
                  resolve(request.responseText);
              } else {
                  reject(request.status);
              }
          }
      };
      request.open(method, url);
      request.send(data);
  });
}
var url = '127.0.0.1';
var p = ajax('GET',url);
p.then(function (responseText) { 
  // 如果AJAX成功，获得响应内容
    console.log(responseText);
}).catch(function (status) { 
  // 如果AJAX失败，获得响应代码
  console.log(status);
});
//同时执行两个Primise
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});
用Promise.race()获得先返回的结果即可.

Canvas
Canvas是HTML5新增的组件，它就像一块幕布，可以用JavaScript在上面绘制各种图表、动画等。
一个Canvas定义一个指定尺寸的矩形框，在这个范围内我们可以随意绘制.
Canvas的坐标以左上角为原点，水平向右为X轴，垂直向下为Y轴，以像素为单位.
*/

/**
 * Cherry
 * 2020-3-10
 */

/*
jQuery
jQuery的理念“Write Less, Do More“，让你写更少的代码，完成更多的工作！ 
$是著名的jQuery符号。实际上，jQuery把所有功能全部封装在一个全局变量jQuery中，
而$也是一个合法的变量名，它是变量jQuery的别名.
//加载jQuery文件
    (function(){
      var script = document.createElement('script');
      var head = document.getElementsByTagName('head')[0];
      script.type="text/javascript";
      //加载jQuery
      // script.src = 'https://code.jquery.com/jquery-3.4.1.js';
      //加载Underscore
      // script.src = 'https://underscorejs.net/underscore.js';
      script.src = './jquery-3.4.1.min.js';
      head.appendChild(script);
    })();
    console.log('jQuery版本：' + $.fn.jquery);
选择器
选择器是jQuery的核心,返回的对象是jQuery对象.
什么是jQuery对象？jQuery对象类似数组，它的每个元素都是一个引用了DOM节点的对象。
调用$(DomObject)把DOM变成jQuery对象，这样就可以方便地使用jQuery的API了。
    按照ID查找$('#dom-id'),
    按照CLASS查找$('.dom-class'),
    按照TAG查找$('tagName')，
    按照属性[name = Cherry]查找#(['name = Cherry']),
      这个方法尤其适合通过class属性查找.
      var classes = $('[class^=col]'); // 找出所有class属性值以col开头的DOM
      // 例如: class="col-1", class="col-2"
      var icons = $('[name$=cn]'); // 找出所有name属性值以cn结尾的DOM
    组合查找就是把上述简单选择器组合起来使用。
      $('tr.red');//查找tr中class为red的DOM，
      $('input[name=email]')//查找imput中name属性为email的DOM。
    多项选择器把多个选择器用,组合起来一块选。
      $('p,div'); // 把<p>和<div>都选出来
      $('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来

层级选择器      
除了基本的选择器外，jQuery的层级选择器更加灵活，也更强大。
DOM元素具有层级关系，就可以用$('a b')来选择，层级之间用空格隔开。
子选择器（Child Selector）
子选择器$('parent>child')类似层级选择器，但是限定了层级关系必须是父子关系，
就是<child>节点必须是<parent>节点的直属子节点。

过滤器（Filter）
过滤器一般不单独使用，它通常附加在选择器上，帮助我们更精确地定位元素。观察过滤器的效果：
    $('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点
    $('ul.lang li:first-child'); // 仅选出JavaScript
    $('ul.lang li:last-child'); // 仅选出Lua
    $('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
    $('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
    $('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素

查找和过滤
通常情况下选择器可以直接定位到我们想要的元素，
但是，当我们拿到一个jQuery对象后，还可以以这个对象为基准，进行查找和过滤。
查找是在某个节点的所有子节点中查找，使用find()方法，它本身又接收一个任意的选择器。
用find()查找：
    var ul = $('ul.lang'); // 获得<ul>
    var dy = ul.find('.dy'); // 获得JavaScript, Python, Scheme
    var swf = ul.find('#swift'); // 获得Swift
    var hsk = ul.find('[name=haskell]'); // 获得Haskell
用parent()向上查找，用next()和prev()向前后查找,
filter()方法可以过滤掉不符合选择器条件的节点
map()方法把一个jQuery对象包含的若干DOM节点转化为其他对象
first()、last()和slice()方法可以返回一个新的jQuery对象，

jQuery操作DOM
text()和html()获取文本文本赋值
css('attributeCssName', 'value')修改样式
addClass()修改class属性
show()和hide()显示和隐藏
attr()和removeAttr()节点属性
val()获取value属性
append()把DOM添加到最后
prepend()把DOM添加到最前（after()或者before()方法）
remove()删除DOM节点

attr()和prop()对于属性checked处理有所不同：
var radio = $('#test-radio');
radio.attr('checked'); // 'checked'
radio.prop('checked'); // true
prop()返回值更合理一些。不过，用is()方法判断更好：
var radio = $('#test-radio');
radio.is(':checked'); // true
类似的属性还有selected，处理时最好用is(':selected')。
*/

/*
事件
因为JavaScript在浏览器中以单线程模式运行，页面加载后，
一旦页面上所有的JavaScript代码被执行完后，就只能依赖触发事件来执行JavaScript代码。
由于不同的浏览器绑定事件的代码都不太一样，所以用jQuery来写代码，就屏蔽了不同浏览器的差异，
我们总是编写相同的代码。
on方法用来绑定一个事件，我们需要传入事件名称和对应的处理函数。
off('click'),off('click', function)来取消绑定的函数。
    var a = $('#js1');
    a.on('dblclick',function(){
    a.find('h2').hide();
    setTimeout(function(){
      a.find('h2').show();
    },2000);
});
鼠标事件
    click: 鼠标单击时触发；
    dblclick：鼠标双击时触发；
    mouseenter：鼠标进入时触发；
    mouseleave：鼠标移出时触发；
    mousemove：鼠标在DOM内部移动时触发；
    hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。
键盘事件
键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。
    keydown：键盘按下时触发；
    keyup：键盘松开时触发；
    keypress：按一次键后触发。
其他事件
    focus：当DOM获得焦点时触发；
    blur：当DOM失去焦点时触发；
    change：当<input>、<select>或<textarea>的内容改变时触发；
    submit：当<form>提交时触发；
    ready：当页面被载入并且DOM树完成初始化后触发。
ready
仅作用于document对象,ready事件在DOM完成初始化后触发，
且只触发一次，所以非常适合用来写其他的js初始化代码,使js位置自由。
ready()等同于$(fn);
    简化为：
    $(function () {
        // init...
    })

“敏感代码”只能由用户操作来触发
*/


/*
AJAX
编写jQuery插件
给jQuery对象绑定一个新方法是通过扩展$.fn对象实现的。
可以给方法加个参数.
    $.fn.hideShow = function (data){
      console.log(data);
      this.on('click',function(){
        $(this).hide();
        setTimeout(() =>$(this).show(),2000);
      });
      return this;
    }
    $('#js1').hideShow('传入的参数');

编写jQuery Plugin可以用来扩展jQuery的功能。
对于默认值的处理，我们用了一个简单的&&和||短路操作符，总能得到一个有效的值。
编写一个jQuery插件的原则：
    给$.fn绑定函数，实现插件的代码逻辑；
    插件函数最后要return this;以支持链式调用；
    插件函数要有默认值，绑定在$.fn.<pluginName>.defaults上；
    用户在调用时可传入设定值以便覆盖默认值。
jQuery辅助方法$.extend(target, obj1, obj2, ...)，$.extend()无非也就是三种用法：
    1.合并多个对象；
    2.深度嵌套对象；
    3.扩展jQuery静态方法；
    //合并对象
    var obj1 = {name:'leon',age:'25'};
    var obj2 = {hobby:'read',hight:'183'};
    var obj = $.extend(obj1,obj2);
    console.log(obj)//{ name: "leon", age: "25", hobby: "read", hight: "183" }

    //深度嵌套对象
    var person1 = {
        name:'Cherry',
        study:{
          math:70,
          chinese:90
        }
    };
    var person2 = {
      age:'21',
      study:{
        english:72,
        physics:94
      }
    };
    var person = $.extend(true,person1,person2);
    console.log(person);

    age: "21"
    name: "Cherry"    ​
    study:    ​​
        chinese: 90        ​​
        english: 72       ​​
        math: 70        ​​
        physics: 94

    //扩展jQuery静态方法:$.extend({}, obj1, obj2, ...)
external扩展
*/

/*
underscore(https://underscorejs.org)
underscore提供了一套完善的函数式编程的接口，
让我们更方便地在JavaScript中实现函数式编程。
Underscor.js定义了一个下划线  _   对象，函数库的所有方法都属于这个对象。

Collections
underscore为集合类对象提供了一致的接口。集合类是指Array和Object，暂不支持Map和Set。
underscore的map()和filter()可以作用于Object。当作用于Object时，
传入的函数为function (value, key)，第一个参数接收value，第二个参数接收key.
    var upper = _.map(obj, function (value, key) {
        return obj;
    });
groupBy()把集合的元素按照key归类，key由传入的函数返回.
shuffle()用洗牌算法随机打乱一个集合.
sample(arry,num)则是随机选择一个或多个元素.
    var a = _.sample([1,2,3,2,3,4,5,6,7,89],2);
    console.log(a);

Arrays
underscore为Array提供了许多工具类方法，可以更方便快捷地操作Array。
first() / last()取第一个和最后一个元素：
    var a = ['Cherry','Tony','Jack','Danie'];
    var b = _.first(a);//Cherry
    var c = _.last(a);//Danie
flatten()接收一个Array，无论这个Array里面嵌套了多少个Array，
flatten()最后都把它们变成一个一维数组：
    var a = ['Cherry','Tony','Jack','Danie',[12,34,56],[true,false]];
    //[ "Cherry", "Tony", "Jack", "Danie", 12, 34, 56, true, false ]
    var b = _.flatten(a);
zip() / unzip()接受两个Array按数组下标进行映射合并/拆解，
    var key = ['name','age','sex'];
    var value = ['Cherry',29,'Male'];
    var a = _.zip(key,value);
    //[[ "name", "Cherry" ],[ "age", 29 ],["sex","Male"]]
    var b = [[ "name", "Cherry" ],[ "age", 29 ],["sex","Male"]];
    var c = _.unzip(b)
    console.log(a);
_.object()接受两个数组映射成key:value的对象
    var key = ['name','age','sex'];
    var value = ['Cherry',29,'Male'];
    var a = _.object(key,value);//{ name: "Cherry", age: 29, sex: "Male" }
    console.log(a);
range(start,end,length)快速生成一个序列.(不包含end值)
    _.range(0,11,2);//0  =< x < 11 ,步长为2  [ 0, 2, 4, 6, 8, 10 ]
    _.range(4);// [ 0, 1, 2, 3 ]
_.uniq(arr,fn)取出重复元素。

Functions
underscore提供了大量JavaScript本身没有的高阶函数。
bind()是方法重新赋值后可以调用。
当用一个变量fn指向一个对象的方法时，直接调用fn()是不行的，因为丢失了this对象的引用。
用bind可以修复这个问题。
    var s = ' Hello  ';
    var fn = _.bind(s.trim,s);
    fn();
partial()就是为一个函数创建偏函数，可以降低新函数调用的难度。
    Math.pow(x,y);//x的y次方
    var pow2N = _.partial(Math.pow,2);//2的n次方
    var powN2 = _.partial(Math.pow,_,2);//n的2次方
memoize()就可以自动缓存函数计算的结果。
    var a = _.range(1000);
    var b = _.memoize(function(r){
      console.log('done!');
      return r.reduce((x,y) => x+y);
    });
    b(a);
    b(a);//第二个没用打印
once()保证某个函数执行且仅执行一次。
delay()可以让一个函数延迟执行，效果和setTimeout()是一样的。

Objects
keys / allKeys
keys()可以非常方便地返回一个object自身所有的key，但不包含从原型链继承下来的。
allKeys()除了object自身的key，还包含从原型链继承下来的。
values()返回object自身但不包含原型链继承的所有值。
    var person = { name: "Cherry", age: 29, sex: "Male"};
    console.log(_.keys(person));//[ "name", "age", "sex"]
    console.log(_.values(person));//[ "Cherry", 29, "Male"]
mapObject(obj,fn)就是针对object的map版本.
    var person = { name: "Cherry", hobby: "program", sex: "Male"};
    // 注意传入的函数签名，value在前，key在后
    var p = _.mapObject(person,(v,k) => v.toUpperCase());
    console.log(p);//{ name: "CHERRY", hobby: "PROGRAM", sex: "MALE" }
invert()把object的每个key-value来个交换，key变成value，value变成key.
extend(a,b,c,···)把多个object的key-value合并到第一个object并返回.
extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性。
clone()是“浅复制”。所谓“浅复制”就是说，两个对象相同的key所引用的value其实是同一对象.
isEqual()对两个object进行深度比较，如果内容完全相同，则返回true.

chain()函数把对象包装成能进行链式调用的方法.
    var r = _.chain([1, 4, 9, 16, 25])
            .map(Math.sqrt)
            .filter(x => x % 2 === 1)
            .value();
    console.log(r); // [1, 3, 5]
*/