JS-Type-Checking
================


```js
var l;//undefined
var m = null;//null
var n = 12;//Number
var nn = new Number(12);//Number
var o = NaN;//NaN
var p = true;//Boolean
var pp = new Boolean(true);//Boolean
var q = 'bazz';//String
var qq = new String('bazz');//String
var r = {};//Object
var rr = new Object();//Object
var s = [1, 2, 3];//Array
var ss = new Array(1, 2, 3);//Array
var t = new Date();//Date
var u = function (foo) {return foo;}//Function
var uu = new Function('');//Function
var v = /abc/g;//RegExp
var vv = new RegExp('meow');//RegExp
var w = new Error();//Error
```

----------


> typeof 

`$ node tc.js 1`


----------


> instanceof

`$ node  tc.js 2`

----------

> constructor

`$ node tc.js 3`

----------

> Object.prototype.toString

`$ node tc.js 4`


----------


